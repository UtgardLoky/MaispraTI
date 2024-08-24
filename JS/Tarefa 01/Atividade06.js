//6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.

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
console.log('Vamos montar um tringulo ?')
let cateto1 = solicitarNumero('informe o tamanho do primeiro cateto: ')
let cateto2 = solicitarNumero('informe o tamanho do segundo cateto: ')
let hipotenusa = solicitarNumero('informe o tamanho da hipotenusa: ')

//Verifica tipo de triangulo
if (cateto1 !== cateto2 && cateto1 !== hipotenusa && cateto2 !== hipotenusa) {
    Text = 'Triângulo escaleno'
} else if (cateto1===cateto2 && cateto1===hipotenusa && cateto2===hipotenusa) {
    Text = 'Triângulo equilátero'
} else {
    Text = 'Triângulo isósceles'
}

console.log(Text) 
