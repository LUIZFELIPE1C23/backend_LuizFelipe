const input = require("readline-sync")

function validarSenha(senha){
    return senha.length >= 8;
}

let senha = input.question("Qual a senha?");

if(validarSenha(senha)){
    console.log("Senha válida");
}
else{
    console.log("Senha fraca - mínimo 8 caracteres");
}
