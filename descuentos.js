// const precioOriginal = 120;
// const descuento = 15;
// const porcentajePrecioConDescento = 100-descuento;
//  const precioConDescuento = (precioOriginal * porcentajePrecioConDescento)/100;

//  console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescento,
//     precioConDescuento,
//  })

 function calcularPrecioConDescuento(precio,descuento){
   const precioConDescuento = (precio *(100 - descuento)/100);
   return precioConDescuento;
 }
//interactuar con html
 function onClickButtonPriceDiscount(){
   const inputPrecio = document.getElementById("InputPrice");
   const precioValue = inputPrecio.value;

   const InputDiscoun = document.getElementById("InputDiscount");
   const discountValue = InputDiscoun.value;

  const precioConDescuento =  calcularPrecioConDescuento(precioValue,discountValue);
   const resultP = document.getElementById("ResultP");
   resultP.innerHTML = "El precio con descuento es $" + precioConDescuento;
   
 }