const input = require("readline-sync")

const produtos = []

for (let i = 1; i <= 3; i++) {
  const nome = input.question(`Digite o nome do produto ${i}: `)
  const preco = Number(input.question(`Digite o preço do produto ${i}: `))
  produtos.push({ id: i, nome, preco })
}

const produtosAcima20 = produtos.filter(produto => produto.preco > 20)

console.log("\nProdutos com preço acima de R$ 20,00:")
produtosAcima20.forEach(produto => {
  console.log(`id=${produto.id}, nome=${produto.nome}, preco=R$ ${produto.preco}`)
})
