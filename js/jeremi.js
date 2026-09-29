// Logica interactiva para Estadios Legendarios (Jeremy)

// Base de datos detallada de los Estadios
const stadiumData = {
    maracana: {
        fullName: "Estadio Jornalista Mario Filho (Maracana)",
        cityCountry: "Rio de Janeiro, Brasil",
        year: 1950,
        capacity: "78,838 espectadores",
        teams: "Flamengo, Fluminense, Seleccion de Brasil",
        whyLegendary: "Considerado el templo supremo del futbol mundial. Sede de dos finales de la Copa del Mundo y cuna del mito del futbol brasileno.",
        history: "Construido para el Mundial de 1950, llego a albergar a cerca de 200,000 personas en el famoso 'Maracanazo'. Ha sido remodelado para cumplir los estandares FIFA manteniendo su mistica intacta.",
        timeline: [
            { year: "1950", event: "Inauguracion y final del Mundial (Uruguay 2 - 1 Brasil)." },
            { year: "1969", event: "Pele marca su gol numero 1,000 de penalti." },
            { year: "2014", event: "Sede de la final del Mundial FIFA (Alemania 1 - 0 Argentina)." },
            { year: "2016", event: "Ceremonia de apertura de los Juegos Olimpicos de Rio." }
        ],
        matches: [
            "Final Mundial 1950: Uruguay vs. Brasil",
            "Final Mundial 2014: Alemania vs. Argentina",
            "Final Copa Libertadores 2023: Fluminense vs. Boca Juniors"
        ],
        curiosities: [
            "Posee el record historico de asistencia en un partido de futbol (199,854 espectadores en 1950).",
            "Nombrado en honor al periodista Mario Filho, impulsor de su construccion.",
            "Posee un 'Paseo de la Fama' con las huellas de pies de leyendas como Pele, Zico y Messi."
        ]
    },
    bernabeu: {
        fullName: "Estadio Santiago Bernabeu",
        cityCountry: "Madrid, Espana",
        year: 1947,
        capacity: "81,044 espectadores",
        teams: "Real Madrid C.F., Seleccion de Espana",
        whyLegendary: "El coliseo del club mas ganador de Europa. Epicentro de las noches magicas de remontada en la UEFA Champions League.",
        history: "Inaugurado como Estadio Chamartin, cambio su nombre en honor al presidente visionario Santiago Bernabeu. En 2023 completo su transformacion a un recinto futurista con cubierta y cesped retractil.",
        timeline: [
            { year: "1947", event: "Inauguracion bajo el nombre de Estadio Real Madrid Club de Futbol." },
            { year: "1982", event: "Sede de la final de la Copa del Mundo (Italia 3 - 1 Alemania)." },
            { year: "2018", event: "Sede historica de la final de Copa Libertadores (River vs. Boca)." },
            { year: "2023", event: "Culminacion de la remodelacion futurista con cesped retractil bajo tierra." }
        ],
        matches: [
            "Final Copa del Mundo 1982: Italia vs. Alemania Federal",
            "Final Champions League 2010: Inter de Milan vs. Bayern Munich",
            "Final Copa Libertadores 2018: River Plate vs. Boca Juniors"
        ],
        curiosities: [
            "Cuenta con un invernadero subterraneo de 30 metros de profundidad para conservar el cesped.",
            "Es el unico estadio en el mundo que ha acogido las finales del Mundial, Eurocopa, Champions League y Copa Libertadores.",
            "Su fachada exterior cuenta con una pantalla LED gigante envolvente."
        ]
    },
    wembley: {
        fullName: "Wembley Stadium",
        cityCountry: "Londres, Inglaterra",
        year: "1923 (Reapertura 2007)",
        capacity: "90,000 espectadores",
        teams: "Seleccion de Inglaterra",
        whyLegendary: "Conocido internacionalmente como 'La Catedral del Futbol'. Escenario sagrado para las finales de la FA Cup y la Champions League.",
        history: "El estadio original de las dos torres fue demolido en 2003. El nuevo Wembley se erigio sobre la misma ubicacion, coronado por su imponente arco visible a kilometros.",
        timeline: [
            { year: "1923", event: "Inauguracion del antiguo Wembley en la famosa 'Final del Caballo Blanco'." },
            { year: "1966", event: "Inglaterra se corona campeona del mundo por unica vez en su historia." },
            { year: "2007", event: "Inauguracion del nuevo Wembley con su arco de 133m." },
            { year: "2024", event: "Sede de la final de la UEFA Champions League (Real Madrid vs. Dortmund)." }
        ],
        matches: [
            "Final Mundial 1966: Inglaterra vs. Alemania Federal",
            "Final Champions League 2011: FC Barcelona vs. Manchester United",
            "Final Eurocopa 2020: Italia vs. Inglaterra"
        ],
        curiosities: [
            "Tiene 2,618 banos, mas que cualquier otro recinto deportivo en el planeta.",
            "El iconico arco mide 133 metros de altura y sostiene todo el peso del techo sin columnas.",
            "Pele dijo una vez: 'Wembley es la catedral, la capital y el corazon del futbol'."
        ]
    },
    campnou: {
        fullName: "Spotify Camp Nou",
        cityCountry: "Barcelona, Espana",
        year: 1957,
        capacity: "99,354 espectadores",
        teams: "FC Barcelona",
        whyLegendary: "El estadio de mayor capacidad de Europa. Templo del juego de posesion y cuna del mejor FC Barcelona de la historia.",
        history: "Construido para sustituir al antiguo feudo de Les Corts. Ha presenciado el esplendor de estrellas como Johan Cruyff, Diego Maradona, Ronaldinho y Lionel Messi.",
        timeline: [
            { year: "1957", event: "Inauguracion oficial con triunfo ante el Legia de Varsovia." },
            { year: "1982", event: "Ampliacion para el Mundial de Espana alcanzando 120,000 de capacidad." },
            { year: "1999", event: "Epica final de Champions: Manchester United vence en el descuento al Bayern." },
            { year: "2023", event: "Inicio de la remodelacion masiva del proyecto 'Espai Barca'." }
        ],
        matches: [
            "Final Champions League 1999: Manchester United vs. Bayern Munich",
            "Semifinal Mundial 1982: Italia vs. Polonia",
            "El Clasico 2010: FC Barcelona 5 - 0 Real Madrid"
        ],
        curiosities: [
            "Llego a albergar a 121,749 espectadores durante el Mundial de 1982.",
            "Es uno de los pocos estadios clasificados con categoria 4 por la UEFA.",
            "El Papa Juan Pablo II oficio una misa para mas de 120,000 fieles en 1982."
        ]
    },
    sansiro: {
        fullName: "Estadio Giuseppe Meazza / San Siro",
        cityCountry: "Milan, Italia",
        year: 1926,
        capacity: "75,817 espectadores",
        teams: "AC Milan, Inter de Milan",
        whyLegendary: "Fortaleza compartida por dos gigantes mundiales del 'Derby della Madonnina'. Famoso por sus 11 torres cilindricas exteriores.",
        history: "Originalmente propiedad del Milan, paso a manos municipales en 1935 y el Inter comenzo a jugar alli en 1947. Fue renombrado en honor a Giuseppe Meazza, doble campeon mundial.",
        timeline: [
            { year: "1926", event: "Inauguracion con un clasico Milan 3 - 6 Inter." },
            { year: "1965", event: "Inter se corona campeon de Europa en su propio estadio." },
            { year: "1990", event: "Remodelacion del Mundial 1990 con la construccion del tercer anfiteatro y torres." },
            { year: "2016", event: "Sede de la final de Champions League (Real Madrid vs. Atletico)." }
        ],
        matches: [
            "Final Copa de Europa 1965: Inter de Milan vs. Benfica",
            "Inauguracion Mundial 1990: Argentina vs. Camerun",
            "Final Champions League 2001: Bayern Munich vs. Valencia"
        ],
        curiosities: [
            "Tiene dos vestuarios principales completamente personalizados para Milan e Inter.",
            "Las torres exteriores permiten evacuar el estadio en menos de 10 minutos.",
            "Sera sede de la ceremonia de apertura de los Juegos Olimpicos de Invierno Milan-Cortina 2026."
        ]
    },
    allianz: {
        fullName: "Allianz Arena",
        cityCountry: "Munich, Alemania",
        year: 2005,
        capacity: "75,024 espectadores",
        teams: "Bayern Munich, Seleccion de Alemania",
        whyLegendary: "La joya de la arquitectura moderna del futbol. Primer estadio del mundo con una fachada exterior inflable capaz de cambiar completamente de color.",
        history: "Construido para el Mundial de 2006, fue disenado por los afamados arquitectos suizos Herzog & de Meuron. Sus 2,874 paneles de ETFE crean un espectaculo visual unico.",
        timeline: [
            { year: "2005", event: "Inauguracion oficial." },
            { year: "2006", event: "Partido inaugural del Mundial (Alemania 4 - 2 Costa Rica)." },
            { year: "2012", event: "Dramatica final de Champions League ('Finale Dahoam' Bayern vs. Chelsea)." },
            { year: "2024", event: "Sede de partidos clave de la UEFA Euro 2024." }
        ],
        matches: [
            "Inauguracion Mundial 2006: Alemania vs. Costa Rica",
            "Final Champions League 2012: Bayern Munich vs. Chelsea",
            "Semifinal Eurocopa 2024: Espana vs. Francia"
        ],
        curiosities: [
            "La fachada se ilumina de rojo para el Bayern y con los colores nacionales para la seleccion.",
            "Posee el aparcamiento subterraneo mas grande de Europa para un estadio (casi 10,000 plazas).",
            "Sus paneles cuentan con un sistema de autolimpieza mediante flujo de aire."
        ]
    }
};

