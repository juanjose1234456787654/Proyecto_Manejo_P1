// Lógica interactiva para la Zona de Hinchas de Mateo

document.addEventListener('DOMContentLoaded', () => {
    console.log("Módulo de Zona de Hinchas (Mateo) cargado correctamente.");

    const btnAlentar = document.getElementById('btnAlentar');
    if (btnAlentar) {
        btnAlentar.addEventListener('click', () => {
            alert('¡Dale alegría a mi corazón! 🎶 ¡Gracias por enviar tu aliento al equipo!');
        });
    }

    // Sistema interactivo para agregar comentarios de hinchas
    const btnAddComentario = document.getElementById('btnAddComentario');
    const inputHinchada = document.getElementById('inputHinchada');
    const listaComentarios = document.getElementById('listaComentarios');

    if (btnAddComentario && inputHinchada && listaComentarios) {
        btnAddComentario.addEventListener('click', () => {
            const texto = inputHinchada.value.trim();
            if (texto !== "") {
                const li = document.createElement('li');
                li.className = 'list-group-item';
                li.textContent = "🗣️ " + texto;
                listaComentarios.appendChild(li);
                inputHinchada.value = "";
            } else {
                alert("Por favor escribe un mensaje antes de publicar.");
            }
        });
    }
});