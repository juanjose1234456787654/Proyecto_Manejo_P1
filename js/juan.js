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
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    revealEls.forEach((el) => observer.observe(el));
  }

  /* ==========================================================
     3. RENDER (próximos commits)
     ----------------------------------------------------------
     Aquí se añadirán las funciones que inyectan HTML en:
       #tabla-posiciones  → renderTabla(tablaPosiciones)
       #marcador-vivo     → renderPartidos(partidos)
       #goleadores        → renderGoleadores(goleadores)
  ========================================================== */

})();
