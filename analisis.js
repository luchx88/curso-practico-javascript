// Helpers o Utils

function esPar(numerito){
    return (numerito % 2 === 0)
};


//Calculadora de Mediana

function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2)
    
    if(esPar(lista.length)){
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const personitaMitad = (personitaMitad1 + personitaMitad2) / 2;
        
        return personitaMitad

    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    };
};

// Mediana General

const salariosArg = argentina.map(
    function(personita){
    return personita.salario;
});

const salariosArgSorted = salariosArg.sort(function(a,b){
    return a - b;
});

const medianaGeneralArg = medianaSalarios(salariosArgSorted);


// Mediana del top 10% de salarios

const spliceStart = (salariosArgSorted.length*90/100);
const spliceCount = (salariosArgSorted.length - spliceStart);

const salariosArgTop10 = salariosArgSorted.splice(
    spliceStart,
    spliceCount

);

const medianaTop10Arg = medianaSalarios(salariosArgTop10);
 




console.log({
    medianaGeneralArg,
    medianaTop10Arg
});