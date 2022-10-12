console.group("Cuadrado");
//Codigo del cuadrado
//Perimetro
function perimetroCuadrado(lado) {
return lado * 4;
}
//Area
function areaCuadrado(lado){
    return lado * lado ;
}

console.groupEnd();

console.group("Tringulo");
//Código del Triángulo
//Perimetro del triangulo
function perimetroTriangulo(lado1,lado2,ladobase){
    return lado1 + lado2 + ladobase;
}

//area
function areaTriangulo(ladoBase,altura){
    return (ladoBase * altura)/2
}

console.groupEnd();

console.group("Circulo");
//Codigo del circulo

//Diametro
function diametroCirculo(radio){
    return radio *2;
}

//pI
const Pi = Math.PI;

//Circunferencia
function permitroCircunferencia(radio){
    const diametro = diametroCirculo(radio);
    return diametro * Pi;
}

//Area
function areaCirculo(radio){
    return (radio * radio)*Pi;
}

console.groupEnd();


//Codigo Triangulo Isóceles
//Altura
function isoceles(ladocongruente,base){
altura2 = (ladocongruente * ladocongruente) - ((base * base)/4)
altura = Math.sqrt(altura2);
return altura;
}

function alturaTrianguloIsoce(){
    const lado1 = document.getElementById("InputLado1").value;
    const lado2 = document.getElementById("InputLado2").value;
    const lado3 = document.getElementById("InputLado3").value;
    console.log(lado1,lado2,lado3);
    if (lado1 === lado2) {
        const lado = lado1;
        const base = lado3;
        altura = isoceles(lado,base);
        alert(altura);
    }else if(lado1 === lado3){
        const lado = lado1;
        const base = lado2;
        altura = isoceles(lado,base);
        alert(altura);
    }else if(lado2 === lado3){
        const lado = lado2;
        const base = lado1;
        altura =isoceles(base,lado);
      alert(altura);
    }else{
        alert("No es un triangulo isoceles");
    }
    
}

//Aca interectuamos con el Html

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaoCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

