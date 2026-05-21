const input = require("readline-sync")

let nome = input.question("Seu nome: ")
let idade = input.questionInt("Sua idade: ")
let cidade = input.question("Sua cidade ")

console.log(`Olá, Meu nome é ${nome}, tenho ${idade} e moro em ${cidade} `)