document.addEventListener('DOMContentLoaded', () => {
    const newsContainer = document.getElementById('newsContainer');

    // Listado inicial de noticias
    const noticias = [
        {
            id: 1,
            titulo: "Bomba en el Mercado: Acuerdo total por el fichaje estrella del verano",
            categoria: "Fichajes",
            badgeClass: "badge-fichaje",
            fecha: "28 Sep 2026",
            resumen: "Las negociaciones cerraron de madrugada. El traspaso supera los 80 millones de euros y firmará por 5 temporadas.",
            imagen: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 2,
            titulo: "Gran Final de Conferencia: Definidos los clasificados tras un agónico empate",
            categoria: "Última Hora",
            badgeClass: "badge-ultimo-minuto",
            fecha: "28 Sep 2026",
            resumen: "Un gol en el minuto 94 cambió el destino del torneo. Repasa los momentos clave del encuentro.",
            imagen: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 3,
            titulo: "Análisis Táctico: Las claves del nuevo sistema de juego que revoluciona la liga",
            categoria: "Titulares",
            badgeClass: "badge-titular",
            fecha: "27 Sep 2026",
            resumen: "Desglosamos la presión alta y la transición rápida que está descolocando a las defensas rivales.",
            imagen: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=600&q=80"
        }
    ];

    // Renderizar noticias en el DOM
    function renderNoticias(lista) {
        if (!newsContainer) return;
        newsContainer.innerHTML = '';

        lista.forEach(item => {
            const col = document.createElement('div');
            col.className = 'col-md-6 col-lg-4';
            col.innerHTML = `
                <div class="card news-card h-100 text-light">
                    <img src="${item.imagen}" class="card-img-top" alt="${item.titulo}">
                    <div class="card-body d-flex flex-column">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <span class="badge ${item.badgeClass}">${item.categoria}</span>
                            <small class="text-secondary">${item.fecha}</small>
                        </div>
                        <h5 class="card-title text-info fw-bold">${item.titulo}</h5>
                        <p class="card-text text-secondary flex-grow-1">${item.resumen}</p>
                        <button class="btn btn-outline-info btn-sm mt-3 w-100 fw-semibold">Leer Noticia Completa</button>
                    </div>
                </div>
            `;
            newsContainer.appendChild(col);
        });
    }

    renderNoticias(noticias);
});