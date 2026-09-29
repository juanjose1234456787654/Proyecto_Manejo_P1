# Gu¡a de Contribuci¢n - GolStats

­Gracias por tu inter‚s en contribuir a GolStats! Para mantener un flujo de trabajo ordenado y profesional, todos los integrantes del equipo deben seguir estas reglas.

## 1. Flujo de Trabajo (GitFlow)
Este proyecto utiliza el modelo GitFlow. Las ramas principales son:
*   `main`: Contiene solo c¢digo estable y listo para producci¢n.
*   `develop`: Rama de integraci¢n principal donde se unen las funcionalidades.
*   `feature/*`: Nuevas funcionalidades (ej. `feature/login`, `feature/estadisticas`).
*   `release/*`: Preparaci¢n de una nueva versi¢n.
*   `hotfix/*`: Arreglos urgentes en producci¢n.

## 2. Mensajes de Commit
Usamos la convenci¢n de [Conventional Commits](https://www.conventionalcommits.org/). El formato es:
`tipo: descripci¢n corta en imperativo`

**Tipos permitidos:**
*   `feat`: Nueva funcionalidad.
*   `fix`: Correcci¢n de errores.
*   `docs`: Cambios en la documentaci¢n.
*   `style`: Cambios de formato (espacios, punto y coma, etc.).
*   `refactor`: Reestructuraci¢n de c¢digo sin cambiar su comportamiento.
*   `test`: A¤adir o modificar pruebas.
*   `chore`: Tareas de mantenimiento (actualizar dependencias, etc.).

**Ejemplo correcto:** `feat: agregar secci¢n de tabla de posiciones`

## 3. Pull Requests (PRs)
*   Todo cambio debe pasar por un PR hacia `develop`.
*   Se requiere al menos **1 revisi¢n y aprobaci¢n** de otro compa¤ero antes de hacer merge.
*   No se permite hacer merge a `main` directamente sin un PR de `release`.
*   El t¡tulo del PR debe seguir el mismo formato de los commits.

## 4. Revisi¢n de C¢digo
*   Ser respetuoso y constructivo al dejar comentarios.
*   Verificar que el c¢digo funcione antes de aprobar.
*   Sugerir mejoras, no solo se¤alar errores.
*   Si se solicitan cambios, el autor debe corregirlos y volver a solicitar revisi¢n.

## 5. Estilo de C¢digo
*   HTML: Usar etiquetas sem nticas y mantener la indentaci¢n.
*   CSS: Usar clases descriptivas y evitar estilos en l¡nea.
*   JavaScript: Usar `const` y `let`, evitar `var`. Comentar funciones complejas.

---
­Gracias por ayudar a que GolStats crezca! ???
