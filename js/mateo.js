document.addEventListener('DOMContentLoaded', () => {
    console.log("Zona de Hinchas interactiva cargada con exito.");

    // Helper para escapar HTML y prevenir inyecciones
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Boton de aliento
    const btnAlentar = document.getElementById('btnAlentar');
    if (btnAlentar) {
        btnAlentar.addEventListener('click', () => {
            alert('¡La hinchada ruge! Energia enviada al equipo con exito.');
        });
    }

    // Muro de comentarios dinamico
    const btnAddComentario = document.getElementById('btnAddComentario');
    const inputHinchada = document.getElementById('inputHinchada');
    const listaComentarios = document.getElementById('listaComentarios');

    if (btnAddComentario && inputHinchada && listaComentarios) {
        const handleAddComment = () => {
            const texto = inputHinchada.value.trim();
            if (texto !== "") {
                const li = document.createElement('li');
                li.className = 'm-comment-item';
                li.innerHTML = `
                    <span class="m-comment-item__icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                        </svg>
                    </span>
                    <span class="m-comment-item__text">${escapeHtml(texto)}</span>
                    <span class="m-comment-item__time">Justo ahora</span>
                `;
                listaComentarios.prepend(li);
                inputHinchada.value = "";
            } else {
                alert("Por favor escribe un cantico valido.");
            }
        };

        btnAddComentario.addEventListener('click', handleAddComment);

        inputHinchada.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleAddComment();
            }
        });
    }

    // Sistema de votacion interactiva MVP
    const voteButtons = document.querySelectorAll('.vote-btn');
    voteButtons.forEach(button => {
        button.addEventListener('click', () => {
            const countSpan = button.querySelector('.count');
            if (!countSpan) return;

            let currentVotes = parseInt(countSpan.textContent, 10) || 0;
            currentVotes++;
            countSpan.textContent = `${currentVotes} votos`;
            
            // Efecto visual de voto registrado
            button.classList.add('voted-success');
            setTimeout(() => {
                button.classList.remove('voted-success');
            }, 600);

            const playerName = button.getAttribute('data-player') || 'el jugador';
            alert(`¡Tu voto para ${playerName} ha sido registrado con exito!`);
        });
    });
});