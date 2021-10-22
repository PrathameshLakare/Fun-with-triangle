const inputs = document.querySelectorAll('.angle-input');
const isTriangleBtn = document.querySelector('#is-triangle-btn');
const outputEl = document.querySelector('#output');

function calculateSumOfAngles(angel1, angle2, angle3) {
    const sumOfAngles = angel1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle() {
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if (sumOfAngles === 180) {
        outputEl.innerText = "It is a triangle.";
    } else {
        outputEl.innerText = "It is not a triangle.";
    }
}

isTriangleBtn.addEventListener("click", isTriangle);