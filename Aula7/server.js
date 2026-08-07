const express = require('express');
const app = express();
const erros = []; // EX 4
app.use(express.json());

let alunos = [
  { id: 1, nome: "Ana", nota: 8.5 },
  { id: 2, nome: "Bruno", nota: 7.0 }
];

let proximoId = 3;

// GET TODOS
app.get('/alunos', (req, res) => {
  res.json(alunos);
});




// GET ID
app.get('/alunos/:id', (req, res) => {
  const id = Number(req.params.id);
  const aluno = alunos.find(a => a.id === id);

  if (!aluno) {
    return res.status(404).json({ erro: "Aluno nao encontrado" }); // EX 3
  }
  

  res.json(aluno);
 });




// POST
app.post('/alunos', (req, res) => {
  const novoAluno = {
    id: proximoId,
    nome: req.body.nome,
    nota: req.body.nota
  };

 //validação post vv
  if (!novoAluno.nome) {
    erros.push("O campo nome e obrigatorio"); //EX4
  }
  if (novoAluno.nota === undefined || novoAluno.nota === null) {
    erros.push("O campo nota e obrigatorio");//EX 4
  }
  if (typeof novoAluno.nome !== 'string') {
    erros.push("O campo nome deve ser uma string"); //EX4
  }
  if (isNaN(Number(novoAluno.nota))) {
    erros.push("A nota deve ser um numero");
  }
  novoAluno.nota = Number(novoAluno.nota);
  if (novoAluno.nota < 0 || novoAluno.nota > 10) {
    erros.push("A nota deve estar entre 0 e 10"); // EX 2 e EX 4
  }
  
  //vv EX 4 vv
  if (erros.length > 0) {
    return res.status(400).json({ erros });
  }
 //validação post ^^
  alunos.push(novoAluno);
  proximoId++;
  res.status(201).json(novoAluno); 
});



// PUT
app.put('/alunos/:id', (req, res) => {
  const id = Number(req.params.id);
  const aluno = alunos.find(a => a.id === id);
  // V validação put V
  if (!aluno) {
    return res.status(404).json({ erro: "Aluno nao encontrado" }); // EX 3
  }
  
  const { nome, nota } = req.body;
  if (!nome) {
    erros.push("O campo nome e obrigatorio"); //EX4
  }
  if (nota === undefined || isNaN(nota) || nota < 0 || nota > 10) {
    erros.push("Nota inválida (0 a 10)"); //EX4
  }
//^^ validação put ^^
  aluno.nome = req.body.nome;
  aluno.nota = req.body.nota;
  res.json(aluno);
});




// DELETE
app.delete('/alunos/:id', (req, res) => {
  const id = Number(req.params.id);
  const aluno = alunos.find(a => a.id === id);
  if (!aluno) {
    return res.status(404).json({ erro: "Aluno nao encontrado" }); //EX 3
  }

  alunos = alunos.filter(a => a.id !== id);
  res.json({ mensagem: "Aluno removido com sucesso" });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});