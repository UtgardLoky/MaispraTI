// 11. Agrupando Elementos com forEach
// O Objetivo: Crie um array de objetos pedidos, onde cada pedido tem cliente, produto, e quantidade. Use forEach para criar um objeto que agrupa a quantidade total de produtos por cliente.

// Criação do array de objetos pedidos
let pedidos = [
    { cliente: "Ana", produto: "Notebook", quantidade: 1 },
    { cliente: "Carlos", produto: "Smartphone", quantidade: 3 },
    { cliente: "Ana", produto: "Tablet", quantidade: 2 },
    { cliente: "Carlos", produto: "Notebook", quantidade: 1 },
    { cliente: "Mariana", produto: "Monitor", quantidade: 2 },
    { cliente: "Ana", produto: "Smartphone", quantidade: 1 }
];

// Objeto para armazenar a quantidade total de produtos por cliente
let totalPorCliente = {};

// Usar forEach para agrupar a quantidade total de produtos por cliente
pedidos.forEach(pedido => {
    // Se o cliente ainda não estiver no objeto, inicialize com 0
    if (!totalPorCliente[pedido.cliente]) {
        totalPorCliente[pedido.cliente] = 0;
    }
    // Adicionar a quantidade do pedido ao total do cliente
    totalPorCliente[pedido.cliente] += pedido.quantidade;
});

// Exibir o total de produtos por cliente
console.log(totalPorCliente);
