const prompt = require("prompt-sync")();

"1. VARIABLES Y TIPOS DE DATOS"
"Ejercicio 1"
let nombre = "Diana";
let edad = 42;
let esEstudiante = true;

"Ejercicio 2"
let sinValor;
let valorNulo = null;
console.log(sinValor);
console.log(valorNulo);

"2. INGRESOS DE DATOS POR TECLADO"
"Ejercicio 1"
let anioNacim = prompt("Escribe tu año de nacimiento: ");
edad = 2025 - anioNacim;
console.log("Tu edad es: "+edad+" años");

"Ejercicio 2"
let numero1 = prompt("Ingresa el primer número: ");
let numero2 = prompt("Ingresa el segundo número: ");
let num1 = Number(numero1);
let num2 = Number(numero2);
let suma = num1 + num2;
console.log("La suma de los números "+num1+" y "+num2+" es: "+suma);

"3 CONDICIONALES"
"Ejercicio 1"
let edad_usuario = prompt ("Ingresa tu edad: ");
let edad_usu = Number(edad_usuario);
if (edad_usu >= 18) {
    console.log("Puedes entrar");
} else {
    console.log("No puedes entrar;")
}

"Ejercicio 2"
let posNeg = prompt("Ingresa un número: ");
let numPosNeg = Number(posNeg);
if (numPosNeg >0) {
    console.log("El número "+numPosNeg+" Es positivo");
} else if (numPosNeg <0) {
    console.log("El número "+numPosNeg+" Es negativo");
} else {
    console.log("El número ingresado Es cero");
}

"4. BUCLE WHILE"
"Ejercicio 1"
let While1 = prompt ("Ingrese un número: ");
let numWhile1 = Number(While1);
let contador = 1
while (contador <=numWhile1) {
    console.log(contador);
    contador++;
}