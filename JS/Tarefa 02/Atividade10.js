// 10. Criando Relatórios com Objetos e Arrays
// O Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto, quantidade e valor. Use forEach para calcular o valor total de vendas de todos os produtos.

// Criação do array de objetos vendas
let vendas = [
    { produto: "Notebook", quantidade: 10, valor: 3000 },
    { produto: "Smartphone", quantidade: 5, valor: 1500 },
    { produto: "Tablet", quantidade: 8, valor: 1200 },
    { produto: "Monitor", quantidade: 7, valor: 800 }
];

// Variável para armazenar o valor total das vendas
let valorTotalVendas = 0;

// Usar forEach para calcular o valor total das vendas
vendas.forEach(venda => {
    valorTotalVendas += venda.quantidade * venda.valor;
});

// Exibir o valor total das vendas
console.log(`Valor total das vendas: R$ ${valorTotalVendas.toFixed(2)}`);
