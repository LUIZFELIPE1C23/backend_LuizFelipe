const input = require("readline-sync")

let primeiroValor = teclado.questionInt("Informe o primeiro numero: ");
let segundoValor = teclado.questionInt("Informe o segundo numero: ");

console.log("Resultado da soma: " + (primeiroValor + segundoValor));
console.log("Resultado da subtracao: " + (primeiroValor - segundoValor));
console.log("Resultado da multiplicacao: " + (primeiroValor * segundoValor));

if (segundoValor === 0) {
    console.log("Nao e possivel dividir por zero.");
} else {
    console.log("Resultado da divisao: " + (primeiroValor / segundoValor));
}