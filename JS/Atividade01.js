//1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

const prompt = require ('prompt-sync') ()

let numero = prompt('Qual numero gostaria de verificar? ')

// Verifica se é um numero
while (isNaN(numero)) {
    numero = prompt('Por favor, digite um número: ');
}

// Verifica se numero é par ou impar 
if (numero%2 === 0) {
    console.log('Seu numero é PAR')
} else {
    console.log('Seu numero é IMPAR')
    }
