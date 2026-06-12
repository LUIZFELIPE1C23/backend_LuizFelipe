const input = require("readline-sync");

const codigoSecreto = 42;
let contadorTentativas = 0;

while (true) {
    let tentativa = input.questionInt("Digite seu palpite: ");
    contadorTentativas++;

    if (tentativa === codigoSecreto) {
        console.log(`Acertou! Tentativas: ${contadorTentativas}`);
        break;
    } else if (tentativa < codigoSecreto) {
        console.log("O valor correto e maior");
    } else {
        console.log("O valor correto e menor");
    }
}