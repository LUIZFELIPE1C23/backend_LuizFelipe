const turma = [
    { nome: 'Alice', nota: 10 },
    { nome: 'Bruno', nota: 7 },
    { nome: 'Carlos', nota: 6 },
    { nome: 'Daniel', nota: 5 },
    { nome: 'Eduardo', nota: 8 }
];

const turmaSituacao = turma.map(aluno => ({
    ...aluno,
    situacao: aluno.nota >= 7 ? 'Aprovado' : 'Reprovado'
}));

const aprovados = turmaSituacao.filter(aluno => aluno.situacao === 'Aprovado');
const mediaGeral = turma.reduce((acum, aluno) => acum + aluno.nota, 0) / turma.length;

console.log(turmaSituacao);
console.log('Aprovados:', aprovados.length);
console.log('Média geral:', mediaGeral);