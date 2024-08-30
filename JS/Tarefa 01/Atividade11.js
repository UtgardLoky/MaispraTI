// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

const prompt = require ('prompt-sync') ()

// Função para solicitar um número válido
function solicitarNumero(mensagem) {
    let valor = prompt(mensagem);
    while (isNaN(valor) || valor.trim() === '') {
        valor = prompt('Por favor, digite um número válido: ');
    }
    return parseFloat(valor); // Converte o valor para número decimal
}

let soma = 0;

// Loop para solicitar 5 números ao usuário
for (let i = 1; i <= 5; i++) {
    let numero = solicitarNumero(`Digite o ${i}º número:`);
    soma += numero; // Adiciona o número à soma total
}

console.log(`A soma total dos números é: ${soma}`);
