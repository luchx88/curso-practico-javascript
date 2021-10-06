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
    800,
    950,
    400,
    575,
    680,
    725,
    900,
    600,
    500,
    450,
    370,
    1050,
    360,
    860,
    700,
    640,
    800,
    1100,
    790,
    620,
];

function persona(nom, sal){
    this.nombre = nom,
    this.salario = sal
};

for (i = 0; i<nombres.length; i++) {
    argentina.push(new persona(nombres[i], salarios[i]));
};