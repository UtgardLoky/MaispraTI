// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

const prompt = require ('prompt-sync') ()

//solicita numero de maças
let numeromacas = prompt('Quantas maças deseja comprar: ')

// Verifica se é um numero
while (isNaN(numeromacas)) {
    numeromacas = prompt('Por favor, digite um número: ');
}

// Verifica nota e exibe status 
if (numeromacas < 12) {
    console.log(`vc está comprando ${numeromacas} maçãs e o valor total fica em:`, numeromacas*0.30, 'reais' )
} else {
    console.log(`vc está comprando ${numeromacas} maçãs e o valor total fica em:`, numeromacas*0.25, 'reais' )
    }