// Logica de Modal y Buscador
document.addEventListener('DOMContentLoaded', () => {
    // 1. Manejo del Buscador en Vivo
    const searchInput = document.getElementById('stadium-search');
    const stadiumCards = document.querySelectorAll('.stadium-card-item');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            stadiumCards.forEach(card => {
                const text = card.textContent.toLowerCase();
                card.style.display = text.includes(query) ? 'block' : 'none';
            });
        });
    }

    // 2. Interaccion de Clic para Abrir Modal
    const cards = document.querySelectorAll('.stadium-card');
    const modalElement = document.getElementById('stadiumDetailModal');
    let modalInstance = null;
    if (modalElement && typeof bootstrap !== 'undefined') {
        modalInstance = new bootstrap.Modal(modalElement);
    }

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const stadiumKey = card.getAttribute('data-stadium');
            const data = stadiumData[stadiumKey];

            if (!data) return;

            // Rellenar datos en el Modal
            const modalTitle = document.getElementById('modalTitle');
            const modalLocation = document.getElementById('modalLocation');
            const modalCapacity = document.getElementById('modalCapacity');
            const modalYear = document.getElementById('modalYear');
            const modalTeams = document.getElementById('modalTeams');
            const modalWhyLegendary = document.getElementById('modalWhyLegendary');
            const modalHistory = document.getElementById('modalHistory');
            const modalImage = document.getElementById('modalImage');

            if (modalTitle) modalTitle.textContent = data.fullName;
            if (modalLocation) modalLocation.textContent = data.cityCountry;
            if (modalCapacity) modalCapacity.textContent = data.capacity;
            if (modalYear) modalYear.textContent = data.year;
            if (modalTeams) modalTeams.textContent = data.teams;
            if (modalWhyLegendary) modalWhyLegendary.textContent = data.whyLegendary;
            if (modalHistory) modalHistory.textContent = data.history;

            // Extraer la imagen de la tarjeta seleccionada
            const cardImg = card.querySelector('.stadium-img');
            if (modalImage && cardImg) {
                modalImage.src = cardImg.src;
                modalImage.alt = data.fullName;
            }

            // Renderizar Linea del Tiempo
            const timelineContainer = document.getElementById('modalTimeline');
            if (timelineContainer) {
                timelineContainer.innerHTML = '';
                data.timeline.forEach(item => {
                    const div = document.createElement('div');
                    div.className = 'timeline-item';
                    div.innerHTML = `<span class="timeline-year">${item.year}:</span> <span>${item.event}</span>`;
                    timelineContainer.appendChild(div);
                });
            }

            // Renderizar Partidos Historicos
            const matchesContainer = document.getElementById('modalMatches');
            if (matchesContainer) {
                matchesContainer.innerHTML = '';
                const svgTrophy = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15" style="color:var(--j-amber-d);flex-shrink:0;"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H8c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1h-1c-.55 0-1-.45-1-1v-2.34"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg>`;
                data.matches.forEach(match => {
                    const li = document.createElement('li');
                    li.className = 'stadium-match-item';
                    li.innerHTML = `${svgTrophy} <span>${match}</span>`;
                    matchesContainer.appendChild(li);
                });
            }

            // Renderizar Curiosidades
            const curiositiesContainer = document.getElementById('modalCuriosities');
            if (curiositiesContainer) {
                curiositiesContainer.innerHTML = '';
                data.curiosities.forEach(curiosity => {
                    const li = document.createElement('li');
                    li.className = 'stadium-curiosity-item';
                    li.textContent = curiosity;
                    curiositiesContainer.appendChild(li);
                });
            }

            // Mostrar el Modal
            if (modalInstance) {
                modalInstance.show();
            }
        });
    });
});