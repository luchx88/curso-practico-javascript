const argentina = [];
const nombres = [
    "Juanita",
    "Natalia",
    "Roberto",
    "Alfredo",
    "Sebastian",
    "Adolfo",
    "Claudia",
    "Sofia",
    "Micaela",
    "Javier",
    "Alejandro",
    "Isabel",
    "Emanuel",
    "Candelaria",
    "Virginia",
    "Tomas",
    "Juan",
    "Sandra",
    "Ester",
    "Alexia",
    "Alejo",
    "Eugenio",
];
const salarios =  [
    1000,
    1250,
    350,
    950,
    400,
    970,
    680,
    725,
    900,
    600,
    500,
    450,
    370,
    1050,
    360,
    420,
    700,
    640,
    800,
    1100,
    790,
    620,
];


// Añado a la lista la lista, argentina, los valores de la 
// lista de nombres y la de salarios.

function pers(nom, sal){
    this.nombre = nom,
    this.salario = sal
};

for(i = 0; i < salarios.length; i++ ) {
    argentina.push(new pers(nombres[i], salarios[i]));
};





