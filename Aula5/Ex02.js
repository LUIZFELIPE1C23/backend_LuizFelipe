const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req , res) => {
res.json({ mensagem: " Meu servidor esta no ar!" });
});

app.get('/produtos', (req , res) => {

    res.json({
        produtos: [
            {id: 1, nome: "Notebook", preco: 3500.00},
            {id: 2, nome: "Mouse", preco: 80.00},
            {id: 3, nome: "Teclado", preco: 120.00},
            {id: 4, nome: "Fone de Ouvido", preco: 50.00},
        ]
    });

});

app.listen(3000, () => {
console.log(" Servidor rodando em http://localhost:3000 ");
});