/* ============================================================
   TOASA.JS — Lógica del Museo de Leyendas
   Desarrollado por: Toasa
============================================================= */
(function () {
  'use strict';

  // ============================================================
  // BASE DE DATOS DE LEYENDAS
  // Cada objeto contiene toda la info del jugador
  // ============================================================
  const leyendas = [
    {
      id: 'pele',
      nombre: 'Pelé',
      apodo: 'O Rei',
      pais: 'Brasil',
      bandera: '🇧🇷',
      icono: '👑',
      epoca: '80s',
      posicion: 'Delantero',
      goles: 1283,
      asistencias: 369,
      titulos: 37,
      numero: 10,
      bio: 'Edson Arantes do Nascimento, "O Rei", es el único futbolista en la historia en ganar 3 Copas del Mundo (1958, 1962 y 1970). Debutó con Brasil a los 16 años y anotó más de 1.000 goles oficiales en toda su carrera. Su número 10 se convirtió en leyenda y la FIFA lo nombró "Atleta del Siglo" en el año 2000.'
    },

    {
      id: 'maradona',
      nombre: 'Diego Maradona',
      apodo: 'El Pibe de Oro',
      pais: 'Argentina',
      bandera: '🇦🇷',
      icono: '⚡',
      epoca: '80s',
      posicion: 'Mediocampista',
      goles: 345,
      asistencias: 240,
      titulos: 12,
      numero: 10,
      bio: 'Diego Armando Maradona, el "Pibe de Oro", llevó a Argentina a la gloria en México 1986 con la actuación individual más recordada de la historia: la "Mano de Dios" y el "Gol del Siglo" ante Inglaterra en el mismo partido. En Napoli, convirtió a un equipo del sur de Italia en campeón por primera vez. Su zurda sigue siendo considerada la mejor de todos los tiempos.'
    },

    {
      id: 'messi',
      nombre: 'Lionel Messi',
      apodo: 'La Pulga',
      pais: 'Argentina',
      bandera: '🇦🇷',
      icono: '🐐',
      epoca: 'actual',
      posicion: 'Delantero',
      goles: 821,
      asistencias: 380,
      titulos: 44,
      numero: 10,
      bio: 'Lionel Andrés Messi, "La Pulga", es el único jugador en la historia en ganar 8 Balones de Oro y 6 Botas de Oro. Coronó su carrera levantando la Copa del Mundo en Qatar 2022, siendo elegido mejor jugador del torneo. Máximo goleador histórico del Barcelona y de la Selección Argentina, además de máximo asistidor en la historia del fútbol profesional.'
    },

    {
      id: 'cristiano',
      nombre: 'Cristiano Ronaldo',
      apodo: 'CR7',
      pais: 'Portugal',
      bandera: '🇵🇹',
      icono: '🚀',
      epoca: 'actual',
      posicion: 'Delantero',
      goles: 873,
      asistencias: 260,
      titulos: 35,
      numero: 7,
      bio: 'Cristiano Ronaldo dos Santos Aveiro, "CR7", es el máximo goleador histórico del fútbol profesional con más de 900 goles oficiales. Ganó 5 Champions League (récord compartido) y es el único jugador en anotar en 5 Mundiales distintos. Su disciplina, físico y mentalidad lo convirtieron en un ícono mundial más allá del deporte.'
    },

    {
      id: 'zidane',
      nombre: 'Zinedine Zidane',
      apodo: 'Zizou',
      pais: 'Francia',
      bandera: '🇫🇷',
      icono: '🎩',
      epoca: '90s',
      posicion: 'Mediocampista',
      goles: 156,
      asistencias: 130,
      titulos: 15,
      numero: 5,
      bio: 'Zinedine Yazid Zidane, "Zizou", marcó dos goles de cabeza en la final del Mundial 1998 para darle a Francia su primera Copa del Mundo. Su "voltea" en la Champions League 2002 con el Real Madrid es considerado uno de los goles más elegantes de la historia. Como entrenador, ganó 3 Champions consecutivas con el Real Madrid, algo nunca antes visto.'
    },

    {
      id: 'ronaldinho',
      nombre: 'Ronaldinho',
      apodo: 'El Mago',
      pais: 'Brasil',
      bandera: '🇧🇷',
      icono: '✨',
      epoca: '2000s',
      posicion: 'Delantero',
      goles: 267,
      asistencias: 180,
      titulos: 18,
      numero: 10,
      bio: 'Ronaldo de Assis Moreira, "Ronaldinho Gaúcho", fue pura magia, sonrisa y alegría. Campeón del Mundial 2002 con Brasil, Balón de Oro 2005 y ovacionado de pie por el Santiago Bernabéu en un Clásico. Su regate, sus caños y sus jugadas imposibles lo convirtieron en el jugador más espectacular de su generación.'
    },
    {
      id: 'ronaldo9',
      nombre: 'Ronaldo Nazário',
      apodo: 'El Fenómeno',
      pais: 'Brasil',
      bandera: '🇧🇷',
      icono: '💥',
      epoca: '90s',
      posicion: 'Delantero',
      goles: 414,
      asistencias: 130,
      titulos: 20,
      numero: 9,
      bio: 'Ronaldo Luís Nazário de Lima, "El Fenómeno", es considerado el mejor delantero centro de la historia. Campeón del Mundo 1994 y 2002, y máximo goleador del Mundial 2002 con 8 goles. Superó graves lesiones de rodilla que parecían terminar su carrera, para volver y ganar el Balón de Oro en 1997 y 2002.'
    },
    {
      id: 'cruyff',
      nombre: 'Johan Cruyff',
      apodo: 'El Flaco',
      pais: 'Países Bajos',
      bandera: '🇳🇱',
      icono: '🧠',
      epoca: '80s',
      posicion: 'Delantero',
      goles: 403,
      asistencias: 220,
      titulos: 22,
      numero: 14,
      bio: 'Hendrik Johannes Cruyff, "El Flaco", revolucionó el fútbol con el "Fútbol Total" de la Naranja Mecánica en el Mundial 1974. Ganó 3 Balones de Oro y como entrenador creó el estilo del Barcelona moderno (La Masia, tiki-taka). Su número 14 es leyenda y su frase "Jugar al fútbol es muy simple, pero jugar al fútbol simple es lo más difícil que hay" resume su filosofía.'
    },

    {
      id: 'beckenbauer',
      nombre: 'Franz Beckenbauer',
      apodo: 'El Káiser',
      pais: 'Alemania',
      bandera: '🇩🇪',
      icono: '🛡️',
      epoca: '80s',
      posicion: 'Defensa',
      goles: 114,
      asistencias: 90,
      titulos: 21,
      numero: 5,
      bio: 'Franz Anton Beckenbauer, "El Káiser", inventó la posición del líbero moderno. Es una de las dos personas en la historia en ganar el Mundial como jugador (1974) y como entrenador (1990). Su elegancia, liderazgo y visión táctica lo convirtieron en el defensor más influyente del siglo XX.'
    },

    {
      id: 'buffon',
      nombre: 'Gianluigi Buffon',
      apodo: 'Gigi',
      pais: 'Italia',
      bandera: '🇮🇹',
      icono: '🧤',
      epoca: '2000s',
      posicion: 'Arquero',
      goles: 0,
      asistencias: 5,
      titulos: 29,
      numero: 1,
      bio: 'Gianluigi Buffon, "Gigi", es considerado uno de los mejores arqueros de todos los tiempos. Campeón del Mundo 2006 con Italia, donde recibió solo 2 goles en todo el torneo (uno de ellos de penal). Jugó hasta los 45 años y acumuló más de 1.100 partidos oficiales. En 2006 ganó el Trofeo Yashin al mejor arquero del mundo.'
    }
  ];

  // ============================================================
  // REFERENCIAS AL DOM
  // ============================================================
  const container = document.getElementById('leyendas-container');

  // ============================================================
  // FUNCIÓN: Renderizar las tarjetas
  // ============================================================
  function renderLeyendas(lista) {
    if (!container) return;

    if (lista.length === 0) {
      container.innerHTML = `
        <div class="text-center w-100 py-5">
          <p class="text-muted fs-5">😕 No se encontraron leyendas con esos filtros.</p>
        </div>`;
      return;
    }

    let html = '';
    lista.forEach((l, index) => {
      html += `
        <div class="col-12 col-md-6 col-lg-4">
          <article class="legend-card" style="animation-delay:${index * 0.06}s" data-id="${l.id}">
            <div class="legend-card-glow"></div>
            <span class="legend-number">${l.numero}</span>
            <div class="legend-icon-wrap">
              <span class="legend-icon">${l.icono}</span>
            </div>
            <h3 class="legend-name">${l.nombre}</h3>
            <span class="legend-nickname">${l.apodo}</span>
            <div class="legend-country">
              <span class="bandera">${l.bandera}</span>
              <span>${l.pais}</span>
            </div>
            <div class="legend-stats">
              <div class="stat-box">
                <span class="number">${l.goles}</span>
                <span class="label">Goles</span>
              </div>
              <div class="stat-box">
                <span class="number">${l.asistencias}</span>
                <span class="label">Asist.</span>
              </div>
              <div class="stat-box">
                <span class="number">${l.titulos}</span>
                <span class="label">Títulos</span>
              </div>
            </div>
            <button class="btn-bio" data-id="${l.id}">
              Ver biografía
              <span class="arrow">→</span>
            </button>
          </article>
        </div>
      `;
    });

    container.innerHTML = html;
  }
  
  // ============================================================
  // ESTADO DE FILTROS
  // ============================================================
  const estado = {
    busqueda: '',
    epoca: 'todas',
    posicion: 'todas'
  };

  // ============================================================
  // FUNCIÓN: Aplicar todos los filtros
  // ============================================================
  function aplicarFiltros() {
    let resultado = [...leyendas];

    // Filtrar por búsqueda (nombre o apodo)
    if (estado.busqueda.trim() !== '') {
      const q = estado.busqueda.toLowerCase().trim();
      resultado = resultado.filter(l =>
        l.nombre.toLowerCase().includes(q) ||
        l.apodo.toLowerCase().includes(q) ||
        l.pais.toLowerCase().includes(q)
      );
    }

    // Filtrar por época
    if (estado.epoca !== 'todas') {
      resultado = resultado.filter(l => l.epoca === estado.epoca);
    }

    // Filtrar por posición
    if (estado.posicion !== 'todas') {
      resultado = resultado.filter(l => l.posicion === estado.posicion);
    }

    renderLeyendas(resultado);
  }

  // ============================================================
  // BUSCADOR EN VIVO
  // ============================================================
  const buscador = document.getElementById('buscador');
  if (buscador) {
    buscador.addEventListener('input', (e) => {
      estado.busqueda = e.target.value;
      aplicarFiltros();
    });
  }
  
  // ============================================================
  // FILTROS POR BOTONES (Época y Posición)
  // ============================================================
  const gruposFiltros = document.querySelectorAll('.filtros-grupo');

  gruposFiltros.forEach(grupo => {
    const tipo = grupo.dataset.filtro; // 'epoca' o 'posicion'
    const botones = grupo.querySelectorAll('.filtro-btn');

    botones.forEach(btn => {
      btn.addEventListener('click', () => {
        // Quitar "active" de todos los botones del grupo
        botones.forEach(b => b.classList.remove('active'));
        // Activar el botón clickeado
        btn.classList.add('active');

        // Actualizar el estado según el tipo
        estado[tipo] = btn.dataset.valor;

        // Re-aplicar filtros
        aplicarFiltros();
      });
    });
  });

  // ============================================================
  // MODAL DE BIOGRAFÍA
  // ============================================================
  const modalBioEl = document.getElementById('modalBio');
  let modalBio;

  if (modalBioEl && typeof bootstrap !== 'undefined') {
    modalBio = new bootstrap.Modal(modalBioEl);
  }

  function abrirBiografia(id) {
    const l = leyendas.find(x => x.id === id);
    if (!l) return;

    // Rellenar el modal con los datos
    document.getElementById('modalBioIcon').textContent = l.icono;
    document.getElementById('modalBioLabel').textContent = l.nombre;
    document.getElementById('modalBioNickname').textContent = l.apodo;
    document.getElementById('modalBioCountry').textContent = `${l.bandera} ${l.pais}`;
    document.getElementById('modalBioPosition').textContent = l.posicion;
    document.getElementById('modalBioNumber').textContent = `Dorsal #${l.numero}`;
    document.getElementById('modalBioText').textContent = l.bio;
    document.getElementById('modalBioGoles').textContent = l.goles.toLocaleString('es-ES');
    document.getElementById('modalBioAsist').textContent = l.asistencias.toLocaleString('es-ES');
    document.getElementById('modalBioTitulos').textContent = l.titulos;

    if (modalBio) modalBio.show();
  }

  // Delegación de eventos: escucha clicks en botones "Ver biografía"
  if (container) {
    container.addEventListener('click', (e) => {
      const btn = e.target.closest('.btn-bio');
      if (btn) {
        abrirBiografia(btn.dataset.id);
      }
    });
  }

  // ============================================================
  // SISTEMA DE PARTÍCULAS DEL HERO
  // ============================================================
  const canvas = document.getElementById('particles-hero');
  const heroSection = document.getElementById('hero');

  if (canvas && heroSection) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animId;
    const PARTICLE_COUNT = 45;

    function resizeCanvas() {
      canvas.width = heroSection.offsetWidth;
      canvas.height = heroSection.offsetHeight;
    }

    function createParticle() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.8 + 0.5,
        speedX: (Math.random() - 0.5) * 0.35,
        speedY: (Math.random() - 0.5) * 0.35,
        opacity: Math.random() * 0.6 + 0.15,
        // Dorado o cian
        hue: Math.random() > 0.5 ? 45 : 188
      };
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(createParticle());
      }
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 90%, 65%, ${p.opacity})`;
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        // Reaparecer en el lado opuesto
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });

      // Líneas de conexión
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 214, 10, ${0.05 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(drawParticles);
    }

    // Solo animar cuando el hero esté visible
    const heroObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!animId) drawParticles();
        } else {
          cancelAnimationFrame(animId);
          animId = null;
        }
      });
    }, { threshold: 0 });

    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });

    resizeCanvas();
    initParticles();
    heroObs.observe(heroSection);
  }

  // ============================================================
  // INICIALIZACIÓN
  // ============================================================
  renderLeyendas(leyendas);

})();
