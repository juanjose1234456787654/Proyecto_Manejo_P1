document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('pizarraCanvas');
    const ctx = canvas.getContext('2d');

    const btnPencil = document.getElementById('btnPencil');
    const btnEraser = document.getElementById('btnEraser');
    const btnClear = document.getElementById('btnClear');
    const colorPicker = document.getElementById('colorPicker');

    let isDrawing = false;
    let mode = 'pencil';
    let color = colorPicker.value;

    function drawField() {
        ctx.fillStyle = '#2e7d32';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
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

    drawField();

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

        ctx.lineWidth = mode === 'eraser' ? 20 : 4;
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

    colorPicker.addEventListener('input', (e) => {
        color = e.target.value;
        mode = 'pencil';
    });

    btnPencil.addEventListener('click', () => mode = 'pencil');
    btnEraser.addEventListener('click', () => mode = 'eraser');
    btnClear.addEventListener('click', () => drawField());
});