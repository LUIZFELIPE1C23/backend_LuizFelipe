const input = require("readline-sync");

let tabuada = input.questionInt(`Digite o numero: `);

for(let i = 1; i<=10; i++) {
    console.log(`${tabuada} * ${i} = ${tabuada * i}`);
}