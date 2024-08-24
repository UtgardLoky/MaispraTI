// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')();

let operacao = parseInt(prompt('Escolha a operação: \n1. Somar\n2. Subtrair\n3. Multiplicar\n4. Dividir\n'), 10);
let Text;

// Determina a operação com base na escolha do usuário
switch (operacao) {
    case 1:
        Text = 'Somar';
        break;
    case 2:
        Text = 'Subtrair';
        break;
    case 3:
        Text = 'Multiplicar';
        break;
    case 4:
        Text = 'Dividir';
        break;
    default:
        Text = 'Operação inválida';
        console.log(Text);
        console.log('Por favor, escolha uma opção válida (1 a 4).');
        break;
}

console.log('Você escolheu:', Text);

// Exemplo de como você poderia continuar dependendo da operação escolhida
if (operacao >= 1 && operacao <= 4) {
    let num1 = parseFloat(prompt('Digite o primeiro número: '));
    let num2 = parseFloat(prompt('Digite o segundo número: '));
    let resultado;

    switch (operacao) {
        case 1:
            resultado = num1 + num2;
            console.log(`Resultado da soma: ${resultado}`);
            break;
        case 2:
            resultado = num1 - num2;
            console.log(`Resultado da subtração: ${resultado}`);
            break;
        case 3:
            resultado = num1 * num2;
            console.log(`Resultado da multiplicação: ${resultado}`);
            break;
        case 4:
            if (num2 === 0) {
                console.log('Erro: Divisão por zero não permitida.');
            } else {
                resultado = num1 / num2;
                console.log(`Resultado da divisão: ${resultado}`);
            }
            break;
    }
}
