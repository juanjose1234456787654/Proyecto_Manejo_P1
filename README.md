# GolStats — Plataforma Integral de Fútbol

Plataforma web modular de alto rendimiento dedicada al análisis estadístico, historia, táctica, periodismo y comunidad del fútbol mundial.

Proyecto desarrollado para la asignatura de **Manejo y Configuración de Software** — Universidad Técnica de Ambato (UTA).

---

## 📋 Tabla de Contenidos
- [Descripción General](#-descripción-general)
- [Módulos del Sistema](#-módulos-del-sistema)
- [Sistema de Diseño e Identidad Visual](#-sistema-de-diseño-e-identidad-visual)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Flujo de Trabajo Git (GitFlow)](#-flujo-de-trabajo-git-gitflow)
- [Instalación y Uso Local](#-instalación-y-uso-local)
- [Equipo de Desarrollo](#-equipo-de-desarrollo)
- [Licencia](#-licencia)

---

## 🌟 Descripción General

**GolStats** es un ecosistema web interactivo diseñado para fanáticos, directores técnicos, periodistas deportivos y analistas de fútbol. La plataforma reúne en un solo lugar herramientas avanzadas de simulación en vivo, pizarra táctica digital, museo histórico coleccionable, cobertura de medios y comunidad de hinchas, bajo una arquitectura modular y un estándar visual moderno basado en *frosted glass* y vectorización SVG.

---

## 🚀 Módulos del Sistema

| Módulo | Archivo | Responsable | Funcionalidades Principales |
|---|---|---|---|
| **Hub Principal** | [`index.html`](index.html) | Equipo GolStats | Portal de entrada con canvas de partículas reactivas, métricas globales, tarjetas dinámicas de acceso rápido y navegación *frosted-glass*. |
| **Estadísticas en Vivo** | [`pages/juan.html`](pages/juan.html) | Juan Carvajal | Tablas de clasificación completas de las 5 grandes ligas europeas, goleadores, asistentes y marcador en tiempo real con simulación minuto a minuto. |
| **Museo de Leyendas** | [`pages/toasa.html`](pages/toasa.html) | Fabricio Toasa | Catálogo histórico de futbolistas legendarios, tarjetas coleccionables con estadísticas oficiales, filtros por época y posición, y modales biográficos. |
| **Pizarra Técnica Táctica** | [`pages/anahi.html`](pages/anahi.html) | Anahí Morales | Lienzo canvas de dibujo táctico, selector de superficie (césped, neón, futsal), sellos interactivos (balón, conos, flechas), formaciones automáticas (4-4-2, 4-3-3), almacenamiento en `localStorage` y exportación a PNG. |
| **Sala de Prensa Oficial** | [`pages/celeste.html`](pages/celeste.html) | Celeste Telenchana | Comunicados oficiales, ruedas de prensa y entrevistas, filtrado por categorías, sistema de reacciones dinámicas, lectura completa y gestión de acreditaciones periodísticas. |
| **Zona de Hinchas** | [`pages/mateo.html`](pages/mateo.html) | Mateo Morales | Comunidad oficial con muro de cánticos en vivo, monitoreo del clima de la tribuna, agenda de partidos y sistema de votación interactiva para el MVP del torneo. |
| **Estadios Legendarios** | [`pages/jeremi.html`](pages/jeremi.html) | Jeremy Guamán | Galería inmersiva de los coliseos del fútbol mundial, buscador en tiempo real, fichas técnicas con líneas de tiempo, partidos históricos y récords. |

---

## 🎨 Sistema de Diseño e Identidad Visual

El proyecto implementa un sistema de diseño propio documentado en [`css/global.css`](css/global.css), enfocado en la elegancia, legibilidad y rendimiento:

* **Paleta de Colores**:
  * **Fondos**: Blanco puro (`#ffffff`), gris hielo (`#f0f5fa`) y slate claro (`#e2e8f0`, `#f8fafc`).
  * **Texto y Contraste**: Slate oscuro de alto contraste (`#0f172a`, `#1e293b`, `#334155`).
  * **Acentos Primarios**: Azul cielo (`#0ea5e9`, `#0284c7`).
  * **Acentos Secundarios**: Verde esmeralda (`#10b981`, `#059669`) y ámbar/oro (`#f59e0b`, `#d97706`).
* **Efectos Visuales**: Efecto *Frosted Glass* con `backdrop-filter: blur(28px)` y semitransparencias calibradas en barras de navegación y tarjetas.
* **Iconografía**: 100% vectorial en SVG inline (eliminación total de emojis genéricos para garantizar un aspecto corporativo consistente en todos los sistemas operativos).
* **Tipografía**:
  * *Títulos y Números*: **Oswald** (Google Fonts).
  * *Cuerpo y Datos*: **Montserrat** (Google Fonts).

---

## 🛠️ Tecnologías Utilizadas

* **HTML5 Semántico**: Estructura accesible (`main`, `header`, `nav`, `section`, `article`, `footer`).
* **CSS3 Avanzado**: Variables CSS (Custom Properties), Flexbox, CSS Grid, Glassmorphism y animaciones fluidas.
* **JavaScript ES6+**: Manipulación dinámica del DOM, Canvas 2D API, Intersection Observer y persistencia en `localStorage`.
* **Bootstrap 5.3**: Componentes modales, toasts y grid responsive auxiliar.
* **Git & GitHub**: Control de versiones estricto bajo el modelo GitFlow.

---

## 📂 Estructura del Proyecto

```text
Proyecto_Manejo_P1/
├── index.html                  # Portal principal (Hub de navegación)
├── README.md                   # Documentación técnica general
├── CONTRIBUTING.md             # Guía de contribución y ramas
├── css/
│   ├── global.css              # Variables globales, reset y tokens compartidos
│   ├── index.css               # Estilos del Hub y navbar principal
│   ├── juan.css                # Estilos del módulo de estadísticas en vivo
│   ├── toasa.css               # Estilos del museo de leyendas
│   ├── pizarra_anahi.css       # Estilos de la pizarra táctica interactiva
│   ├── sala_celeste.css        # Estilos de la sala de prensa y acreditaciones
│   ├── mateo.css               # Estilos de la zona de hinchas
│   └── jeremi.css              # Estilos de la galería de estadios legendarios
├── js/
│   ├── navbar.js               # Control de scroll y menú móvil responsive
│   ├── juan.js                 # Lógica de ligas, marcadores y simulación
│   ├── toasa.js                # Renderizado y filtros del museo de leyendas
│   ├── pizarra_anahi.js        # Canvas táctico, sellos y persistencia local
│   ├── sala_celeste.js         # Filtrado de noticias, reacciones y acreditaciones
│   ├── mateo.js                # Muro interactivo y votación MVP
│   └── jeremi.js               # Buscador y modales de estadios
└── pages/
    ├── juan.html               # Página: Estadísticas en Vivo
    ├── toasa.html              # Página: Museo de Leyendas
    ├── anahi.html              # Página: Pizarra Técnica Táctica
    ├── celeste.html            # Página: Sala de Prensa Oficial
    ├── mateo.html              # Página: Zona de Hinchas
    └── jeremi.html             # Página: Estadios Legendarios
```

---

## 🔀 Flujo de Trabajo Git (GitFlow)

El desarrollo del proyecto se rige bajo la metodología **GitFlow**:

* `main`: Rama de producción estable.
* `develop`: Rama de integración para todas las características terminadas.
* `feature/*`: Ramas de desarrollo por módulo o funcionalidad (ej. `feature/cambioDisenio`, `feature/juan-estadisticas-base`).
* `release/*`: Ramas de preparación para entregas de versión.

### Convención de Commits Semánticos
* `feat:` Nueva característica o funcionalidad.
* `fix:` Corrección de errores de código o interfaz.
* `style:` Cambios visuales, maquetación, paleta y diseño sin alterar lógica.
* `docs:` Actualización de documentación (`README.md`, `CONTRIBUTING.md`).
* `refactor:` Reestructuración de código sin cambios funcionales.

---

## 💻 Instalación y Uso Local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/juanjose1234456787654/Proyecto_Manejo_P1.git
   ```

2. **Acceder al directorio:**
   ```bash
   cd Proyecto_Manejo_P1
   ```

3. **Ejecutar el proyecto:**
   * Abrir directamente `index.html` en cualquier navegador web moderno (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).
   * O utilizar una extensión de servidor local como *Live Server* en VS Code / IDE.

---

## 👥 Equipo de Desarrollo

* **Carvajal Jaya Juan Jose** — *Coordinación de Arquitectura, Estadísticas en Vivo & Rediseño UI/UX*
* **Guamán Tuquerres Jeremy Alexander** — *Módulo Estadios Legendarios*
* **Morales Chicaiza Mateo Sebastián** — *Módulo Zona de Hinchas*
* **Morales Sánchez Anahí Alejandra** — *Módulo Pizarra Técnica Táctica*
* **Telenchana Ronquillo Celeste Lisbeth** — *Módulo Sala de Prensa Oficial*
* **Toasa Estrella Andres Fabricio** — *Módulo Museo de Leyendas*

---

## 📄 Licencia

Este proyecto se distribuye bajo la **Licencia MIT**. Consulta los términos en los archivos del repositorio para más información.
