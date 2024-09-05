// 15. Filtrando e Somando Valores
// O Objetivo: Crie um array de objetos transacoes, onde cada transação tem tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final, somando as entradas e subtraindo as saídas.

// Criação do array de objetos transacoes
let transacoes = [
    { tipo: "entrada", valor: 1000 },
    { tipo: "saida", valor: 200 },
    { tipo: "entrada", valor: 500 },
    { tipo: "saida", valor: 150 },
    { tipo: "entrada", valor: 300 }
];

// Variável para armazenar o saldo final
let saldoFinal = 0;

// Usar forEach para calcular o saldo final
transacoes.forEach(transacao => {
    if (transacao.tipo === "entrada") {
        saldoFinal += transacao.valor; // Adicionar entradas
    } else if (transacao.tipo === "saida") {
        saldoFinal -= transacao.valor; // Subtrair saídas
    }
});

// Exibir o saldo final
console.log(`Saldo final: R$ ${saldoFinal.toFixed(2)}`);
