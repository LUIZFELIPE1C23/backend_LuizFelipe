const input = require("readline-sync")

function execOperacao(a, b, operacao) {
    let resultado = operacao(a, b);
    console.log(resultado);
}

execOperacao(10, 3, (a, b) => a + b);
execOperacao(10, 3, (a, b) => a * b);
execOperacao(10, 3, (a, b) => a - b);