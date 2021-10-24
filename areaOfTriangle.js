const baseAndHeight = document.querySelectorAll('.inputs');
const areaOfTriangleBtn = document.querySelector('#area-of-triangle-btn');
const outputEl = document.querySelector('#output');

function multiplicationOfBaseHeight(base,height){
    const multiplication = base * height;
    return multiplication;
}
function calculateAreaOfTriangle() {
    const multiplication = multiplicationOfBaseHeight(Number(baseAndHeight[0].value), Number(baseAndHeight[1].value));
    const areaOfTriangle = multiplication/2;
    outputEl.innerText = "The area of triangle is "+areaOfTriangle;
}

areaOfTriangleBtn.addEventListener("click", calculateAreaOfTriangle);