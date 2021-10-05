
function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;

    const precioConDescuento = precio * porcentajePrecioConDescuento / 100;

    return precioConDescuento;
};

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
        
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const discountCoupons = document.getElementById("DiscountCoupons");
    const couponValue = discountCoupons.value;
    
    if (couponValue == 0) {
        
        const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "Total a pagar: $" + precioConDescuento;

    } else {

        const precioConDescuento = calcularPrecioConDescuento(priceValue, couponValue);
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "Total a pagar: $" + precioConDescuento;
    }

    

}


