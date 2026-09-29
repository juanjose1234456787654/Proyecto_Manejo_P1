document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtención de elementos del DOM
    const canvas = document.getElementById('pizarraCanvas');
    const ctx = canvas.getContext('2d');

    const btnPencil = document.getElementById('btnPencil');
    const btnEraser = document.getElementById('btnEraser');
    const btnClear = document.getElementById('btnClear');
    const colorPicker = document.getElementById('colorPicker');

    const lineWidthInput = document.getElementById('lineWidth');
    const btn442 = document.getElementById('btn442');
    const btn433 = document.getElementById('btn433');
    const btnDownload = document.getElementById('btnDownload');

    // Botones de Selector de Cancha
    const btnThemeGrass = document.getElementById('btnThemeGrass');
    const btnThemeNeon = document.getElementById('btnThemeNeon');
    const btnThemeWood = document.getElementById('btnThemeWood');

    // 2. Variables de estado
    let isDrawing = false;
    let mode = 'pencil';
    let color = colorPicker ? colorPicker.value : '#00ffcc';
    let currentLineWidth = lineWidthInput ? lineWidthInput.value : 3;

    // Configuración de temas visuales de cancha
    const themes = {
        grass: { bg: '#2e7d32', line: 'rgba(255, 255, 255, 0.75)' },
        neon: { bg: '#081a0e', line: '#00ff88' },
        wood: { bg: '#8c4a19', line: 'rgba(255, 255, 255, 0.85)' }
    };
    let currentTheme = 'grass';

    // 3. Dibujar cancha de fútbol base según el tema activo
    function drawField() {
        const theme = themes[currentTheme] || themes.grass;

        // Fondo del terreno
        ctx.fillStyle = theme.bg;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Estilo de marcaciones
        ctx.strokeStyle = theme.line;
        ctx.lineWidth = 3;

        // Línea exterior
        ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

        // Línea media
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, 20);
        ctx.lineTo(canvas.width / 2, canvas.height - 20);
        ctx.stroke();

        // Círculo central
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, 60, 0, Math.PI * 2);
        ctx.stroke();

        // Área grande izquierda
        ctx.strokeRect(20, canvas.height / 2 - 100, 120, 200);

        // Área grande derecha
        ctx.strokeRect(canvas.width - 140, canvas.height / 2 - 100, 120, 200);
    }

    // Inicializar cancha
    drawField();

    // Lógica para alternar temas de cancha
    function setActiveTheme(selectedBtn, themeKey) {
        [btnThemeGrass, btnThemeNeon, btnThemeWood].forEach(btn => {
            if (btn) btn.classList.remove('active');
        });
        if (selectedBtn) selectedBtn.classList.add('active');
        currentTheme = themeKey;
        drawField();
    }

    if (btnThemeGrass) btnThemeGrass.addEventListener('click', () => setActiveTheme(btnThemeGrass, 'grass'));
    if (btnThemeNeon) btnThemeNeon.addEventListener('click', () => setActiveTheme(btnThemeNeon, 'neon'));
    if (btnThemeWood) btnThemeWood.addEventListener('click', () => setActiveTheme(btnThemeWood, 'wood'));

    // 4. Lógica de dibujo interactivo
    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        ctx.beginPath();
        const rect = canvas.getBoundingClientRect();
        ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    });

    canvas.addEventListener('mousemove', (e) => {
        if (!isDrawing) return;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ctx.lineWidth = mode === 'eraser' ? 20 : currentLineWidth;
        ctx.lineCap = 'round';

        if (mode === 'pencil') {
            ctx.strokeStyle = color;
            ctx.lineTo(x, y);
            ctx.stroke();
        } else {
            ctx.clearRect(x - 10, y - 10, 20, 20);
            drawField();
        }
    });

    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseleave', () => isDrawing = false);

    // 5. Eventos de controles de dibujo
    if (colorPicker) {
        colorPicker.addEventListener('input', (e) => {
            color = e.target.value;
            mode = 'pencil';
        });
    }

    if (lineWidthInput) {
        lineWidthInput.addEventListener('input', (e) => {
            currentLineWidth = e.target.value;
        });
    }

    if (btnPencil) btnPencil.addEventListener('click', () => mode = 'pencil');
    if (btnEraser) btnEraser.addEventListener('click', () => mode = 'eraser');
    if (btnClear) btnClear.addEventListener('click', () => drawField());

    // 6. Función para dibujar fichas de jugadores
    function dibujarJugador(x, y, numero, colorJugador = '#ff4757') {
        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, 16, 0, Math.PI * 2);
        ctx.fillStyle = colorJugador;
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(numero, x, y);
        ctx.restore();
    }

    // 7. Eventos de Formaciones Tácticas Automáticas
    if (btn442) {
        btn442.addEventListener('click', () => {
            const w = canvas.width;
            const h = canvas.height;
            dibujarJugador(w * 0.08, h * 0.5, '1', '#eccc68');
            dibujarJugador(w * 0.25, h * 0.18, '4');
            dibujarJugador(w * 0.25, h * 0.39, '2');
            dibujarJugador(w * 0.25, h * 0.61, '6');
            dibujarJugador(w * 0.25, h * 0.82, '3');
            dibujarJugador(w * 0.55, h * 0.18, '8');
            dibujarJugador(w * 0.52, h * 0.39, '5');
            dibujarJugador(w * 0.52, h * 0.61, '10');
            dibujarJugador(w * 0.55, h * 0.82, '11');
            dibujarJugador(w * 0.80, h * 0.38, '7');
            dibujarJugador(w * 0.80, h * 0.62, '9');
        });
    }

    if (btn433) {
        btn433.addEventListener('click', () => {
            const w = canvas.width;
            const h = canvas.height;
            dibujarJugador(w * 0.08, h * 0.5, '1', '#eccc68');
            dibujarJugador(w * 0.25, h * 0.18, '4');
            dibujarJugador(w * 0.25, h * 0.39, '2');
            dibujarJugador(w * 0.25, h * 0.61, '6');
            dibujarJugador(w * 0.25, h * 0.82, '3');
            dibujarJugador(w * 0.50, h * 0.25, '8');
            dibujarJugador(w * 0.48, h * 0.50, '5');
            dibujarJugador(w * 0.50, h * 0.75, '10');
            dibujarJugador(w * 0.80, h * 0.20, '7');
            dibujarJugador(w * 0.83, h * 0.50, '9');
            dibujarJugador(w * 0.80, h * 0.80, '11');
        });
    }

    // 8. Evento para Exportar a Imagen PNG
    if (btnDownload) {
        btnDownload.addEventListener('click', () => {
            const link = document.createElement('a');
            link.download = 'estrategia_tactica_golstats.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    }
});