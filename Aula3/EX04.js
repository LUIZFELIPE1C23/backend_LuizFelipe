const alunos = [
  { id: 1, nome: "Ana", nota: 8.5 },
  { id: 2, nome: "Bruno", nota: 6.0 },
  { id: 3, nome: "Carla", nota: 7.2 },
  { id: 4, nome: "Daniel", nota: 5.5 },
  { id: 5, nome: "Eduardo", nota: 9.1 }
]

const alunosComSituacao = alunos.map(aluno => ({
  nome: aluno.nome,
  nota: aluno.nota,
  situacao: aluno.nota >= 7 ? "Aprovado" : "Reprovado"
}))

console.log("Resultado com situação de aprovação:")
console.log(alunosComSituacao)
