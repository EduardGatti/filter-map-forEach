// 🟢 Fácil:
// Objetivo: Dado um array de números, retornar um novo array com o dobro de cada número.
// Exemplo:
const numeros = [2, 4, 6, 8];
// Resultado esperado: [4, 8, 12, 16]

const dobro = numeros.map(numero => {
    return numero * 2
})

console.log(dobro)

// 🟡 Médio:

const nomes = ['ana', 'bruno', 'carla'];
// Resultado esperado: ['ANA', 'BRUNO', 'CARLA']

const maiuscula = nomes.map(nome => {
    return nome.toUpperCase()
})

console.log(maiuscula);


// 🔴 Difícil:
// Objetivo: Dado um array de objetos com produtos, retornar um novo array com o nome e o preço com 10% de desconto.
const produtos = [
  { nome: 'Camiseta', preco: 50 },
  { nome: 'Calça', preco: 80 },
  { nome: 'Tênis', preco: 120 }
]
 const desconto = produtos.map(produto => {

    let produtoDesconto = produto.preco * 0.10
    let valorF = produto.preco - produtoDesconto

    return {
        "nome": produto.nome,
        "precoComDesconto": valorF
    }
 })

 console.log(desconto)

// Resultado esperado:
// [
//   { nome: 'Camiseta', precoComDesconto: 45 },
//   { nome: 'Calça', precoComDesconto: 72 },
//   { nome: 'Tênis', precoComDesconto: 108 }
// ]