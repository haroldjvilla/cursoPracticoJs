//const precioOriginal = 120;
//const descuento = 18;




function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio *  porcentajePrecioConDescuento) / 100;

    const coupons = [
        "25%", "50%", "75%"
    ];

    return precioConDescuento;

}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    switch(couponValue) {
        case coupons[0]: //"25%"
        descuento = 25;
        break

        case coupons[1]: //"50%"
        descuento = 50;        
        break

        case coupons[2]: //"75%"
        descuento = 75;
        break
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue , discountValue);

    const resultP = document.getElementById("resultP");
    resultP.innerText = "El precio con descuento son : $" + precioConDescuento;
}

//console.log({
    //precioOriginal, descuento, porcentajePrecioConDescuento, precioConDescuento,
//});
