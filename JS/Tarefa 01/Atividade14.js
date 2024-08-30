// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

const prompt = require ('prompt-sync') ()

// Função para solicitar um número válido
function solicitarNumero(mensagem) {
    let valor = prompt(mensagem);
    while (isNaN(valor) || valor.trim() === '') {
        valor = prompt('Por favor, digite um número válido: ');
    }
    return parseFloat(valor); // Converte o valor para número decimal
}

// Solicita ao usuário que insira um número
let numero = solicitarNumero("Digite um número para calcular o fatorial:");

// Inicializa a variável fatorial com 1
let fatorial = 1;
let i = 1;

// Loop while para calcular o fatorial
while (i <= numero) {
    fatorial *= i; // Multiplica fatorial pelo valor atual de i
    i++;
}

console.log(`O fatorial de ${numero} é: ${fatorial}`);
