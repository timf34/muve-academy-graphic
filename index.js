// ============================================
// CONFIG - Edit your graphics here
// ============================================

const CONFIG = {
    lineThickness: 0.1,      // % of image width
    circleThickness: 0.1,    // % of image width
    
    lines: [
        { x1: 20, y1: 0, x2: 30, y2: 100 },   // diagonal from top-left area
        { x1: 50, y1: 0, x2: 55, y2: 100 },   // center diagonal
        { x1: 75, y1: 0, x2: 80, y2: 100 },   // right diagonal
    ],
    
    circles: [
        { x: 35, y: 40, radius: 5 },
        { x: 65, y: 60, radius: 8 },
    ]
};

// ============================================
// DRAWING CODE - No need to edit below
// ============================================

const img = document.getElementById('baseImage');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function draw() {
    // Set canvas size to match image
    canvas.width = img.offsetWidth;
    canvas.height = img.offsetHeight;

    const w = canvas.width;
    const h = canvas.height;

    ctx.strokeStyle = 'white';
    ctx.lineCap = 'round';

    // Draw lines
    ctx.lineWidth = (CONFIG.lineThickness / 100) * w;
    CONFIG.lines.forEach(line => {
        ctx.beginPath();
        ctx.moveTo((line.x1 / 100) * w, (line.y1 / 100) * h);
        ctx.lineTo((line.x2 / 100) * w, (line.y2 / 100) * h);
        ctx.stroke();
    });

    // Draw circles
    ctx.lineWidth = (CONFIG.circleThickness / 100) * w;
    CONFIG.circles.forEach(circle => {
        ctx.beginPath();
        const x = (circle.x / 100) * w;
        const y = (circle.y / 100) * h;
        const r = (circle.radius / 100) * w;
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.stroke();
    });
}

// Draw when image loads
img.onload = draw;

// Redraw on window resize
window.addEventListener('resize', draw);

// Initial draw if image already cached
if (img.complete) draw();