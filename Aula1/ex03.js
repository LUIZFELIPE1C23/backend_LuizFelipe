const input = require("readline-sync");

let total = 0;

for (let i = 0; i < 5; i++) {
    let valor = input.questionInt(`Digite o ${i + 1} numero: `);
    total = total + valor;
}

let mediaFinal = total / 5;

if (mediaFinal >= 7) {
    console.log(`Aluno aprovado, media: ${mediaFinal.toFixed(1)}`);
} else if (mediaFinal >= 5) {
    console.log(`Aluno em recuperacao, media: ${mediaFinal.toFixed(1)}`);
} else {
    console.log(`Aluno reprovado, media: ${mediaFinal.toFixed(1)}`);
}