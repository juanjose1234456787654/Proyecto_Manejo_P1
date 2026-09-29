document.addEventListener('DOMContentLoaded', () => {
    // 1. Datos iniciales de noticias
    const noticias = [
        {
            id: 1,
            titulo: "Declaraciones del DT tras la clasificacion a la gran final",
            categoria: "rueda",
            categoriaNombre: "Rueda de Prensa",
            fecha: "28 Sep 2026",
            autor: "Prensa Oficial GolStats",
            resumen: "El estratega analizo el rendimiento tactico del equipo y destaco la solidez defensiva en los minutos decisivos.",
            contenido: "En una concurrida conferencia de prensa, el cuerpo tecnico expreso su satisfaccion por alcanzar el objetivo planteado al inicio del torneo. 'El grupo demostro jerarquia en los momentos de mayor presion. Ahora nos enfocamos al 100% en la preparacion fisica y tactica para el partido decisivo', senalo el entrenador.",
            reacciones: { like: 12, fuego: 8, aplauso: 15 }
        },
        {
            id: 2,
            titulo: "Comunicado Oficial: Reporte medico del capitan",
            categoria: "oficial",
            categoriaNombre: "Comunicado Oficial",
            fecha: "27 Sep 2026",
            autor: "Cuerpo Medico GolStats",
            resumen: "Tras las evaluaciones medicas realizadas esta manana, se confirma un esguince leve de tobillo.",
            contenido: "El Departamento Medico informa que, tras realizar los examenes de resonancia magnetica correspondientes, el capitan del primer equipo presenta un esguince grado 1. Ya ha iniciado su proceso de fisioterapia y se estima su retorno a los entrenamientos en un lapso de 7 a 10 dias.",
            reacciones: { like: 5, fuego: 2, aplauso: 20 }
        },
        {
            id: 3,
            titulo: "Entrevista Exclusiva: 'El grupo esta mas fuerte que nunca'",
            categoria: "entrevista",
            categoriaNombre: "Entrevista",
            fecha: "25 Sep 2026",
            autor: "Redaccion Deportes",
            resumen: "Conversamos con el maximo goleador de la temporada sobre su racha anotadora y el ambiente en el camerino.",
            contenido: "'Los goles son fruto del trabajo colectivo de todo el plantel. Sentimos el respaldo incondicional de la hinchada y queremos darles la alegria del titulo. Personalmente atravieso uno de los mejores momentos de mi carrera', destaco el ariete.",
            reacciones: { like: 24, fuego: 19, aplauso: 30 }
        },
        {
            id: 4,
            titulo: "Apertura del proceso de acreditacion para la final",
            categoria: "oficial",
            categoriaNombre: "Comunicado Oficial",
            fecha: "24 Sep 2026",
            autor: "Departamento de Prensa",
            resumen: "Se informa a los medios de comunicacion la apertura del sistema digital para la solicitud de pases de prensa.",
            contenido: "La Direccion de Comunicacion habilita a partir de hoy el formulario digital para la acreditacion de periodistas, fotografos y cadenas de transmision interesados en la cobertura del partido de la gran final. Las solicitudes se recibiran hasta 48 horas antes del evento.",
            reacciones: { like: 9, fuego: 4, aplauso: 11 }
        }
    ];

    // Persistencia de Reacciones en localStorage
    const STORAGE_REACCIONES = 'golstats_reacciones_noticias';
    let reaccionesGuardadas = JSON.parse(localStorage.getItem(STORAGE_REACCIONES));
    if (!reaccionesGuardadas) {
        reaccionesGuardadas = {};
        noticias.forEach(n => { reaccionesGuardadas[n.id] = n.reacciones; });
        localStorage.setItem(STORAGE_REACCIONES, JSON.stringify(reaccionesGuardadas));
    }

    // 2. Elementos del DOM
    const newsContainer = document.getElementById('newsContainer');
    const searchInput = document.getElementById('searchInput');
    const filterButtons = document.querySelectorAll('#filterGroup button');

    const formAcreditacion = document.getElementById('formAcreditacion');
    const acreditacionesList = document.getElementById('acreditacionesList');
    const totalAcreditaciones = document.getElementById('totalAcreditaciones');

    let currentCategory = 'todos';
    let currentSearchQuery = '';
    let noticiaSeleccionadaId = null;

    // Toast de notificacion
    function showToast(mensaje) {
        const toastEl = document.getElementById('liveToast');
        const toastMsg = document.getElementById('toastMessage');
        if (toastEl && toastMsg) {
            toastMsg.textContent = mensaje;
            const toast = new bootstrap.Toast(toastEl);
            toast.show();
        }
    }

    // Helper SVG Icons
    const svgCalendar = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="13" height="13" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`;
    const svgAuthor = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="13" height="13" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
    const svgHeart = `<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" style="color:#ef4444;" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;
    const svgFire = `<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" style="color:#f97316;" aria-hidden="true"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`;
    const svgClap = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14" style="color:#0ea5e9;" aria-hidden="true"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/><path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>`;
    const svgBook = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`;

    // 3. Renderizado de Noticias
    function renderNews() {
        if (!newsContainer) return;
        newsContainer.innerHTML = '';

        const filtered = noticias.filter(n => {
            const matchCat = currentCategory === 'todos' || n.categoria === currentCategory;
            const q = currentSearchQuery.toLowerCase();
            const matchQ = n.titulo.toLowerCase().includes(q) || n.resumen.toLowerCase().includes(q);
            return matchCat && matchQ;
        });

        if (filtered.length === 0) {
            newsContainer.innerHTML = `
                <div class="col-12 text-center py-5">
                    <p class="text-secondary fs-5">No se encontraron comunicados con ese termino de busqueda.</p>
                </div>
            `;
            return;
        }

        filtered.forEach(item => {
            const col = document.createElement('div');
            col.className = 'col-md-6';

            let badgeClass = 'badge-oficial';
            if (item.categoria === 'rueda') badgeClass = 'badge-rueda';
            if (item.categoria === 'entrevista') badgeClass = 'badge-entrevista';

            const reacciones = reaccionesGuardadas[item.id] || item.reacciones;

            col.innerHTML = `
                <article class="card card-news position-relative">
                    <span class="news-badge ${badgeClass}">${item.categoriaNombre}</span>
                    <div class="card-body p-0 d-flex flex-column justify-content-between">
                        <div>
                            <div class="news-meta">
                                <span class="d-inline-flex align-items-center gap-1">${svgCalendar} ${item.fecha}</span>
                                <span class="mx-1">•</span>
                                <span class="d-inline-flex align-items-center gap-1">${svgAuthor} ${item.autor}</span>
                            </div>
                            <h2 class="news-title">${item.titulo}</h2>
                            <p class="news-desc">${item.resumen}</p>
                        </div>
                        <div class="news-footer">
                            <div class="news-reactions-preview">
                                <span class="news-reaction-item">${svgHeart} <span>${reacciones.like}</span></span>
                                <span class="news-reaction-item">${svgFire} <span>${reacciones.fuego}</span></span>
                                <span class="news-reaction-item">${svgClap} <span>${reacciones.aplauso}</span></span>
                            </div>
                            <button class="btn-leer-mas" data-id="${item.id}" type="button">
                                ${svgBook} Leer Completo
                            </button>
                        </div>
                    </div>
                </article>
            `;
            newsContainer.appendChild(col);
        });

        // Eventos para abrir modal de lectura
        document.querySelectorAll('.btn-leer-mas').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.currentTarget.getAttribute('data-id'), 10);
                abrirModalLectura(id);
            });
        });
    }

    // Modal de Lectura
    function abrirModalLectura(id) {
        const item = noticias.find(n => n.id === id);
        if (!item) return;

        noticiaSeleccionadaId = id;

        document.getElementById('modalLecturaLabel').textContent = item.titulo;
        document.getElementById('modalMetaInfo').innerHTML = `
            <span class="d-inline-flex align-items-center gap-1">${svgCalendar} ${item.fecha}</span>
            <span class="mx-2">|</span>
            <span class="d-inline-flex align-items-center gap-1">${svgAuthor} ${item.autor}</span>
        `;
        document.getElementById('modalContenido').textContent = item.contenido;
        document.getElementById('modalCategoriaBadge').textContent = item.categoriaNombre;

        actualizarContadoresReacciones(id);

        const modalEl = document.getElementById('modalLectura');
        const modal = new bootstrap.Modal(modalEl);
        modal.show();
    }

    function actualizarContadoresReacciones(id) {
        const reac = reaccionesGuardadas[id] || { like: 0, fuego: 0, aplauso: 0 };
        document.getElementById('likeCount').textContent = reac.like;
        document.getElementById('fuegoCount').textContent = reac.fuego;
        document.getElementById('aplausoCount').textContent = reac.aplauso;
    }

    // Botones de Reaccion
    document.querySelectorAll('.btn-reaccion').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (!noticiaSeleccionadaId) return;
            const tipo = e.currentTarget.getAttribute('data-tipo');
            
            if (!reaccionesGuardadas[noticiaSeleccionadaId]) {
                reaccionesGuardadas[noticiaSeleccionadaId] = { like: 0, fuego: 0, aplauso: 0 };
            }
            
            reaccionesGuardadas[noticiaSeleccionadaId][tipo] += 1;
            localStorage.setItem(STORAGE_REACCIONES, JSON.stringify(reaccionesGuardadas));

            actualizarContadoresReacciones(noticiaSeleccionadaId);
            renderNews();
            showToast('¡Gracias por tu reaccion!');
        });
    });

    renderNews();

    // 4. Listener de busqueda y botones de filtro optimizados
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearchQuery = e.target.value.trim();
            renderNews();
        });
    }

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.getAttribute('data-category');
            renderNews();
        });
    });

    // 5. Modulo LocalStorage: Acreditaciones de Prensa
    const STORAGE_KEY = 'golstats_acreditaciones_celeste';

    function getAcreditaciones() {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    }

    function saveAcreditaciones(data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }

    function renderAcreditaciones() {
        if (!acreditacionesList) return;
        const lista = getAcreditaciones();
        acreditacionesList.innerHTML = '';

        if (totalAcreditaciones) {
            totalAcreditaciones.textContent = `${lista.length} ${lista.length === 1 ? 'solicitud' : 'solicitudes'}`;
        }

        if (lista.length === 0) {
            acreditacionesList.innerHTML = `
                <div class="col-12 text-center py-3">
                    <p class="text-secondary mb-0">No hay solicitudes registradas. Haz clic en "Solicitar Acreditacion" para agregar una.</p>
                </div>
            `;
            return;
        }

        lista.forEach((item, index) => {
            const col = document.createElement('div');
            col.className = 'col-md-6';
            col.innerHTML = `
                <div class="acreditacion-card d-flex justify-content-between align-items-center">
                    <div>
                        <h3 class="acreditacion-name">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" style="color:var(--c-green-d);"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
                            ${item.nombre}
                        </h3>
                        <p class="acreditacion-medio">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>
                            <strong>Medio:</strong> ${item.medio}
                        </p>
                        <div class="d-flex gap-1 align-items-center">
                            <span class="badge bg-light text-primary border">${item.cobertura}</span>
                            <span class="badge bg-light text-success border">En revision</span>
                        </div>
                    </div>
                    <button class="btn btn-sm btn-outline-danger btn-delete-acreditacion" data-index="${index}" title="Eliminar solicitud" type="button" aria-label="Eliminar solicitud">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                    </button>
                </div>
            `;
            acreditacionesList.appendChild(col);
        });

        document.querySelectorAll('.btn-delete-acreditacion').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = parseInt(e.currentTarget.getAttribute('data-index'), 10);
                eliminarAcreditacion(idx);
            });
        });
    }

    function eliminarAcreditacion(index) {
        const lista = getAcreditaciones();
        lista.splice(index, 1);
        saveAcreditaciones(lista);
        renderAcreditaciones();
        showToast('Solicitud de acreditacion eliminada.');
    }

    if (formAcreditacion) {
        formAcreditacion.addEventListener('submit', (e) => {
            e.preventDefault();

            const nombre = document.getElementById('nombrePeriodista').value.trim();
            const medio = document.getElementById('medioPrensa').value.trim();
            const cobertura = document.getElementById('tipoCobertura').value;

            if (!nombre || !medio) return;

            const nuevaAcreditacion = { nombre, medio, cobertura, fecha: new Date().toLocaleDateString() };
            const lista = getAcreditaciones();
            lista.push(nuevaAcreditacion);
            saveAcreditaciones(lista);

            formAcreditacion.reset();

            const modalEl = document.getElementById('modalAcreditacion');
            const modalInstance = bootstrap.Modal.getInstance(modalEl);
            if (modalInstance) modalInstance.hide();

            renderAcreditaciones();
            showToast('¡Solicitud de acreditacion enviada con exito!');
        });
    }

    renderAcreditaciones();
});