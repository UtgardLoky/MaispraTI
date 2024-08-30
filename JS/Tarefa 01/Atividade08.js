// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

const prompt = require ('prompt-sync') ()

// Função para solicitar um número válido
function solicitarNumero(mensagem) {
    let valor = prompt(mensagem);
    while (isNaN(valor) || valor.trim() === '') {
        valor = prompt('Por favor, digite um número válido: ');
    }
    return parseFloat(valor); // Converte o valor para número decimal
}

//solicita numero
let numero1 = solicitarNumero('informe o primeiro numero: ')
let numero2 = solicitarNumero('informe o segundo numero: ')

//Verifica numeros iguais
while (numero1===numero2) {
    numero2 = solicitarNumero('Favor informar um numero diferente do primeiro:')
}

//Coloca em ordem crescente 
if (numero1 > numero2) {
    console.log(numero2, numero1)
} else {
    console.log(numero1, numero2)
}
