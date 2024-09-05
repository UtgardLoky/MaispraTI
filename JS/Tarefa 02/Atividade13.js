// 13. Implementando um Carrinho de Compras
// O Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um array de objetos. Cada objeto dentro de itens deve representar um produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach para calcular o valor total do carrinho.

// Criação do objeto carrinho
let carrinho = {
    itens: [
        { nome: "Notebook", quantidade: 1, precoUnitario: 2500 },
        { nome: "Smartphone", quantidade: 2, precoUnitario: 1500 },
        { nome: "Tablet", quantidade: 1, precoUnitario: 800 },
        { nome: "Monitor", quantidade: 3, precoUnitario: 600 }
    ]
};

// Variável para armazenar o valor total do carrinho
let valorTotal = 0;

// Usar forEach para calcular o valor total do carrinho
carrinho.itens.forEach(item => {
    valorTotal += item.quantidade * item.precoUnitario;
});

// Exibir o valor total do carrinho
console.log(`Valor total do carrinho: R$ ${valorTotal.toFixed(2)}`);
