    // Como saber si el legth del array es par o impar????
    // if (lista1.length es par? ) {
    //     necesitamos dos elementos
    //     -> el promedio
    //     -> mediana
    // } else {
    // posicion mitadLista1 dentro de la lista
    // -> es la mediana        
    //}


function calcularMediaAritmetica(lista) {
        const sumaLista = lista.reduce(
            function (valorAcumulado, nuevoElemento) {
                return valorAcumulado + nuevoElemento
            }
        );
        const promedioLista = sumaLista/lista.length;
        return promedioLista;
};

// En esta funcion el método reduce toma cada elemento y ejecuta una 
// funcion reductora a cada elemento, devolviendo un unico valor.
// tal los parametros de la funcion reductora, son: el primero el 
// Acumulador, y el segundo el nuevo valor. Empieza el acumulador 
// con valor = 0, y se toma como nuevo elemento el 0 del index.

const lista1 = [
    2000000,
    200,
    999,
    1,
    999,
    400000000,
    1,
    2548656,
    3060621,
    3.1415
];

// La primera linea de ejecucion, de la siguiente funcion, utiliza 
// el método .sort(). Por defecto este ordena los elementos de la lista de
// la lista, convirtiendolos en strings y comparandolos por su valor en 
// Unicode. Por lo que si se comparan palabras o letras, tomara primero 
// las mayusculas. si se toman numeros por ejemplo comparando 77 y 9, 
// tomara como menor al 77 y mayor al 9.
// Se le agrega el parametro compareFunction, la cual define el modo de
// ordenamiento.
// Si se provee compareFunction, los elementos del array son comparados
// de acuerdo al valor que retorna dicha funcion de comparacion. Siendo 
// a y b dos elementos comparados, tenemos:
// Si compareFunction(a,b) es menor que cero, se situa a en un indice 
// menor que b, es decir a viene primero.
// Si compareFunction(a,b) es igual a cero, se deja a y b sin cambio 
// entre ellos, pero ordenados con respecto al resto de los elementos diferentes
// Si compareFunction(a,b) es mayor que cero, b viene primero.
// Como en este caso necesitamos que la funcion sea ordenada de manera ascendente
// lista.sort(function(a,b){return a-b};)


function calcularMediana(lista) {
    
    let listaOrdenada = lista.sort(function(a,b) {return a - b});
    
    const mitadLista = parseInt(listaOrdenada.length / 2);

    function esPar(numerito) {
        if (numerito % 2 === 0){
            return true;
        } else {
            return false;
        }
    }

    if (esPar(listaOrdenada.length) == true) {
        const elemento1 = listaOrdenada[mitadLista];
        const elemento2 = listaOrdenada[mitadLista - 1];
        
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
        return mediana = promedioElemento1y2;

    } else {
        return mediana = listaOrdenada[mitadLista]
    }
}    






