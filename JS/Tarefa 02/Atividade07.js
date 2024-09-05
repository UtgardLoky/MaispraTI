// 7. Modificando Objetos em um Array
// O Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome, preco, e desconto. Use forEach para aplicar um desconto de 10% em todos os produtos e exibir o novo preço.

// Criação do array de objetos produtos
let produtos = [
    { nome: "Notebook", preco: 3000, desconto: 0.10 },
    { nome: "Smartphone", preco: 1500, desconto: 0.10 },
    { nome: "Tablet", preco: 1200, desconto: 0.10 },
    { nome: "Monitor", preco: 800, desconto: 0.10 }
];

// Usar forEach para aplicar um desconto de 10% no preço de todos os produtos
produtos.forEach(produto => {
    let descontoAplicado = produto.preco * produto.desconto;  // Calcula o valor do desconto
    let novoPreco = produto.preco - descontoAplicado;  // Aplica o desconto
    console.log(`Produto: ${produto.nome}, Novo Preço: R$ ${novoPreco.toFixed(2)}`);
});
