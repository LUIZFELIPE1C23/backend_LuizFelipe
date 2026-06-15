const turma = [
    { nome: 'Alice', nota: 10 },
    { nome: 'Maria', nota: 6 },
    { nome: 'Carlos', nota: 6 },
    { nome: 'Daniel', nota: 5 },
    { nome: 'Eduardo', nota: 8 }
]
turma.map(situacao => {
    if(situacao.nota >= 6){
        situacao.situacao = 'Aprovado';
    } else {
        situacao.situacao = 'Reprovado';
    }   
    return situacao;
}
);
console.log(turma);