// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

const prompt = require('prompt-sync')();

// Função para solicitar um número válido
function solicitarNumero(mensagem) {
    let valor = prompt(mensagem);
    while (isNaN(valor) || valor.trim() === '') {
        valor = prompt('Por favor, digite um número válido: ');
    }
    return parseFloat(valor); // Converte o valor para número decimal
}

// Solicita e valida a altura
let altura = solicitarNumero('Digite sua altura (em metros): ');

// Solicita e valida o peso
let peso = solicitarNumero('Digite seu peso (em kg): ');

console.log(`Altura: ${altura} metros`);
console.log(`Peso: ${peso} kg`);

//calcula imc
imc = peso / altura**2

//verifica faixa de peso
if (imc <= 18.5) {
    Text = 'BAIXO PESO'
} else if (imc < 25) {
    Text = 'PESO NORMAL'
} else if (imc < 30) {
    Text = 'SOBREPESO'
} else {
    Text = 'OBESIDADE'
}

console.log(Text, `\nseu imc é de: ${imc}`)
