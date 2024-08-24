//3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require ('prompt-sync') ()

//solicita nota
let nota = prompt('Digite sua nota: ')

// Verifica se é um numero
while (isNaN(nota)) {
    nota = prompt('Por favor, digite um número: ');
}

// Verifica nota e exibe status 
if (nota < 4) {
    console.log('REPROVADO')
} else if (4 <= nota  && nota < 6) {
    console.log('RECUPERAÇÃO')
} else {
    console.log('APROVADO')
    }
