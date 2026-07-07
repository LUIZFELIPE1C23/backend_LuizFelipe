const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
res.json({ mensagem: " Meu servidor esta no ar!" });
});

app.get('/sobre', (req, res) => {
  res.json({
    nome: 'Luiz',
    disciplina: 'Prog. Backend',
    ano: 2
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});