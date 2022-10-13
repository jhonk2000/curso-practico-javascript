//array cupones
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


 function calcularPrecioConDescuento(precio,descuento){
   const precioConDescuento = (precio *(100 - descuento)/100);
   return precioConDescuento;
 }
//interactuar con html
 function onClickButtonPriceDiscount(){
   const inputPrecio = document.getElementById("InputPrice");
   const precioValue = inputPrecio.value;

   const InputCoupon = document.getElementById("InputCoupon");
   const couponValue = InputCoupon.value;


  // Solución #1: arrays y switch
//    let descuento;

//   switch(couponValue) {
//     case coupons[0]: // "JuanDC_es_Batman"
//       descuento = 15;
//     break;
//     case coupons[1]: // "pero_no_le_digas_a_nadie"
//       descuento = 30;
//     break;
//     case coupons[2]: // "es_un_secreto"
//       descuento = 25;
//     break;
//Solución #2: legibilidad, error first y muerte al switch

// if (!coupons.includes(couponValue)) {
//    alert("El cupón " + couponValue + "no es válido");
// } else if (couponValue === "JuanDC_es_Batman") {
//    descuento = 15;
// } else if (couponValue === "pero_no_le_digas_a_nadie") {
//    descuento = 30;
// } else if (couponValue === "es_un_secreto") {
//    descuento = 25;
// }
  
//opcion 3 Array de cupones 2.0: ahora también con los descuentos

const isCouponValueValid = function (coupon) {
   return coupon.name === couponValue;  
};

const userCoupon = coupons.find(isCouponValueValid);

if (!userCoupon) {
   alert("El cupón " + couponValue + "no es válido");
}else {
   const descuento = userCoupon.discount;
   const precioConDescuento = calcularPrecioConDescuento(precioValue, descuento);

   const resultP = document.getElementById("ResultP");
   resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

     
 }