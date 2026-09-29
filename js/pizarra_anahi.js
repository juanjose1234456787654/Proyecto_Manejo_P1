document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtencion de elementos del DOM
    const canvas = document.getElementById('pizarraCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const btnPencil = document.getElementById('btnPencil');
    const btnEraser = document.getElementById('btnEraser');
    const btnClear = document.getElementById('btnClear');
    const colorPicker = document.getElementById('colorPicker');

    const lineWidthInput = document.getElementById('lineWidth');
    const btn442 = document.getElementById('btn442');
    const btn433 = document.getElementById('btn433');
    const btnDownload = document.getElementById('btnDownload');

    // Temas de Cancha
    const btnThemeGrass = document.getElementById('btnThemeGrass');
    const btnThemeNeon = document.getElementById('btnThemeNeon');
    const btnThemeWood = document.getElementById('btnThemeWood');

    // Sellos Tacticos
    const btnStampBall = document.getElementById('btnStampBall');
    const btnStampCone = document.getElementById('btnStampCone');
    const btnStampArrow = document.getElementById('btnStampArrow');

    // Elementos LocalStorage
    const tacticNameInput = document.getElementById('tacticNameInput');
    const btnSaveTactic = document.getElementById('btnSaveTactic');
    const savedTacticsSelect = document.getElementById('savedTacticsSelect');
    const btnLoadTactic = document.getElementById('btnLoadTactic');
    const btnDeleteTactic = document.getElementById('btnDeleteTactic');

    // 2. Variables de estado
    let isDrawing = false;
    let mode = 'pencil';
    let currentStamp = null;
    let color = colorPicker ? colorPicker.value : '#0ea5e9';
    let currentLineWidth = lineWidthInput ? lineWidthInput.value : 3;

    // Configuracion de temas visuales
    const themes = {
        grass: { bg: '#15803d', line: 'rgba(255, 255, 255, 0.85)' },
        neon: { bg: '#091e28', line: '#00ffcc' },
        wood: { bg: '#854d0e', line: 'rgba(255, 255, 255, 0.90)' }
    };
    let currentTheme = 'grass';

    // 3. Dibujar cancha base
    function drawField() {
        const theme = themes[currentTheme] || themes.grass;

        ctx.fillStyle = theme.bg;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.strokeStyle = theme.line;
        ctx.lineWidth = 3;

        // Linea exterior
        ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

        // Linea media
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, 20);
        ctx.lineTo(canvas.width / 2, canvas.height - 20);
        ctx.stroke();

        // Circulo central
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, 60, 0, Math.PI * 2);
        ctx.stroke();

        // Punto central
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, 4, 0, Math.PI * 2);
        ctx.fillStyle = theme.line;
        ctx.fill();

        // Areas grandes
        ctx.strokeRect(20, canvas.height / 2 - 100, 120, 200);
        ctx.strokeRect(canvas.width - 140, canvas.height / 2 - 100, 120, 200);

        // Areas chicas
        ctx.strokeRect(20, canvas.height / 2 - 50, 50, 100);
        ctx.strokeRect(canvas.width - 70, canvas.height / 2 - 50, 50, 100);
    }

    // Inicializar cancha
    drawField();

    // Cambiar temas
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

    // 4. Dibujar Sellos Tacticos
    function dibujarPelota(x, y) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#0f172a';
        ctx.stroke();

        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }

    function dibujarCono(x, y) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x, y - 14);
        ctx.lineTo(x - 10, y + 10);
        ctx.lineTo(x + 10, y + 10);
        ctx.closePath();
        ctx.fillStyle = '#f97316';
        ctx.fill();
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();
        ctx.restore();
    }

    function dibujarFlecha(x, y) {
        ctx.save();
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.lineWidth = 4;
        
        ctx.beginPath();
        ctx.moveTo(x - 20, y);
        ctx.lineTo(x + 15, y);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x + 15, y - 8);
        ctx.lineTo(x + 28, y);
        ctx.lineTo(x + 15, y + 8);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

    function setStampMode(selectedBtn, stampType) {
        [btnStampBall, btnStampCone, btnStampArrow].forEach(btn => {
            if (btn) btn.classList.remove('active');
        });
        if (selectedBtn) selectedBtn.classList.add('active');
        mode = 'stamp';
        currentStamp = stampType;
    }

    if (btnStampBall) btnStampBall.addEventListener('click', () => setStampMode(btnStampBall, 'ball'));
    if (btnStampCone) btnStampCone.addEventListener('click', () => setStampMode(btnStampCone, 'cone'));
    if (btnStampArrow) btnStampArrow.addEventListener('click', () => setStampMode(btnStampArrow, 'arrow'));

    // 5. Modulo LocalStorage para Guardar y Cargar Tacticas
    const STORAGE_PREFIX = 'golstats_tactic_';

    function updateTacticsDropdown() {
        if (!savedTacticsSelect) return;
        savedTacticsSelect.innerHTML = '<option value="">-- Cargar jugada --</option>';
        
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith(STORAGE_PREFIX)) {
                const tacticName = key.replace(STORAGE_PREFIX, '');
                const option = document.createElement('option');
                option.value = key;
                option.textContent = tacticName;
                savedTacticsSelect.appendChild(option);
            }
        }
    }

    // Inicializar desplegable de tacticas guardadas
    updateTacticsDropdown();

    if (btnSaveTactic) {
        btnSaveTactic.addEventListener('click', () => {
            const name = tacticNameInput ? tacticNameInput.value.trim() : '';
            if (!name) {
                alert('Por favor, ingresa un nombre para guardar tu jugada tactica.');
                return;
            }

            const dataUrl = canvas.toDataURL('image/png');
            localStorage.setItem(STORAGE_PREFIX + name, dataUrl);
            if (tacticNameInput) tacticNameInput.value = '';
            updateTacticsDropdown();
            alert(`¡Jugada "${name}" guardada con exito!`);
        });
    }

    if (btnLoadTactic) {
        btnLoadTactic.addEventListener('click', () => {
            const selectedKey = savedTacticsSelect ? savedTacticsSelect.value : '';
            if (!selectedKey) {
                alert('Selecciona una jugada del desplegable para cargar.');
                return;
            }

            const dataUrl = localStorage.getItem(selectedKey);
            if (!dataUrl) return;

            const img = new Image();
            img.onload = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0);
            };
            img.src = dataUrl;
        });
    }

    if (btnDeleteTactic) {
        btnDeleteTactic.addEventListener('click', () => {
            const selectedKey = savedTacticsSelect ? savedTacticsSelect.value : '';
            if (!selectedKey) {
                alert('Selecciona una jugada del desplegable para eliminar.');
                return;
            }

            const name = selectedKey.replace(STORAGE_PREFIX, '');
            if (confirm(`¿Estas seguro de eliminar la jugada "${name}"?`)) {
                localStorage.removeItem(selectedKey);
                updateTacticsDropdown();
            }
        });
    }

    // 6. Logica de interaccion Canvas
    canvas.addEventListener('mousedown', (e) => {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        const x = (e.clientX - rect.left) * scaleX;
        const y = (e.clientY - rect.top) * scaleY;

        if (mode === 'stamp') {
            if (currentStamp === 'ball') dibujarPelota(x, y);
            if (currentStamp === 'cone') dibujarCono(x, y);
            if (currentStamp === 'arrow') dibujarFlecha(x, y);
            return;
        }

        isDrawing = true;
        ctx.beginPath();
        ctx.moveTo(x, y);
    });

    canvas.addEventListener('mousemove', (e) => {
        if (!isDrawing || mode === 'stamp') return;
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        const x = (e.clientX - rect.left) * scaleX;
        const y = (e.clientY - rect.top) * scaleY;

        ctx.lineWidth = mode === 'eraser' ? 24 : currentLineWidth;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        if (mode === 'pencil') {
            ctx.strokeStyle = color;
            ctx.lineTo(x, y);
            ctx.stroke();
        } else {
            ctx.clearRect(x - 12, y - 12, 24, 24);
            drawField();
        }
    });

    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseleave', () => isDrawing = false);

    // 7. Controles generales
    if (colorPicker) {
        colorPicker.addEventListener('input', (e) => {
            color = e.target.value;
            if (mode !== 'stamp') mode = 'pencil';
        });
    }

    if (lineWidthInput) {
        lineWidthInput.addEventListener('input', (e) => {
            currentLineWidth = e.target.value;
        });
    }

    function clearStampActive() {
        [btnStampBall, btnStampCone, btnStampArrow].forEach(btn => {
            if (btn) btn.classList.remove('active');
        });
    }

    if (btnPencil) {
        btnPencil.addEventListener('click', () => {
            mode = 'pencil';
            clearStampActive();
            if (btnEraser) btnEraser.classList.remove('active');
            btnPencil.classList.add('active');
        });
    }

    if (btnEraser) {
        btnEraser.addEventListener('click', () => {
            mode = 'eraser';
            clearStampActive();
            if (btnPencil) btnPencil.classList.remove('active');
            btnEraser.classList.add('active');
        });
    }

    if (btnClear) btnClear.addEventListener('click', () => drawField());

    // 8. Jugadores y Formaciones
    function dibujarJugador(x, y, numero, colorJugador = '#0284c7') {
        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, 16, 0, Math.PI * 2);
        ctx.fillStyle = colorJugador;
        ctx.fill();
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 12px Montserrat, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(numero, x, y);
        ctx.restore();
    }

    if (btn442) {
        btn442.addEventListener('click', () => {
            const w = canvas.width;
            const h = canvas.height;
            dibujarJugador(w * 0.08, h * 0.5, '1', '#f59e0b');
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
            dibujarJugador(w * 0.08, h * 0.5, '1', '#f59e0b');
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

    // 9. Exportar PNG
    if (btnDownload) {
        btnDownload.addEventListener('click', () => {
            const link = document.createElement('a');
            link.download = 'estrategia_tactica_golstats.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    }
});