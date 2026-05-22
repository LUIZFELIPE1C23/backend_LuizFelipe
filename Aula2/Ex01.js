const input = require("readline-sync")

function calcularSoma(a, b) {
    return a + b;
}

function calcularSubtracao(a, b) {
    return a - b;
}

function calcularMultiplicacao(a, b) {
    return a * b;
}

function calcularDivisao(a, b) {
    return a / b;
}

let num1 = input.questionInt("Informe o primeiro numero: ");
let num2 = input.questionInt("Informe o segundo numero: ");

console.log("Resultado da soma: " + calcularSoma(num1, num2));
console.log("Resultado da subtracao: " + calcularSubtracao(num1, num2));
console.log("Resultado da multiplicacao: " + calcularMultiplicacao(num1, num2));
console.log("Resultado da divisao: " + calcularDivisao(num1, num2));