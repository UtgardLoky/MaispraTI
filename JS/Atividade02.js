// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.

const prompt = require ('prompt-sync') ()

let idade = prompt('Qual a sua idade? ')

// Verifica se é um numero
while (isNaN(idade)) {
    idade = prompt('Por favor, digite sua idade: ');
}

// Classifica de acordo com idade
if (idade >= 0 && idade < 12) {
    console.log('Classificação: Criança');
} else if (idade >= 12 && idade < 18) {
    console.log('Classificação: Adolescente');
} else if (idade >= 18 && idade < 60) {
    console.log('Classificação: Adulto');
} else {
    console.log('Classificação: Idoso');
}
