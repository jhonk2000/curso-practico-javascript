console.group("Cuadrado");
//Codigo del cuadrado
function perimetroCuadrado(lado) {
return lado * 4;
}
//Perimetro
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: "+ ladoCuadrado + "cm");

// const perimetroCuadrado = ladoCuadrado * 4;
// console.log("El perimetro del cuadrado es: "+perimetroCuadrado +"cm");

function areaCuadrado(lado){
    return lado * lado ;
}
// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El área  del cuadrado es: "+areaCuadrado+"cm2");

console.groupEnd();

console.group("Tringulo");
//Código del Triángulo
const trinaguloLado1 = 6;
const trinaguloLado2 = 6;
const trinaguloLadoBase = 3;
const trinaguloAltura = 5.5;

// console.log(
//     "Los lados del trinagulo miden: "
//     +trinaguloLado1 
//     + "cm,"
//     + trinaguloLado2 
//     + "cm y" 
//     + trinaguloLadoBase
//     + "cm y la altura " 
//     + trinaguloAltura
//     + "cm"
//     );

    //Perimetro del triangulo
    function perimetroTriangulo(lado1,lado2,ladobase){
        return lado1 + lado2 + ladobase;
    }

//     const perimetroTriangulos = trinaguloLado1 + trinaguloLado2 + trinaguloLadoBase;
// console.log("El perimetro del triangulo es: "+perimetroTriangulos +"cm");

function areaTriangulo(ladoBase,altura){
    return (ladoBase * altura)/2
}
// const areaTriangulo = (trinaguloLadoBase * trinaguloAltura)/2;
// console.log("El área  del Triangulo es: "+areaTriangulo+"cm2");

console.groupEnd();


console.group("Circulo");
//Codigo del circulo

//Radio
// const radioCriculo = 4;
// console.log("El radio  del circulo  es: "+radioCriculo+"cm");
//Diametro
function diametroCirculo(radio){
    return radio *2;
}
// const diametroCirculo = radioCriculo *2;
// console.log("El diametro  del circulo  es: "+diametroCirculo+"cm");
//pI
const Pi = Math.PI;
// console.log("Pi  es: "+Pi);
//Circunferencia
function permitroCircunferencia(radio){
    const diametro = diametroCirculo(radio);
    return diametro * Pi;
}
// const permitroCircunferencia = diametroCirculo * Pi;
// console.log("El perimetro  del circulo  es: "+permitroCircunferencia+"cm");
//Area
function areaCirculo(radio){
    return (radio * radio)*Pi;
}
// const areaCirculo = (radioCriculo * radioCriculo)*Pi;
// console.log("El area  del circulo  es: "+areaCirculo+"cm2");

console.groupEnd();
