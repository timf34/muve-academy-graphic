// ============================================
// CONFIG - Edit your graphics here
// ============================================
const CONFIG = {
    lineThickness: 0.1,      // % of image width
    circleThickness: 0.1,    // % of image width
};

// ============================================
// DRAWING CODE - No need to edit below
// ============================================
const img = document.getElementById('baseImage');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function draw() {
    const w = img.offsetWidth;
    const h = img.offsetHeight;
    
    // Account for device pixel ratio (Retina displays)
    const dpr = window.devicePixelRatio || 1;
    
    // Set canvas size accounting for high-DPI displays
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    
    // Scale context to match device pixel ratio
    ctx.scale(dpr, dpr);
    
    ctx.strokeStyle = 'white';
    ctx.lineCap = 'round';
    
    // Calculate positions based on actual pixel dimensions
    const halfHeight = h / 2;
    const centerX = w / 2;
    
    const leftX = centerX - halfHeight;   // Left edge of square
    const rightX = centerX + halfHeight;  // Right edge of square
    const circleRadius = halfHeight;      // Radius = half the square's side
    
    const lines = [
        { x1: leftX, y1: 0, x2: leftX, y2: h },           // Left vertical
        { x1: rightX, y1: 0, x2: rightX, y2: h },         // Right vertical
        { x1: centerX, y1: 0, x2: centerX, y2: h },       // Center vertical
        { x1: leftX, y1: 0, x2: rightX, y2: h },          // Diagonal top-left to bottom-right
        { x1: rightX, y1: 0, x2: leftX, y2: h },          // Diagonal top-right to bottom-left
    ];
    
    const circles = [
        { x: centerX, y: h / 2, radius: circleRadius },   // Inscribed circle
        { x: leftX, y: 4 * h / 5, radius: h / 5  }, // Medium sized left circle
        { x: 13 * w / 32, y: 11 * h / 12, radius: h / 12  }, // Inner circle

    ];
    
    // Draw lines
    ctx.lineWidth = (CONFIG.lineThickness / 100) * w;
    lines.forEach(line => {
        ctx.beginPath();
        ctx.moveTo(line.x1, line.y1);
        ctx.lineTo(line.x2, line.y2);
        ctx.stroke();
    });
    
    // Draw circles
    ctx.lineWidth = (CONFIG.circleThickness / 100) * w;
    circles.forEach(circle => {
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.stroke();
    });
}

// Draw when image loads
img.onload = draw;

// Redraw on window resize
window.addEventListener('resize', draw);

// Initial draw if image already cached
if (img.complete) draw();