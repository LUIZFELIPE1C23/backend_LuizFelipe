

const aluno = {
    nome: "Luiz",
    idade: 15,
    cidade: "Cascavel",
};

console.log(`Nome: ${aluno.nome}`);
console.log(`Idade: ${aluno.idade} anos`);
console.log(`Cidade: ${aluno.cidade}`);

console.log(`\nEu me chamo ${aluno.nome}, tenho ${aluno.idade} anos, moro em ${aluno.cidade};`);

aluno.cidade = "Foz do Iguaçu";

console.log(`\nNome: ${aluno.nome}`);
console.log(`Idade: ${aluno.idade} anos`);
console.log(`Cidade: ${aluno.cidade}`);

console.log(`\nAgora eu moro em ${aluno.cidade}.`);