const input = require("readline-sync");

let par= 0;
let impar = 0;

for (let i = 0; i < 10; i++) {
    let numero = input.questionInt(`Digite o ${i + 1} valor: `);
    if (numero % 2 === 0) {
        par++;
    } else {
        impar++;
    }
}

console.log(`Foram informados ${par} numeros pares e ${impar} numeros impares.`);