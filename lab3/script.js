document.addEventListener("DOMContentLoaded", function(event) {
    // Вычисление максимума трех чисел
    const inputNum1 = document.querySelector("#number-1-input");
    const inputNum2 = document.querySelector("#number-2-input");
    const inputNum3 = document.querySelector("#number-3-input");
    const outputResultMaxValue = document.querySelector("#max-value-result-output");
    const btnCalcMaxValue = document.querySelector("#calculate-max-btn");

    btnCalcMaxValue.addEventListener("click", function(ev) {
        const   n1 = Number(inputNum1.value),
                n2 = Number(inputNum2.value),
                n3 = Number(inputNum3.value),
                res = Math.max(n1, n2, n3);
        outputResultMaxValue.innerHTML = res;
    })

    // Число максимальных элементов
    const inputNum1_2 = document.querySelector("#number-1-input-2");
    const inputNum2_2 = document.querySelector("#number-2-input-2");
    const inputNum3_2 = document.querySelector("#number-3-input-2");
    const inputNum4_2 = document.querySelector("#number-4-input-2");
    const inputNum5_2 = document.querySelector("#number-5-input-2");
    const outputResultMaxCount = document.querySelector("#max-count-result-output");
    const btnCalcMaxCount = document.querySelector("#calculate-max-count-btn");

    btnCalcMaxCount.addEventListener("click", function(ev) {
        const arr = [Number(inputNum1_2.value),
            Number(inputNum2_2.value),
            Number(inputNum3_2.value),
            Number(inputNum4_2.value),
            Number(inputNum5_2.value)];
        const max = Math.max(...arr);
        const res = arr.filter(x => x == max).length;
        outputResultMaxCount.innerHTML = res;
    })

    // Существование треугольника
    const inpuSide1 = document.querySelector("#side-1-input");
    const inpuSide2 = document.querySelector("#side-2-input");
    const inpuSide3 = document.querySelector("#side-3-input");
    const outputResultIsTriangleAvailable = document.querySelector("#is-triangle-available-result-output");
    const btnCalcIsTriangleAvailable = document.querySelector("#calculate-is-triangle-available-btn");

    btnCalcIsTriangleAvailable.addEventListener("click", function(ev) {
        const   s1 = Number(inpuSide1.value),
                s2 = Number(inpuSide2.value),
                s3 = Number(inpuSide3.value);
        let res;
        if ( s1 >= (s2 + s3) || s2 >= (s1 + s3) || s3 >= (s1 + s2)) {
            res = "Нет";
        } else {
            res = "Да";
        }
        outputResultIsTriangleAvailable.innerHTML = res;
    })

    // Определение квадранта точки
    const inputPointX = document.querySelector("#point-x-input");
    const inputPointY = document.querySelector("#point-y-input");
    const outputResultQuadrant = document.querySelector("#quadrant-result-output");
    const btnCalcQuadrant = document.querySelector("#calculate-quadrant-btn");

    btnCalcQuadrant.addEventListener("click", function(ev) {
        const   x = Number(inputPointX.value),
                y = Number(inputPointY.value);
        let res;
        if (x > 0 && y > 0) {
            res = "1 квадрант"
        } else if (x < 0 && y > 0) {
            res = "2 квадрант";
        } else if (x < 0 && y < 0) {
            res = "3 квадрант";
        } else if (x > 0 && y < 0) {
            res = "4 квадрант";
        } else if (x == 0 && y != 0) {
            res  = "Точка лежит на оси OY";
        } else if (y == 0 && x != 0) {
            res = "Точка лежит на оси OX";
        } else {
            res = "Точка (0;0)";
        }
        outputResultQuadrant.innerHTML = res;
    })
})
