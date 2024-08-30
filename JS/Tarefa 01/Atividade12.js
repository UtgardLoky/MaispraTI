// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

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
let numero = solicitarNumero("Digite um número para ver a tabuada:");

// Loop para gerar e exibir a tabuada de 1 a 10
for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}
