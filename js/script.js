const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const clearBtn = document.getElementById("clear");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
let size = 20;
let isPressed = false;
let color = 'black';
let x = undefined;
let y = undefined;

sizeEl.innerText = size;

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    const x = e.offsetX;
    const y = e.offsetY;
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;
    x = undefined;
    y = undefined;
})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        // drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
});

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

// function drawLine(x1, y1, x2, y2) {
//     ctx.beginPath();
//     ctx.moveTo(x1, y1);
//     ctx.lineTo(x2, y2);
//     ctx.strokeStyle = color;
//     ctx.lineWidth = size;
//     ctx.stroke();
// }

decreaseBtn.addEventListener('click', ()=>{
    size -= 5;
    size<5 ? size = 5 : null;
    updateSize ()
});

increaseBtn.addEventListener('click', ()=>{
    size += 5;
    size>50 ? size = 50 : null;
    updateSize ()
});

function updateSize () {
    sizeEl.innerText = size;
}

colorEl.addEventListener('change', (e)=>{
    color = e.target.value; //When input value changes
})

clearBtn.addEventListener('click', ()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})

// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height); //clears the canvas
//     drawCircle(x++, y);
//     requestAnimationFrame(draw); //Creates 60FPS repeating
// }
//
// draw();