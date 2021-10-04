// Código del cuadrado

function perimetroCuadrado(lado) {
    return lado * 4;
};



function areaCuadrado (lado) {
    return lado * lado;
};



// Código del triangulo


function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
};


function areaTriangulo(base, altura) {
    return (base * altura)/2;
};


// Código del círculo




// Diametro
function diametroCirculo(radio) {
    return radio * 2;
}


// PI
const PI = Math.PI;
console.log(
    "Pi vale: " 
    + PI
);

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 


// Area
function areaCirculo(radio) {
    return radio * radio * PI;
};



