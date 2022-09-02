// código del cuadrado
console.group("Cuadrados");




function perimetroCuadrado(lado) {
    return lado * 4;
}



function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

// código del triangulo
console.group("Triángulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm ");



function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}



function areaTriangulo(base, altura){
    return (base * altura) / 2;
}


console.groupEnd();


// código del Círculo
console.group("Círculos");

// Radio


// Diametro

function diametroCirculo(radio){
    return radio * 2;
}


// PI
const PI = Math.PI;
console.log("PI es: " + PI);


// Cirunferencia

function perimetroCirculo(radio){
    const diametro = diametroCirculo (radio);
    return diametro * PI;
}


//Área

function areaCirculo(radio){
    return (radio * radio) * PI;
}
console.groupEnd();

// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
    
}