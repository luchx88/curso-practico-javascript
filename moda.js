function calcularListaRandom(n) {
    const cant = n;
    var listaR = [];
    var ran = parseInt(Math.random()*(1000));
    
    for(i = 0; i < cant; i++) {
        var ran = parseInt(Math.random()*(1000));
        listaR[i] = ran;
    }
    var lista = listaR;
    return lista;
}

function calcularModa(lista) {
    const listaCount = {};

    lista.map(
        function (elemento) {
            if (listaCount[elemento]){
                (listaCount[elemento]) += 1;
            } else{
                listaCount[elemento] = 1;
            }
        }
    );

    const listaArray = Object.entries(listaCount).sort(
        function(valorAcumulado, nuevoValor){ 
            return valorAcumulado[1] -  nuevoValor[1];
        }
    );

    const moda = listaArray[listaArray.length - 1];
    return moda ;
}
    

lista1 = [
    1,
    1,
    2,
    1,
    2,
    1,
    1,
    1
];
var a;
for(i=0; i < lista1.length; i++) {
    a = a + ", " + lista1[i];
    console.log(a);
}

var listaFiltro = lista1.filter(function(articulo) {
    return articulo == 1;
})

