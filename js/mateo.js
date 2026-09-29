document.addEventListener('DOMContentLoaded', () => {
    console.log("Zona de Hinchas interactiva cargada con éxito.");

    // Botón de aliento
    const btnAlentar = document.getElementById('btnAlentar');
    if (btnAlentar) {
        btnAlentar.addEventListener('click', () => {
            alert('📢 ¡La hinchada ruge! Energía enviada al equipo con éxito.');
        });
    }

    // Muro de comentarios dinámico
    const btnAddComentario = document.getElementById('btnAddComentario');
    const inputHinchada = document.getElementById('inputHinchada');
    const listaComentarios = document.getElementById('listaComentarios');

    if (btnAddComentario && inputHinchada && listaComentarios) {
        btnAddComentario.addEventListener('click', () => {
            const texto = inputHinchada.value.trim();
            if (texto !== "") {
                const li = document.createElement('li');
                li.className = 'list-group-item bg-dark text-light border-secondary';
                li.innerHTML = `🗣️ ${texto} <span class="float-end text-muted small">Justo ahora</span>`;
                listaComentarios.prepend(li);
                inputHinchada.value = "";
            } else {
                alert("Por favor escribe un cántico válido.");
            }
        });
    }

    // Sistema de votación interactiva MVP
    const voteButtons = document.querySelectorAll('.vote-btn');
    voteButtons.forEach(button => {
        button.addEventListener('click', () => {
            const countSpan = button.querySelector('.count');
            let currentVotes = parseInt(countSpan.textContent);
            currentVotes++;
            countSpan.textContent = `${currentVotes} votos`;
            
            // Efecto visual de voto registrado
            button.classList.add('border-success', 'bg-success', 'bg-opacity-25');
            setTimeout(() => {
                button.classList.remove('bg-success', 'bg-opacity-25');
            }, 500);

            alert(`✅ ¡Tu voto para ${button.getAttribute('data-player')} ha sido registrado con éxito!`);
        });
    });
});