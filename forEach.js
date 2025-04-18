

//for each

// 🟢 Fácil:
// Objetivo: Dado um array de frutas, exiba cada fruta no console com a mensagem "Fruta: <nome>".
const frutas = ['banana', 'maçã', 'uva'];
frutas.forEach(fruta => {
   
    console.log(`Fruta: ${fruta}`)
    
})
// Saída no console:
// Fruta: banana
// Fruta: maçã
// Fruta: uva

// 🟡 Médio:

// **Objetivo:** Some todos os números de um array e mostre o total no final.

const numbers = [10, 20, 30];
let soma = 0;

numbers.forEach(number => {

  soma += number

})

console.log(`Total: ${soma}`)
// Resultado esperado no console:
// Total: 60

// 🔴 Difícil:
// Objetivo: Dado um array de objetos representando vendas, exiba uma mensagem de agradecimento personalizada para cada cliente que gastou mais de R$100.
const vendas = [
  { cliente: 'João', valor: 80 },
  { cliente: 'Maria', valor: 150 },
  { cliente: 'Pedro', valor: 120 }
];
const clientesGastosAltos = vendas.filter(venda => venda.valor > 100); 
clientesGastosAltos.forEach(venda => {
    console.log(`Obrigado pela compra, ${venda.cliente}! Você gastou R$ ${venda.valor}`);
}) 
// Saída esperada:
// Obrigado pela compra, Maria! Você gastou R$150.
// Obrigado pela compra, Pedro! Você gastou R$120.

