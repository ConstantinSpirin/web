document.addEventListener("DOMContentLoaded", function(event) {

    // Площадь треугольника
    const inputTriangleSide = document.querySelector("#triangle-side-input");
    const inputTriangleHeight = document.querySelector("#triangle-height-input");
    const outputResultTriangleArea = document.querySelector("#triangle-area-result-output");
    const btnCalcTriangleArea = document.querySelector("#calculate-triangle-area-btn");

    btnCalcTriangleArea.addEventListener("click", function (ev) {
        const side = Number(inputTriangleSide.value);
        const height = Number(inputTriangleHeight.value);
        const res = side * height / 2;
        outputResultTriangleArea.innerHTML = res;
    })

    // Площадь круга
    const inputRadius = document.querySelector("#radius-input");
    const outputResultCircleArea = document.querySelector("#circle-area-result-output");
    const btnCalcCircleArea = document.querySelector("#calculate-circle-area-btn");

    btnCalcCircleArea.addEventListener("click", function(ev) {
        const radius = Number(inputRadius.value);
        const res = Math.PI * (radius ** 2);
        outputResultCircleArea.innerHTML = res;
    })

    // Гипотенуза
    const inputLeg1 = document.querySelector("#leg-1-input");
    const inputLeg2 = document.querySelector("#leg-2-input");
    const outputResultHypotenuse = document.querySelector("#hypotenuse-result-output");
    const btnCalcHypotenuse = document.querySelector("#calculate-hypotenuse-btn");

    btnCalcHypotenuse.addEventListener("click", function(ev) {
        const leg1 = Number(inputLeg1.value);
        const leg2 = Number(inputLeg2.value);
        const res = Math.sqrt(leg1 ** 2 + leg2 ** 2);
        outputResultHypotenuse.innerHTML = res;
    })
})
