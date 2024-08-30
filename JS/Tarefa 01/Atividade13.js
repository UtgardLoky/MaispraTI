// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

const prompt = require ('prompt-sync') ()

// Função para solicitar um número válido
function solicitarNumero(mensagem) {
    let valor = prompt(mensagem);
    while (isNaN(valor) || valor.trim() === '') {
        valor = prompt('Por favor, digite um número válido: ');
    }
    return parseFloat(valor); // Converte o valor para número decimal
}

let soma = 0;
let count = 0;

while (true) {
    // Solicita ao usuário que insira um número decimal
    let numero = solicitarNumero("Digite um número (ou 0 para terminar):");

    // Verifica se o número é 0 para terminar o loop
    if (numero === 0) {
        break;
    }

    // Adiciona o número à soma total e incrementa o contador
    soma += numero;
    count++;
}

// Calcula a média aritmética se algum número foi inserido
let media = count > 0 ? soma / count : 0;


console.log(`A média aritmética dos números é: ${media}`);

