document.addEventListener('DOMContentLoaded', () => {
    // 1. Datos iniciales de noticias (Sintaxis corregida y sin propiedades duplicadas)
    const noticias = [
        {
            id: 1,
            titulo: "Declaraciones del DT tras la clasificación a la gran final",
            categoria: "rueda",
            categoriaNombre: "Rueda de Prensa",
            fecha: "28 Sep 2026",
            autor: "Prensa Oficial GolStats",
            resumen: "El estratega analizó el rendimiento táctico del equipo y destacó la solidez defensiva en los minutos decisivos.",
            contenido: "En una concurrida conferencia de prensa, el cuerpo técnico expresó su satisfacción por alcanzar el objetivo planteado al inicio del torneo. 'El grupo demostró jerarquía en los momentos de mayor presión. Ahora nos enfocamos al 100% en la preparación física y táctica para el partido decisivo', señaló el entrenador.",
            reacciones: { like: 12, fuego: 8, aplauso: 15 }
        },
        {
            id: 2,
            titulo: "Comunicado Oficial: Reporte médico del capitán",
            categoria: "oficial",
            categoriaNombre: "Comunicado Oficial",
            fecha: "27 Sep 2026",
            autor: "Cuerpo Médico GolStats",
            resumen: "Tras las evaluaciones médicas realizadas esta mañana, se confirma un esguince leve de tobillo.",
            contenido: "El Departamento Médico informa que, tras realizar los exámenes de resonancia magnética correspondientes, el capitán del primer equipo presenta un esguince grado 1. Ya ha iniciado su proceso de fisioterapia y se estima su retorno a los entrenamientos en un lapso de 7 a 10 días.",
            reacciones: { like: 5, fuego: 2, aplauso: 20 }
        },
        {
            id: 3,
            titulo: "Entrevista Exclusiva: 'El grupo está más fuerte que nunca'",
            categoria: "entrevista",
            categoriaNombre: "Entrevista",
            fecha: "25 Sep 2026",
            autor: "Redacción Deportes",
            resumen: "Conversamos con el máximo goleador de la temporada sobre su racha anotadora y el ambiente en el camerino.",
            contenido: "'Los goles son fruto del trabajo colectivo de todo el plantel. Sentimos el respaldo incondicional de la hinchada y queremos darles la alegría del título. Personalmente atravieso uno de los mejores momentos de mi carrera', destacó el ariete.",
            reacciones: { like: 24, fuego: 19, aplauso: 30 }
        },
        {
            id: 4,
            titulo: "Apertura del proceso de acreditación para la final",
            categoria: "oficial",
            categoriaNombre: "Comunicado Oficial",
            fecha: "24 Sep 2026",
            autor: "Departamento de Prensa",
            resumen: "Se informa a los medios de comunicación la apertura del sistema digital para la solicitud de pases de prensa.",
            contenido: "La Dirección de Comunicación habilita a partir de hoy el formulario digital para la acreditación de periodistas, fotógrafos y cadenas de transmisión interesados en la cobertura del partido de la gran final. Las solicitudes se recibirán hasta 48 horas antes del evento.",
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

    // Toast de notificación
    function showToast(mensaje) {
        const toastEl = document.getElementById('liveToast');
        const toastMsg = document.getElementById('toastMessage');
        if (toastEl && toastMsg) {
            toastMsg.textContent = mensaje;
            const toast = new bootstrap.Toast(toastEl);
            toast.show();
        }
    }

    // 3. Renderizado de Noticias (Lógica central sin código repetido)
    function renderNews() {
        if (!newsContainer) return;
        newsContainer.innerHTML = '';

        const filtered = noticias.filter(item => {
            const matchesCategory = currentCategory === 'todos' || item.categoria === currentCategory;
            const matchesSearch = item.titulo.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
                                  item.resumen.toLowerCase().includes(currentSearchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });

        if (filtered.length === 0) {
            newsContainer.innerHTML = `
                <div class="col-12 text-center py-5">
                    <p class="text-secondary fs-5">📂 No se encontraron comunicados con ese término de búsqueda.</p>
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
                <div class="card card-news h-100 text-light p-3 position-relative rounded-3">
                    <span class="news-badge ${badgeClass}">${item.categoriaNombre}</span>
                    <div class="card-body d-flex flex-column justify-content-between">
                        <div>
                            <small class="text-success fw-semibold">📅 ${item.fecha} | ✍️ ${item.autor}</small>
                            <h5 class="card-title mt-2 mb-3 fw-bold">${item.titulo}</h5>
                            <p class="card-text text-secondary small">${item.resumen}</p>
                        </div>
                        <div class="pt-3 border-top border-secondary d-flex justify-content-between align-items-center mt-3">
                            <span class="small text-secondary">❤️ ${reacciones.like} | 🔥 ${reacciones.fuego} | 👏 ${reacciones.aplauso}</span>
                            <button class="btn btn-outline-success btn-sm btn-leer-mas" data-id="${item.id}">
                                Leer Completo 📖
                            </button>
                        </div>
                    </div>
                </div>
            `;
            newsContainer.appendChild(col);
        });

        // Eventos para abrir modal de lectura
        document.querySelectorAll('.btn-leer-mas').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.currentTarget.getAttribute('data-id'));
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
        document.getElementById('modalMetaInfo').textContent = `📅 ${item.fecha} | ✍️ ${item.autor}`;
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

    // Botones de Reacción
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
            showToast('¡Gracias por tu reacción!');
        });
    });

    renderNews();

    // 4. Búsqueda y Filtro de Categorías Corregidos (Resuelve el Punto 3)
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
            currentCategory = btn.getAttribute('data-category'); // Asigna la categoría seleccionada
            renderNews(); // Renderiza de nuevo aplicando el filtro
        });
    });

    // 5. Módulo LocalStorage: Acreditaciones de Prensa
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
                    <p class="text-secondary mb-0">No hay solicitudes registradas. Haz clic en "Solicitar Acreditación" para agregar una.</p>
                </div>
            `;
            return;
        }

        lista.forEach((item, index) => {
            const col = document.createElement('div');
            col.className = 'col-md-6';
            col.innerHTML = `
                <div class="p-3 border rounded acreditacion-card d-flex justify-content-between align-items-center">
                    <div>
                        <h6 class="fw-bold text-light mb-1">🎙️ ${item.nombre}</h6>
                        <p class="text-secondary small mb-1">📺 <strong>Medio:</strong> ${item.medio}</p>
                        <span class="badge bg-info text-dark">${item.cobertura}</span>
                        <span class="badge bg-warning text-dark ms-1">⏳ En revisión</span>
                    </div>
                    <button class="btn btn-sm btn-outline-danger btn-delete-acreditacion" data-index="${index}" title="Eliminar solicitud">❌</button>
                </div>
            `;
            acreditacionesList.appendChild(col);
        });

        document.querySelectorAll('.btn-delete-acreditacion').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = parseInt(e.currentTarget.getAttribute('data-index'));
                eliminarAcreditacion(idx);
            });
        });
    }

    function eliminarAcreditacion(index) {
        const lista = getAcreditaciones();
        lista.splice(index, 1);
        saveAcreditaciones(lista);
        renderAcreditaciones();
        showToast('Solicitud de acreditación eliminada.');
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
            showToast('¡Solicitud de acreditación enviada con éxito!');
        });
    }

    renderAcreditaciones();
});