// 12. Atualizando um Array de Objetos
// O Objetivo: Crie um array de objetos estoque, onde cada objeto tem produto, quantidade e minimo. Use forEach para atualizar a quantidade dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

// Criação do array de objetos estoque
let estoque = [
    { produto: "Laptop", quantidade: 5, minimo: 10 },
    { produto: "Smartphone", quantidade: 15, minimo: 20 },
    { produto: "Tablet", quantidade: 8, minimo: 10 },
    { produto: "Monitor", quantidade: 12, minimo: 15 }
];

// Usar forEach para atualizar a quantidade dos produtos abaixo do mínimo
estoque.forEach(item => {
    if (item.quantidade < item.minimo) {
        item.quantidade *= 2; // Duplicar a quantidade
    }
});

// Exibir o array de estoque atualizado
console.log(estoque);
