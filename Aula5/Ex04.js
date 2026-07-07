const express = require('express');

const app = express();

app.use(express.json());

const produtos = [
    {id: 1, nome: "Notebook", preco: 3500.00},
    {id: 2, nome: "Mouse", preco: 80.00},
    {id: 3, nome: "Teclado", preco: 120.00},
    {id: 4, nome: "Fone de Ouvido", preco: 50.00},
];

app.get('/', (req , res) => {
res.json({ mensagem: " Meu servidor esta no ar!" });
});

app.get('/produtos', (req , res) => {

    res.json(
        produtos
    );

});

app.get('/produtos/caros', (req , res) => {
    const caros = produtos.filter(produto => produto.preco > 100);
    res.json(caros);
});

app.listen(3000, () => {
console.log(" Servidor rodando em http://localhost:3000 ");
});