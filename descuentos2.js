// Vamos a cambiar eso convirtiendo nuestro array 
// de strings en un array de objetos (con el nombre
// y descuento de cada cupón en el mismo lugar):


const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];


// Vamos a crear una variable isUserCouponValueValid 
// con una función que valide si su parámetro coupon 
// es igual a nuestra variable userCouponValue. Y 
// esta variable la vamos a enviar como parámetro 
// a nuestra función array.find().

const isCouponValueValid = function (coupon) {
    return coupon.name === couponValue;
};

const userCoupon = coupons.find(isCouponValueValid);

if (!userCoupon) {
    alert("El cupón " + userCouponValue + "no es válido");
}

// Pero fíjate que ya tenemos nuestro cupón (con 
// nombre y descuento) disponible en la nueva 
// variable userCoupon.

// Podemos aprovechar esta variable para eliminar 
// todos nuestros condicionales else if y cambiarlos 
// por un condicional else que nos proporcione el 
// porcentaje de descuento automáticamente, sin 
// importar el cupón (válido) que estén usando 
// nuestros usuarios.

if (!userCoupon) {
    alert("El cupón " + userCouponValue + "no es válido");
} else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}