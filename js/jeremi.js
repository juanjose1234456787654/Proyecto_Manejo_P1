// Lógica interactiva para Estadios Legendarios (Jeremy)

// Base de datos detallada de los Estadios
const stadiumData = {
    maracana: {
        fullName: "Estadio Jornalista Mário Filho (Maracaná)",
        cityCountry: "📍 Río de Janeiro, Brasil",
        year: 1950,
        capacity: "78,838 espectadores",
        teams: "Flamengo, Fluminense, Selección de Brasil",
        whyLegendary: "Considerado el templo supremo del fútbol mundial. Sede de dos finales de la Copa del Mundo y cuna del mito del fútbol brasileño.",
        history: "Construido para el Mundial de 1950, llegó a albergar a cerca de 200,000 personas en el famoso 'Maracanazo'. Ha sido remodelado para cumplir los estándares FIFA manteniendo su mística intacta.",
        timeline: [
            { year: "1950", event: "Inauguración y final del Mundial (Uruguay 2 - 1 Brasil)." },
            { year: "1969", event: "Pelé marca su gol número 1,000 de penalti." },
            { year: "2014", event: "Sede de la final del Mundial FIFA (Alemania 1 - 0 Argentina)." },
            { year: "2016", event: "Ceremonia de apertura de los Juegos Olímpicos de Río." }
        ],
        matches: [
            "Final Mundial 1950: Uruguay vs. Brasil",
            "Final Mundial 2014: Alemania vs. Argentina",
            "Final Copa Libertadores 2023: Fluminense vs. Boca Juniors"
        ],
        curiosities: [
            "Posee el récord histórico de asistencia en un partido de fútbol (199,854 espectadores en 1950).",
            "Nombrado en honor al periodista Mário Filho, impulsor de su construcción.",
            "Posee un 'Paseo de la Fama' con las huellas de pies de leyendas como Pelé, Zico y Messi."
        ]
    },
    bernabeu: {
        fullName: "Estadio Santiago Bernabéu",
        cityCountry: "📍 Madrid, España",
        year: 1947,
        capacity: "81,044 espectadores",
        teams: "Real Madrid C.F., Selección de España",
        whyLegendary: "El coliseo del club más ganador de Europa. Epicentro de las noches mágicas de remontada en la UEFA Champions League.",
        history: "Inaugurado como Estadio Chamartín, cambió su nombre en honor al presidente visionario Santiago Bernabéu. En 2023 completó su transformación a un recinto futurista con cubierta y césped retráctil.",
        timeline: [
            { year: "1947", event: "Inauguración bajo el nombre de Estadio Real Madrid Club de Fútbol." },
            { year: "1982", event: "Sede de la final de la Copa del Mundo (Italia 3 - 1 Alemania)." },
            { year: "2018", event: "Sede histórica de la final de Copa Libertadores (River vs. Boca)." },
            { year: "2023", event: "Culminación de la remodelación futurista con césped retráctil bajo tierra." }
        ],
        matches: [
            "Final Copa del Mundo 1982: Italia vs. Alemania Federal",
            "Final Champions League 2010: Inter de Milán vs. Bayern Múnich",
            "Final Copa Libertadores 2018: River Plate vs. Boca Juniors"
        ],
        curiosities: [
            "Cuenta con un invernadero subterráneo de 30 metros de profundidad para conservar el césped.",
            "Es el único estadio en el mundo que ha acogido las finales del Mundial, Eurocopa, Champions League y Copa Libertadores.",
            "Su fachada exterior cuenta con una pantalla LED gigante envolvente."
        ]
    },
    wembley: {
        fullName: "Wembley Stadium",
        cityCountry: "📍 Londres, Inglaterra",
        year: "1923 (Reapertura 2007)",
        capacity: "90,000 espectadores",
        teams: "Selección de Inglaterra",
        whyLegendary: "Conocido internacionalmente como 'La Catedral del Fútbol'. Escenario sagrado para las finales de la FA Cup y la Champions League.",
        history: "El estadio original de las dos torres fue demolido en 2003. El nuevo Wembley se erigió sobre la misma ubicación, coronado por su imponente arco visible a kilómetros.",
        timeline: [
            { year: "1923", event: "Inauguración del antiguo Wembley en la famosa 'Final del Caballo Blanco'." },
            { year: "1966", event: "Inglaterra se corona campeona del mundo por única vez en su historia." },
            { year: "2007", event: "Inauguración del nuevo Wembley con su arco de 133m." },
            { year: "2024", event: "Sede de la final de la UEFA Champions League (Real Madrid vs. Dortmund)." }
        ],
        matches: [
            "Final Mundial 1966: Inglaterra vs. Alemania Federal",
            "Final Champions League 2011: FC Barcelona vs. Manchester United",
            "Final Eurocopa 2020: Italia vs. Inglaterra"
        ],
        curiosities: [
            "Tiene 2,618 baños, más que cualquier otro recinto deportivo en el planeta.",
            "El icónico arco mide 133 metros de altura y sostiene todo el peso del techo sin columnas.",
            "Pele dijo una vez: 'Wembley es la catedral, la capital y el corazón del fútbol'."
        ]
    },
    campnou: {
        fullName: "Spotify Camp Nou",
        cityCountry: "📍 Barcelona, España",
        year: 1957,
        capacity: "99,354 espectadores",
        teams: "FC Barcelona",
        whyLegendary: "El estadio de mayor capacidad de Europa. Templo del juego de posesión y cuna del mejor FC Barcelona de la historia.",
        history: "Construido para sustituir al antiguo feudo de Les Corts. Ha presenciado el esplendor de estrellas como Johan Cruyff, Diego Maradona, Ronaldinho y Lionel Messi.",
        timeline: [
            { year: "1957", event: "Inauguración oficial con triunfo ante el Legia de Varsovia." },
            { year: "1982", event: "Ampliación para el Mundial de España alcanzando 120,000 de capacidad." },
            { year: "1999", event: "Épica final de Champions: Manchester United vence en el descuento al Bayern." },
            { year: "2023", event: "Inicio de la remodelación masiva del proyecto 'Espai Barça'." }
        ],
        matches: [
            "Final Champions League 1999: Manchester United vs. Bayern Múnich",
            "Semifinal Mundial 1982: Italia vs. Polonia",
            "El Clásico 2010: FC Barcelona 5 - 0 Real Madrid"
        ],
        curiosities: [
            "Llegó a albergar a 121,749 espectadores durante el Mundial de 1982.",
            "Su lema 'Més que un club' está grabado en las gradas de la tribuna lateral.",
            "Posee una capilla cerca del túnel de vestuarios dedicada a la Virgen de Montserrat."
        ]
    },
    sansiro: {
        fullName: "Stadio Giuseppe Meazza / San Siro",
        cityCountry: "📍 Milán, Italia",
        year: 1926,
        capacity: "75,817 espectadores",
        teams: "AC Milan e Inter de Milán",
        whyLegendary: "La catedral del Calcio italiano. Famoso por sus 11 torres cilíndricas y por albergar el legendario 'Derby della Madonnina'.",
        history: "Inicialmente propiedad exclusiva del AC Milan, pasó a ser municipal e incluyó al Inter. El nombre oficial rinde homenaje a Giuseppe Meazza, bicampeón mundial que jugó en ambos clubes.",
        timeline: [
            { year: "1926", event: "Inauguración con el derbi AC Milan vs. Inter de Milán." },
            { year: "1955", event: "Construcción del segundo anfiteatro y las torres helicoidales." },
            { year: "1990", event: "Remodelación para el Mundial Italia '90 añadiendo el tercer piso." },
            { year: "2016", event: "Sede de la final de Champions League entre Real Madrid y Atlético." }
        ],
        matches: [
            "Partido inaugural Mundial 1990: Argentina vs. Camerún",
            "Final Champions League 2001: Bayern Múnich vs. Valencia CF",
            "Final Champions League 2016: Real Madrid vs. Atlético de Madrid"
        ],
        curiosities: [
            "Se llama 'San Siro' cuando juega el Milan y 'Giuseppe Meazza' cuando juega el Inter.",
            "Sus 11 torres exteriores soportan el tejado rojo sin apoyarse dentro del graderío.",
            "Se prevé su demolición parcial para la construcción de la nueva catedral deportiva de Milán."
        ]
    },
    allianz: {
        fullName: "Allianz Arena",
        cityCountry: "📍 Múnich, Alemania",
        year: 2005,
        capacity: "75,024 espectadores",
        teams: "FC Bayern Múnich, Selección de Alemania",
        whyLegendary: "Icono de la arquitectura moderna del fútbol. Famoso por su fachada exterior inflable que cambia de color según el equipo que juegue.",
        history: "Construido para el Mundial de Alemania 2006. Diseñado por los arquitectos Herzog & de Meuron con 2,874 paneles de plástico hinchado (ETFE).",
        timeline: [
            { year: "2005", event: "Inauguración oficial con partidos de Bayern Múnich y TSV 1860." },
            { year: "2006", event: "Sede del partido inaugural del Mundial Alemania vs. Costa Rica." },
            { year: "2012", event: "Sede de la 'Finale d'Hoam' de la Champions League (Chelsea vs. Bayern)." },
            { year: "2024", event: "Sede principal de partidos de la UEFA Euro 2024." }
        ],
        matches: [
            "Inaugural Mundial 2006: Alemania 4 - 2 Costa Rica",
            "Final Champions League 2012: Bayern Múnich vs. Chelsea FC",
            "Eurocopa 2024: Varios encuentros de fase final y semifinales"
        ],
        curiosities: [
            "Su fachada exterior es la membrana iluminada más grande del planeta.",
            "Los paneles de ETFE se autolimpian con la lluvia gracias a un recubrimiento especial.",
            "Puede iluminarse en rojo (Bayern), azul (1860 Múnich) o blanco (Selección Alemana)."
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Lógica del Buscador en tiempo real
    const searchInput = document.getElementById('stadium-search');
    const stadiumCards = document.querySelectorAll('.stadium-card-item');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();
            stadiumCards.forEach(card => {
                const text = card.textContent.toLowerCase();
                card.style.display = text.includes(searchTerm) ? '' : 'none';
            });
        });
    }

    // 2. Lógica del Modal Interactivo
    const modalElement = document.getElementById('stadiumDetailModal');
    if (!modalElement) return;

    const modalBs = new bootstrap.Modal(modalElement);

    // Asignar evento click a las tarjetas
    document.querySelectorAll('.stadium-card').forEach(card => {
        card.style.cursor = 'pointer'; // Cursor interactivo

        card.addEventListener('click', () => {
            const stadiumKey = card.getAttribute('data-stadium');
            const data = stadiumData[stadiumKey];

            if (!data) return;

            // Inyectar datos en el modal
            document.getElementById('modalTitle').textContent = data.fullName;
            document.getElementById('modalLocation').textContent = data.cityCountry;
            document.getElementById('modalYear').textContent = data.year;
            document.getElementById('modalCapacity').textContent = data.capacity;
            document.getElementById('modalTeams').textContent = data.teams;
            document.getElementById('modalWhyLegendary').textContent = data.whyLegendary;
            document.getElementById('modalHistory').textContent = data.history;

            // Inyectar imagen de la tarjeta seleccionada
            const cardImgSrc = card.querySelector('.stadium-img').getAttribute('src');
            document.getElementById('modalImage').setAttribute('src', cardImgSrc);

            // Inyectar Línea de Tiempo
            const timelineContainer = document.getElementById('modalTimeline');
            timelineContainer.innerHTML = data.timeline.map(item => `
                <div class="timeline-item mb-3 ps-3 position-relative">
                    <span class="badge badge-cyan mb-1">${item.year}</span>
                    <p class="small mb-0 text-light">${item.event}</p>
                </div>
            `).join('');

            // Inyectar Partidos Importantes
            const matchesContainer = document.getElementById('modalMatches');
            matchesContainer.innerHTML = data.matches.map(match => `
                <li class="list-group-item bg-transparent text-light border-secondary small py-2">
                    ⚽ ${match}
                </li>
            `).join('');

            // Inyectar Datos Curiosos
            const curiositiesContainer = document.getElementById('modalCuriosities');
            curiositiesContainer.innerHTML = data.curiosities.map(fact => `
                <li class="mb-2 text-primary small">
                    ✨ ${fact}
                </li>
            `).join('');

            // Abrir Modal
            modalBs.show();
        });
    });
});