const areaTriangulo = (base, altura) => {
    return (base * altura) / 2;
}

const perimetroTrianguloEquilatero = lado => {
    return 3 * lado;
}

const perimetroTrianguloIsosceles = (lado1, lado2) => {
    return 2 * lado1 + lado2;
}

const perimetroTrianguloEscaleno = (lado1, lado2, lado3) => {
    return lado1 + lado2 + lado3;
}

const  areaCuadrado = lado => {
    return lado * lado;
}

const perimetroCuadrado = lado => {
    return 4 * lado;
}

const areaRectangulo = (lado1, lado2) => {
    return lado1 * lado2;
}

const perimetroRectangulo = (lado1, lado2) => {
    return 2 * (lado1 + lado2);
}

const areaCirculo = radio => {
    return Math.PI * Math.pow(radio, 2);
}

const longitudCircunferencia = radio => {
    return 2 * Math.PI * radio;
}
