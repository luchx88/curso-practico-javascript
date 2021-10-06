// ----------Helpers----------

function calcularPromedio(lista) {
    const suma = lista.reduce(function(acc,newEl){
        return acc + newEl;
    });
    const promedio = suma/lista.length;
    return promedio;
};

function esPar(lista) {
    return (lista.length % 2 == 0);
};


// ----------Calcular la Mediana----------

const salariosArg = argentina.map(function(obj){
    return obj.salario;
});

const salariosArgSorted = salariosArg.sort(function(a,b) {
    return a - b;
});

const mitadLista = parseInt(salariosArgSorted.length/2);


function calcularMediana(lista) {
    if(esPar(lista) == true) {
        mediana = calcularPromedio([lista[mitadLista], lista[mitadLista - 1]]);
        console.log(mediana);
    } else {
        mediana = lista[mitadLista];
        console.log(mediana);
    };
};

// ----------Calcular Top 10% Salarios----------

function calcularPromedioTop10PorCiento(lista) {
    const spliceStart = (lista.length * 90 / 100) - 1;
    const spliceCount = (lista.length - spliceStart) - 1;

    const salariosArgTop10 = lista.splice(spliceStart, spliceCount);
    
    const promedioTop10Salarios = calcularPromedio(salariosArgTop10);

    return promedioTop10Salarios

};
