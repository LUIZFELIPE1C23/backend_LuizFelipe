const produtos = [
  { id: 1, nome: "Mouse", preco: 79.9 },
  { id: 2, nome: "Teclado", preco: 149.9 },
  { id: 3, nome: "Monitor", preco: 899.0 },
  { id: 4, nome: "Headset", preco: 249.5 }
]

const produtoComId3 = produtos.find(produto => produto.id === 3)
if (produtoComId3) {
  console.log(`Produto com id 3: ${produtoComId3.nome}`)
} else {
  console.log("Produto com id 3 não encontrado")
}

const produtosAcima50 = produtos.filter(produto => produto.preco > 50)
console.log("\nProdutos com preço acima de R$ 50,00:")
produtosAcima50.forEach(produto => {
  console.log(`id=${produto.id}, nome=${produto.nome}, preco=R$ ${produto.preco}`)
})
