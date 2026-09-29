/* ============================================================
   JUAN.JS — Estadísticas en Vivo | GolStats
   Datos y lógica exclusivos de pages/juan.html.
   ⚠️ Solo Juan edita este archivo.
============================================================= */

(function () {
  'use strict';

  /* ==========================================================
     1. DATOS QUEMADOS (mock data)
     ----------------------------------------------------------
     Estos arrays alimentarán la UI en próximos commits.
     Estructura pensada para ser reemplazable por fetch/API.
  ========================================================== */

  /* ---------- 1A. TABLA DE POSICIONES ----------
     Campos: pos, equipo, escudo (inicial emoji), PJ, PG, PE,
     PP, GF, GC, DG, puntos.
  ------------------------------------------------ */
  const tablaPosiciones = [
    { pos: 1, equipo: 'Real Madrid',     escudo: '⚪', pj: 30, pg: 22, pe: 5, pp: 3, gf: 68, gc: 21, dg: 47, puntos: 71 },
    { pos: 2, equipo: 'FC Barcelona',    escudo: '🔵', pj: 30, pg: 21, pe: 4, pp: 5, gf: 65, gc: 28, dg: 37, puntos: 67 },
    { pos: 3, equipo: 'Atlético Madrid', escudo: '🔴', pj: 30, pg: 18, pe: 7, pp: 5, gf: 52, gc: 25, dg: 27, puntos: 61 },
    { pos: 4, equipo: 'Athletic Club',   escudo: '🦁', pj: 30, pg: 15, pe: 8, pp: 7, gf: 48, gc: 32, dg: 16, puntos: 53 },
    { pos: 5, equipo: 'Real Sociedad',   escudo: '🟡', pj: 30, pg: 14, pe: 6, pp: 10, gf: 42, gc: 35, dg:  7, puntos: 48 },
    { pos: 6, equipo: 'Villarreal CF',   escudo: '💛', pj: 30, pg: 13, pe: 7, pp: 10, gf: 46, gc: 38, dg:  8, puntos: 46 },
  ];

  /* ---------- 1B. PARTIDOS (marcador en vivo) ----------
     Campos: id, local, visitante, golLocal, golVisitante,
     minuto (string), estado ('EN VIVO' | 'FINAL').
  ------------------------------------------------------- */
  const partidos = [
    {
      id: 1,
      local:       { nombre: 'Real Madrid',     escudo: '⚪' },
      visitante:   { nombre: 'FC Barcelona',    escudo: '🔵' },
      golLocal:    2,
      golVisitante: 1,
      minuto:      '72\'',
      estado:      'EN VIVO',
    },
    {
      id: 2,
      local:       { nombre: 'Atlético Madrid', escudo: '🔴' },
      visitante:   { nombre: 'Real Sociedad',   escudo: '🟡' },
      golLocal:    0,
      golVisitante: 0,
      minuto:      '34\'',
      estado:      'EN VIVO',
    },
    {
      id: 3,
      local:       { nombre: 'Athletic Club',   escudo: '🦁' },
      visitante:   { nombre: 'Villarreal CF',   escudo: '💛' },
      golLocal:    3,
      golVisitante: 2,
      minuto:      '90\'',
      estado:      'FINAL',
    },
  ];

  /* ---------- 1C. GOLEADORES ----------
     Campos: rank, nombre, equipo, escudo (inicial emoji), goles.
  ---------------------------------------- */
  const goleadores = [
    { rank: 1, nombre: 'Robert Lewandowski', equipo: 'FC Barcelona',    escudo: '🔵', goles: 24 },
    { rank: 2, nombre: 'Kylian Mbappé',     equipo: 'Real Madrid',     escudo: '⚪', goles: 21 },
    { rank: 3, nombre: 'Antoine Griezmann',  equipo: 'Atlético Madrid', escudo: '🔴', goles: 16 },
    { rank: 4, nombre: 'Nico Williams',      equipo: 'Athletic Club',   escudo: '🦁', goles: 14 },
    { rank: 5, nombre: 'Alexander Sørloth',  equipo: 'Villarreal CF',   escudo: '💛', goles: 13 },
  ];

  /* ==========================================================
     2. SCROLL REVEAL
     ----------------------------------------------------------
     Activa las clases .reveal → .visible de global.css.
  ========================================================== */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        let delay = 0;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Escalonado: +120ms por cada elemento que entra al mismo tiempo
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay);
            delay += 120;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    revealEls.forEach((el) => observer.observe(el));
  }

  /* ==========================================================
     3. RENDER
  ========================================================== */

  /* ---------- 3A. TABLA DE POSICIONES ---------- */
  function renderTabla(data) {
    const container = document.querySelector('#tabla-posiciones .juan-card__body');
    if (!container) return;

    const encabezados = ['#', '', 'Equipo', 'PJ', 'PG', 'PE', 'PP', 'GF', 'GC', 'DG', 'Pts'];

    const theadCells = encabezados
      .map((h) => `<th class="juan-tabla__th">${h}</th>`)
      .join('');

    const tbodyRows = data
      .map((eq) => {
        const esLider = eq.pos === 1 ? ' juan-tabla__row--lider' : '';
        const dgDisplay = eq.dg > 0 ? `+${eq.dg}` : eq.dg;

        return `
          <tr class="juan-tabla__row${esLider}">
            <td class="juan-tabla__td juan-tabla__td--pos">${eq.pos}</td>
            <td class="juan-tabla__td juan-tabla__td--escudo">${eq.escudo}</td>
            <td class="juan-tabla__td juan-tabla__td--equipo">${eq.equipo}</td>
            <td class="juan-tabla__td">${eq.pj}</td>
            <td class="juan-tabla__td">${eq.pg}</td>
            <td class="juan-tabla__td">${eq.pe}</td>
            <td class="juan-tabla__td">${eq.pp}</td>
            <td class="juan-tabla__td">${eq.gf}</td>
            <td class="juan-tabla__td">${eq.gc}</td>
            <td class="juan-tabla__td juan-tabla__td--dg">${dgDisplay}</td>
            <td class="juan-tabla__td juan-tabla__td--pts">${eq.puntos}</td>
          </tr>`;
      })
      .join('');

    container.innerHTML = `
      <div class="juan-tabla__wrap">
        <table class="juan-tabla" role="table">
          <thead>
            <tr>${theadCells}</tr>
          </thead>
          <tbody>${tbodyRows}</tbody>
        </table>
      </div>`;
  }

  /* ---------- 3B. MARCADOR EN VIVO ---------- */
  function renderPartidos(data) {
    const container = document.querySelector('#marcador-vivo .juan-card__body');
    if (!container) return;

    const cards = data
      .map((p) => {
        const esVivo = p.estado === 'EN VIVO';
        const badgeClass = esVivo
          ? 'juan-match__badge--live'
          : 'juan-match__badge--final';
        const dotHTML = esVivo
          ? '<span class="juan-match__badge-dot" aria-hidden="true"></span>'
          : '';

        return `
          <article class="juan-match glass" aria-label="${p.local.nombre} vs ${p.visitante.nombre}">
            <!-- Equipo local -->
            <div class="juan-match__team">
              <span class="juan-match__shield">${p.local.escudo}</span>
              <span class="juan-match__name">${p.local.nombre}</span>
            </div>

            <!-- Marcador central -->
            <div class="juan-match__center">
              <span class="juan-match__badge ${badgeClass}">
                ${dotHTML}${p.estado}
              </span>
              <div class="juan-match__score">
                <span data-match-id="${p.id}" data-side="local">${p.golLocal}</span>
                <span class="juan-match__score-sep">–</span>
                <span data-match-id="${p.id}" data-side="visitante">${p.golVisitante}</span>
              </div>
              <span class="juan-match__minute">${p.minuto}</span>
            </div>

            <!-- Equipo visitante -->
            <div class="juan-match__team">
              <span class="juan-match__shield">${p.visitante.escudo}</span>
              <span class="juan-match__name">${p.visitante.nombre}</span>
            </div>
          </article>`;
      })
      .join('');

    container.innerHTML = `<div class="juan-match__list">${cards}</div>`;
  }
  /* ---------- 3C. GOLEADORES ---------- */
  function renderGoleadores(data) {
    const container = document.querySelector('#goleadores .juan-card__body');
    if (!container) return;

    const items = data
      .map((g) => {
        const esTop = g.rank === 1 ? ' juan-scorer--top' : '';
        const maxGoles = data[0].goles;
        const pct = Math.round((g.goles / maxGoles) * 100);

        return `
          <div class="juan-scorer${esTop}">
            <span class="juan-scorer__rank">${g.rank}</span>
            <span class="juan-scorer__shield">${g.escudo}</span>
            <div class="juan-scorer__info">
              <span class="juan-scorer__name">${g.nombre}</span>
              <span class="juan-scorer__team">${g.equipo}</span>
              <div class="juan-scorer__bar" aria-hidden="true">
                <div class="juan-scorer__bar-fill" style="width:${pct}%"></div>
              </div>
            </div>
            <span class="juan-scorer__goals">${g.goles}</span>
          </div>`;
      })
      .join('');

    container.innerHTML = `<div class="juan-scorer__list">${items}</div>`;
  }

  /* ==========================================================
     4. INIT — llamar renders al cargar
  ========================================================== */
  renderTabla(tablaPosiciones);
  renderPartidos(partidos);
  renderGoleadores(goleadores);

  /* Ocultar el indicador "Desliza" tras el primer scroll */
  const tablaWrap = document.querySelector('.juan-tabla__wrap');
  if (tablaWrap) {
    tablaWrap.addEventListener('scroll', function () {
      this.classList.add('--scrolled');
    }, { once: true });
  }

  /* ==========================================================
     5. SIMULACIÓN EN TIEMPO REAL
     ----------------------------------------------------------
     Cada 8 s, un partido EN VIVO recibe +1 gol aleatorio.
     Se pausa con Page Visibility API y se desactiva
     completamente con prefers-reduced-motion.
  ========================================================== */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let simInterval = null;

  function simularGol() {
    // Filtrar solo los partidos en vivo
    const enVivo = partidos.filter((p) => p.estado === 'EN VIVO');
    if (!enVivo.length) return;

    // Elegir partido y lado al azar
    const partido = enVivo[Math.floor(Math.random() * enVivo.length)];
    const lado = Math.random() < 0.5 ? 'local' : 'visitante';

    // Actualizar datos
    if (lado === 'local') {
      partido.golLocal += 1;
    } else {
      partido.golVisitante += 1;
    }

    // Buscar el <span> correcto en el DOM
    const selector = `[data-match-id="${partido.id}"][data-side="${lado}"]`;
    const span = document.querySelector(selector);
    if (!span) return;

    // Actualizar texto
    const nuevoVal = lado === 'local' ? partido.golLocal : partido.golVisitante;
    span.textContent = nuevoVal;

    // Animación de destello (solo si motion OK)
    if (!prefersReducedMotion.matches) {
      span.classList.add('juan-match__score--flash');
      span.addEventListener('animationend', function handler() {
        span.classList.remove('juan-match__score--flash');
        span.removeEventListener('animationend', handler);
      });
    }
  }

  function iniciarSimulacion() {
    if (simInterval) return;
    simInterval = setInterval(simularGol, 8000);
  }

  function pausarSimulacion() {
    clearInterval(simInterval);
    simInterval = null;
  }

  // Solo iniciar si el usuario no prefiere reduced motion
  if (!prefersReducedMotion.matches) {
    iniciarSimulacion();

    // Page Visibility API — pausar cuando la pestaña está oculta
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        pausarSimulacion();
      } else {
        iniciarSimulacion();
      }
    });

    // Escuchar cambios dinámicos de prefers-reduced-motion
    prefersReducedMotion.addEventListener('change', function (e) {
      if (e.matches) {
        pausarSimulacion();
      } else {
        iniciarSimulacion();
      }
    });
  }

})();
