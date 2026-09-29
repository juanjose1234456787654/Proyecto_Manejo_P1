# GolStats

## Descripción del Proyecto

GolStats es una aplicación web informativa diseñada para mostrar estadísticas de fútbol, equipos y jugadores. Este proyecto se desarrolla como parte de la asignatura de Manejo y Configuración de Software (Universidad Técnica de Ambato), aplicando Git y la metodología GitFlow en un flujo de trabajo colaborativo.

## Estado del proyecto

**v0.1.0** — versión parcial, aún en desarrollo.

| Integrante | Página | Sección | Estado |
|---|---|---|---|
| Carvajal Jaya Juan José | `pages/juan.html` | Estadísticas en Vivo | ✅ Completa |
| Guamán Tuquerres Jeremy Alexander | `pages/jeremi.html` | Estadios Legendarios | ⏳ En progreso |
| Morales Chicaiza Mateo Sebastián | `pages/mateo.html` | Zona de Hinchas | ⏳ En progreso |
| Morales Sánchez Anahí Alejandra | `pages/anahi.html` | Pizarra Táctica | ⏳ En progreso |
| Telenchana Ronquillo Celeste Lisbeth | `pages/celeste.html` | Sala de Prensa | ⏳ En progreso |
| Toasa Estrella Andrés Fabricio | `pages/toasa.html` | Museo de Leyendas | ⏳ En progreso |

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- Bootstrap 5 (vía CDN)
- Git & GitHub (GitFlow)

## Estructura del Proyecto

```
Proyecto_Manejo_P1/
├── index.html              Página principal (Hub) — COMPARTIDO
├── css/
│   ├── global.css          Estilos compartidos — COMPARTIDO, no editar sin avisar
│   ├── index.css           Estilos del Hub
│   ├── juan.css            Estilos de Juan
│   ├── toasa.css           Estilos de Toasa
│   ├── mateo.css           Estilos de Mateo
│   ├── anahi.css           Estilos de Anahí
│   ├── celeste.css         Estilos de Celeste
│   └── jeremi.css          Estilos de Jeremy
├── js/
│   ├── navbar.js           Lógica del navbar — COMPARTIDO, no editar sin avisar
│   ├── juan.js              Script de Juan
│   ├── toasa.js             Script de Toasa
│   ├── mateo.js             Script de Mateo
│   ├── anahi.js              Script de Anahí
│   ├── celeste.js            Script de Celeste
│   └── jeremi.js             Script de Jeremy
├── pages/
│   ├── juan.html             Estadísticas en Vivo
│   ├── toasa.html            Museo de Leyendas
│   ├── mateo.html            Zona de Hinchas
│   ├── anahi.html            Pizarra Táctica
│   ├── celeste.html          Sala de Prensa
│   └── jeremi.html           Estadios Legendarios
├── .gitignore
├── LICENSE
├── README.md                Documentación del proyecto
└── CONTRIBUTING.md          Reglas de colaboración
```

## Flujo de trabajo (GitFlow)

- `main` → código estable, protegida (requiere Pull Request + aprobación).
- `develop` → rama de integración, protegida (requiere Pull Request + aprobación).
- `feature/*` → una rama por tarea, creada desde `develop`.
- `release/*` → prepara una nueva versión antes de fusionarla a `main` y `develop`.
- `hotfix/*` → corrige errores urgentes directo desde `main`.

Ver reglas detalladas en [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## Cómo ejecutar el proyecto

No requiere instalación ni dependencias.

```bash
git clone https://github.com/juanjose1234456787654/Proyecto_Manejo_P1.git
cd Proyecto_Manejo_P1
```

Abre `index.html` directamente en el navegador, o sírvelo con una extensión tipo "Live Server" para mejor experiencia de recarga.

## Autores

- Carvajal Jaya Juan José
- Guamán Tuquerres Jeremy Alexander
- Morales Chicaiza Mateo Sebastián
- Morales Sánchez Anahí Alejandra
- Telenchana Ronquillo Celeste Lisbeth
- Toasa Estrella Andrés Fabricio

## Licencia

Este proyecto está bajo la Licencia MIT — ver el archivo [`LICENSE`](./LICENSE) para más detalles.