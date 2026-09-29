document.addEventListener('DOMContentLoaded', () => {
    // 1. Datos iniciales de comunicados e impresiones
    const noticias = [
        {
            id: 1,
            titulo: "Declaraciones del DT tras la clasificación a finales",
            categoria: "rueda",
            categoriaNombre: "Rueda de Prensa",
            fecha: "28 Sep 2026",
            resumen: "El estratega analizó el rendimiento táctico del equipo y destacó la solidez defensiva en los minutos decisivos.",
            autor: "Prensa GolStats"
        },
        {
            id: 2,
            titulo: "Comunicado Oficial: Reporte médico del capitán",
            categoria: "oficial",
            categoriaNombre: "Comunicado Oficial",
            fecha: "27 Sep 2026",
            resumen: "Tras las evaluaciones médicas realizadas esta mañana, se confirma un esguince leve. Su retorno estimado es de 10 días.",
            autor: "Cuerpo Médico"
        },
        {
            id: 3,
            titulo: "Entrevista Exclusiva: 'El grupo está más unido que nunca'",
            categoria: "entrevista",
            categoriaNombre: "Entrevista",
            fecha: "25 Sep 2026",
            resumen: "Conversamos con el máximo goleador de la temporada sobre su racha anotadora y los objetivos colectivos.",
            autor: "Redacción Deportes"
        },
        {
            id: 4,
            titulo: "Apertura de acreditaciones para la jornada internacional",
            categoria: "oficial",
            categoriaNombre: "Comunicado Oficial",
            fecha: "24 Sep 2026",
            resumen: "Se informa a los medios de comunicación que el proceso de acreditación para el partido de vuelta está disponible.",
            autor: "Prensa GolStats"
        }
    ];

    // 2. Elementos del DOM
    const newsContainer = document.getElementById('newsContainer');
    const searchInput = document.getElementById('searchInput');
    const filterButtons = document.querySelectorAll('#filterGroup button');

    let currentCategory = 'todos';
    let currentSearchQuery = '';

    // 3. Función para renderizar noticias
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
                    <p class="text-secondary fs-5">📂 No se encontraron comunicados o noticias con ese criterio.</p>
                </div>
            `;
            return;
        }

        filtered.forEach(item => {
            const col = document.createElement('div');
            col.className = 'col-md-6 col-lg-6';

            let badgeClass = 'badge-oficial';
            if (item.categoria === 'rueda') badgeClass = 'badge-rueda';
            if (item.categoria === 'entrevista') badgeClass = 'badge-entrevista';

            col.innerHTML = `
                <div class="card card-news h-100 text-light p-3 position-relative rounded-3">
                    <span class="news-badge ${badgeClass}">${item.categoriaNombre}</span>
                    <div class="card-body d-flex flex-column justify-content-between">
                        <div>
                            <small class="text-success fw-semibold">📅 ${item.fecha} | ✍️ ${item.autor}</small>
                            <h4 class="card-title mt-2 mb-3 fw-bold">${item.titulo}</h4>
                            <p class="card-text text-secondary">${item.resumen}</p>
                        </div>
                    </div>
                </div>
            `;
            newsContainer.appendChild(col);
        });
    }

    // Inicializar render
    renderNews();

    // 4. Evento del Buscador
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearchQuery = e.target.value.trim();
            renderNews();
        });
    }

    // 5. Eventos de Filtro por Categoría
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.getAttribute('data-category');
            renderNews();
        });
    });
});