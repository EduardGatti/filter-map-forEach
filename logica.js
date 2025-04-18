
// 🔁 logica– Transformação de dados
// 🧩 Exercício: Relatório de Funcionários Ativos
// 💼 Cenário:
// Você recebeu um array com dados de funcionários de uma empresa. Cada funcionário tem:
// nome
// idade
// salário
// ativo (boolean)
// Seu objetivo é gerar um relatório final com os nomes dos funcionários ativos, com salários ajustados com bônus de 10%, e exibir uma mensagem personalizada no console para cada um.
// 🧪 Requisitos:
// Filtrar apenas os funcionários ativos
// Mapear os funcionários para aplicar um bônus de 10% no salário
// ForEach para exibir no console uma mensagem do tipo:
// Parabéns, João! Seu novo salário com bônus é R$5500.00
// ​
// 📥 Dados de entrada:
const funcionarios = [
  { nome: 'João', idade: 30, salario: 5000, ativo: true },
  { nome: 'Ana', idade: 22, salario: 3200, ativo: false },
  { nome: 'Carlos', idade: 28, salario: 4000, ativo: true },
  { nome: 'Marina', idade: 35, salario: 6000, ativo: false },
  { nome: 'Fernanda', idade: 25, salario: 3800, ativo: true }
];

const funcionariosAtivos = funcionarios.filter(funcionario => funcionario.ativo === true)

const funcionarioBonus = funcionariosAtivos.map(funcionario => {
    let novoSalario = funcionario.salario * 1.10
    return {nome: funcionario.nome, salario: novoSalario}
})

funcionarioBonus.forEach(funcionario => {
    console.log(`Parabéns, ${funcionario.nome}! Seu novo salário com bônus é R$ ${funcionario.salario.toFixed(2)}`)
})
// ​
// ✅ Resultado Esperado (no console):
// Parabéns, João! Seu novo salário com bônus é R$5500.00
// Parabéns, Carlos! Seu novo salário com bônus é R$4400.00
// Parabéns, Fernanda! Seu novo salário com bônus é R$4180.00

// 🛒 Cenário:
// Você tem uma lista de produtos de um mercado. Cada produto tem:
// nome
// categoria
// preco
// estoque (quantidade em estoque)
// 🧪 Objetivo:
// Filtrar os produtos com estoque menor que 10 unidades
// Mapear para criar um novo array com os nomes e preços com 15% de desconto
// forEach para exibir um alerta no console:
// fazer todos os metodos encadeados.
// 📥 Dados:


const produtos = [
    { nome: 'Arroz', categoria: 'Alimento', preco: 25, estoque: 5 },
    { nome: 'Feijão', categoria: 'Alimento', preco: 10, estoque: 15 },
    { nome: 'Sabonete', categoria: 'Higiene', preco: 3, estoque: 8 },
    { nome: 'Detergente', categoria: 'Limpeza', preco: 4, estoque: 3 },
    { nome: 'Papel Higiênico', categoria: 'Higiene', preco: 12, estoque: 20 }
  ];
  
  produtos
    .filter(produto => produto.estoque < 10)
    .map(produto => ({
      nome: produto.nome,
      preco: (produto.preco * 0.85).toFixed(2)
    }))
    .forEach(produto =>
      console.log(`Estoque baixo: Produto ${produto.nome} - Novo Preço: R$${produto.preco}`)
    );
  
// 🔚 Resultado esperado (exemplo):
// Estoque baixo: Produto Arroz - Novo Preço: R$21.25
// Estoque baixo: Produto Sabonete - Novo Preço: R$2.55
// Estoque baixo: Produto Detergente - Novo Preço: R$3.40
