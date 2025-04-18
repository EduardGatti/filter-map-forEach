// filter
// 🟢 Fácil:
// Objetivo: Dado um array de idades, filtre e retorne apenas as idades maiores ou iguais a 18.
const idades = [12, 18, 21, 14, 30];

const filterIdade = idades.filter(idade => idade >= 18)
console.log(filterIdade);

// Resultado esperado: [18, 21, 30]

// 🟡 Médio:
// Objetivo: Filtrar apenas os nomes que começam com a letra "A".
const names = ['Ana', 'Bruno', 'Amanda', 'Carlos'];

const namesFilter = names.filter(name => name.startsWith("A"))

console.log(namesFilter)
// Resultado esperado: ['Ana', 'Amanda']

// 🔴 Difícil:
// Objetivo: Dado um array de produtos, filtre aqueles com preço acima de R$100 e que estejam disponíveis (disponivel: true).
const mercadorias = [
  { nome: 'Notebook', preco: 3000, disponivel: true },
  { nome: 'Mouse', preco: 50, disponivel: true },
  { nome: 'Teclado', preco: 150, disponivel: false },
  { nome: 'Monitor', preco: 500, disponivel: true }
];

const mercadoriasFilter = mercadorias.filter(produto => {
    return produto.preco > 100 && produto.disponivel === true
})
console.log(mercadoriasFilter)

// Resultado esperado:
// [
//   { nome: 'Notebook', preco: 3000, disponivel: true },
//   { nome: 'Monitor', preco: 500, disponivel: true }
// ]