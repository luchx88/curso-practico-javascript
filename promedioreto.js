// La Media GeoMetrica de n numeros positivos se obtiene 
// por ellos multiplicando todos juntos y luego tomar la
// enesima raiz.


lista1 = [
    3,
    5,
    6,
    8, 
    85,
    11
];

lista2 = [
    7,
    5,
    4,
    8,
    3,
    105,
    10543
];

// Todos los numeros son positivos???

function mediaGeometrica(lista) {
    var pos = lista.find(function(a){
                return a < 0;
                });

    if(pos < 0){
        console.log("Tu lista tiene valores negativos, no puede aplicarse la Media Geométrica")
    } else {
        multiplicacion = 1;
        lista.forEach(function(a){
            return multiplicacion = multiplicacion * a;
            });
        console.log(multiplicacion);
        mediaG = multiplicacion ** (1/(lista.length));
        return mediaG;
    };
};

// ------------------------------------------------------

// Promedio Ponderado del profe

const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];

const notesWithCredits = notes.map(function(notesObject){
    return notesObject.note * notesObject.credit;
});

const sumNotesWithCredits = notesWithCredits.reduce(function(accumulator, newValue){
    return accumulator + newValue;
});

const credits = notes.map(function(notesObject){
    return notesObject.credit;
});
const sumCredits = credits.reduce(function(accumulator, newValue){
    return accumulator + newValue;
});

const promedioPonderadoNotasConCreditos = sumNotesWithCredits/sumCredits;