// Código del cuadrado

function perimetroCuadrado(lado) {
    return lado * 4;
};



function areaCuadrado (lado) {
    return lado * lado;
};



// Código del triangulo


function perimetroTriangulo(lado1, lado2, base) {
    return (lado1 + lado2 + base);
};


function areaTriangulo(base, altura) {
    return (base * altura)/2;
};

function alturaIsosceles(lado, base) {
    return Math.sqrt((Math.pow(lado, 2)) - (Math.pow(base, 2) /4))
}



// Código del círculo




// Diametro
function diametroCirculo(radio) {
    return radio * 2;
}


// PI
const PI = Math.PI;


// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 


// Area
function areaCirculo(radio) {
    return radio * radio * PI;
};


// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    
    alert(perimetro);
};

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    
    alert(area);
};

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTriangulo1");
    const input2 = document.getElementById("InputTriangulo2");
    const input3 = document.getElementById("InputTriangulo3");

    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const value3 = Number(input3.value);

    console.log(input1 + value1 + value2 + value3);
    
    const perimetro = perimetroTriangulo(value1, value2, value3);

    alert(perimetro);

}

function calcularAreaTriangulo() {
    const input3 = document.getElementById("InputTriangulo3");
    const input4 = document.getElementById("InputTriangulo4");


    const value3 = input3.value;
    const value4 = input4.value;

    const area = areaTriangulo(value3, value4);

    alert(area);

}

function calcularAlturaIsosceles() {
    const input1 = document.getElementById("InputIsosceles1");
    const input2 = document.getElementById("InputIsosceles2");
    const input3 = document.getElementById("InputIsosceles3");

    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;

    const altura = alturaIsosceles(value1, value3);
    
    if (value1 == value2) {
        alert(altura);
    } else {
        alert("Tu triángulo no es isósceles")
    }

    
}





function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);

    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);

    alert(area);
}