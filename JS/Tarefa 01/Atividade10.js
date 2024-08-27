// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require ('prompt-sync') ()

//solicita numero
let numero = parseInt(prompt('Digite um numero: '))

// Verifica se é um numero
while (isNaN(numero)) {
    numero = parseInt(prompt('Por favor, digite um número: '));
}

//imprime o numero digitado 
for (i=10; i>0; i--) {
    console.log(numero)
}
