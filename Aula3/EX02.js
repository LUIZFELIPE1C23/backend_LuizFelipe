const produtos = [
  { id: 1, nome: "Mouse", preco: 79.9 },
  { id: 2, nome: "Teclado", preco: 149.9 },
  { id: 3, nome: "Monitor", preco: 899.0 },
  { id: 4, nome: "Headset", preco: 249.5 }
]

for (let i = 0; i < produtos.length; i++) {
  const produto = produtos[i]
  console.log(`Produto ${i + 1}: id=${produto.id}, nome=${produto.nome}, preco=R$ ${produto.preco}`)
}

produtos.push({ id: 5, nome: "Webcam", preco: 199.9 })
console.log(`\nNovo tamanho do array: ${produtos.length}`)
