//array cupones
const coupons = [
   "JuanDC_es_Batman",
   "pero_no_le_digas_a_nadie",
   "es_un_secreto",
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


  // /opcion 1
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
//opcion 2
if (!coupons.includes(couponValue)) {
   alert("El cupón " + couponValue + "no es válido");
} else if (couponValue === "JuanDC_es_Batman") {
   descuento = 15;
} else if (couponValue === "pero_no_le_digas_a_nadie") {
   descuento = 30;
} else if (couponValue === "es_un_secreto") {
   descuento = 25;
}
  
//opcion 

  const precioConDescuento =  calcularPrecioConDescuento(precioValue,descuento);
   const resultP = document.getElementById("ResultP");
   resultP.innerHTML = "El precio con descuento es $" + precioConDescuento;
   
 }