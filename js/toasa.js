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
      bio: 'Edson Arantes do Nascimento, considerado por muchos el mejor jugador de todos los tiempos. Único tricampeón mundial (1958, 1962, 1970) con la selección de Brasil.'
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
      bio: 'Diego Armando Maradona, genio absoluto del fútbol. Campeón del mundo en México 1986 con la recordada "Mano de Dios" y el "Gol del Siglo" ante Inglaterra.'
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
      bio: 'Lionel Andrés Messi, campeón del mundo en Qatar 2022. Máximo ganador del Balón de Oro (8) y considerado por muchos el GOAT (Greatest Of All Time).'
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
      bio: 'Cristiano Ronaldo dos Santos Aveiro, máximo goleador histórico del fútbol profesional. 5 Champions League, 5 Balones de Oro y capitán de Portugal.'
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
      bio: 'Zinedine Yazid Zidane, campeón del mundo en 1998 y de la Eurocopa 2000 con Francia. Su elegancia y visión de juego lo hicieron único.'
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
      bio: 'Ronaldo de Assis Moreira, pura magia y sonrisa. Campeón del mundo 2002, Balón de Oro 2005 y el jugador más espectacular de su generación.'
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
      bio: 'Ronaldo Luís Nazário de Lima, el delantero más letal de su era. Campeón del mundo 1994 y 2002, y máximo goleador del Mundial 2002.'
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
      bio: 'Hendrik Johannes Cruyff, revolucionario del fútbol total. 3 Balones de Oro y creador del estilo que marcó al Barcelona moderno.'
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
      bio: 'Franz Anton Beckenbauer, el mejor defensor de la historia. Campeón del mundo como jugador (1974) y como entrenador (1990).'
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
      bio: 'Gianluigi Buffon, leyenda bajo los tres palos. Campeón del mundo 2006 con Italia y considerado uno de los mejores arqueros de la historia.'
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
  // INICIALIZACIÓN
  // ============================================================
  renderLeyendas(leyendas);

})();