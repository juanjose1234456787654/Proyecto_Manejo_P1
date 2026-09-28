// Lógica interactiva para la página de Estadios Legendarios (Jeremy)

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('stadium-search');
    const stadiumCards = document.querySelectorAll('.stadium-card-item');

    // Filtro de búsqueda en tiempo real
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();

            stadiumCards.forEach(card => {
                const text = card.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});