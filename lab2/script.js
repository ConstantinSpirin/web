document.addEventListener("DOMContentLoaded", function (event) {

    // Площадь квадрата
    const   inputSquareSide = document.querySelector("#square-side-input"),
            btnCalcSquareArea = document.querySelector("#calculate-square-area-btn"),
            outputResultSquareArea = document.querySelector("#square-area-result-output");

    btnCalcSquareArea.addEventListener("click", calculateSquareArea);
    inputSquareSide.addEventListener("input", calculateSquareArea);

    function calculateSquareArea(ev) {
        const side = Number(inputSquareSide.value);
        const res = side ** 2;
        outputResultSquareArea.innerHTML = res;
    }

    // Площадь треугольника
    const   XaInput = document.querySelector("#x-a-input"),
            YaInput = document.querySelector("#y-a-input"),
            XbInput = document.querySelector("#x-b-input"),
            YbInput = document.querySelector("#y-b-input"),
            XcInput = document.querySelector("#x-c-input"),
            YcInput = document.querySelector("#y-c-input"),
            btnCalcTriangleArea = document.querySelector("#calculate-triangle-area-btn"),
            outputResultTriangleArea = document.querySelector("#triangle-area-result-output");

    btnCalcTriangleArea.addEventListener("click", calculateTriangleSquare);
    btnCalcTriangleArea.addEventListener("focus", calculateTriangleSquare);

    function calculateTriangleSquare(ev) {
        const   xa = Number(XaInput.value),
                ya = Number(YaInput.value),
                xb = Number(XbInput.value),
                yb = Number(YbInput.value),
                xc = Number(XcInput.value),
                yc = Number(YcInput.value),
                res = Math.abs((((xa - xc) * (yb - yc)) - ((ya - yc) * (xb - xc))) / 2);
        outputResultTriangleArea.innerHTML = res;
    }

    // Расстояние между точкой и началом координат
    const   XpInput = document.querySelector("#x-p-input"),
            YpInput = document.querySelector("#y-p-input"),
            outputResultPointOriginDistance = document.querySelector("#point-origin-distance-result-output");

    XpInput.addEventListener("select", calculatePointOriginDistance);
    YpInput.addEventListener("select", calculatePointOriginDistance);

    function calculatePointOriginDistance(ev) {
        const   x = Number(XpInput.value),
                y = Number(YpInput.value),
                res = Math.sqrt(x*x + y*y);
        outputResultPointOriginDistance.innerHTML = res;
    }

    // Обмен значениями двух переменных
    const   input1 = document.querySelector("#input-1"),
            input2 = document.querySelector("#input-2");

    input1.addEventListener("blur", exchange);
    input2.addEventListener("blur", exchange);

    function exchange(ev) {
        const   a = input1.value
                b = input2.value;
        input1.value = b;
        input2.value = a;
    }
})
