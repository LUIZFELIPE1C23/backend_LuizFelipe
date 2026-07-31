//EX 1

const express = require('express');
const app = express();
app.use(express.json());

let alunos = [
  { id: 1, nome: "Ana", nota: 8.5 },
  { id: 2, nome: "Bruno", nota: 7.0 }
];

let proximoId = 3;

app.get('/alunos', (req, res) => {
  res.json(alunos);
});

app.get('/alunos/:id', (req, res) => {
  const id = Number(req.params.id);
  const aluno = alunos.find(a => a.id === id);
  if (!aluno) {
    return res.status(404).json({ erro: "Aluno nao encontrado" });
  }
  res.json(aluno);
});

app.post('/alunos', (req, res) => {
  const novoAluno = {
    id: proximoId,
    nome: req.body.nome,
    nota: req.body.nota
  };
  alunos.push(novoAluno);
  proximoId++;
  res.status(201).json(novoAluno); // 201 = Created
});

app.put('/alunos/:id', (req, res) => {
  const id = Number(req.params.id);
  const aluno = alunos.find(a => a.id === id);
  if (!aluno) {
    return res.status(404).json({ erro: "Aluno nao encontrado" });
  }
  aluno.nome = req.body.nome;
  aluno.nota = req.body.nota;
  res.json(aluno);
});

app.delete('/alunos/:id', (req, res) => {
  const id = Number(req.params.id);
  const aluno = alunos.find(a => a.id === id);
  if (!aluno) {
    return res.status(404).json({ erro: "Aluno nao encontrado" });
  }
  alunos = alunos.filter(a => a.id !== id);
  res.json({ mensagem: "Aluno removido com sucesso" });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
