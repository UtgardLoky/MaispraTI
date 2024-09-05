// 9. Contabilizando Elementos com uma Condição
// O Objetivo: Crie um array de objetos clientes, cada um com propriedades nome, idade, e cidade. Use forEach para contar quantos clientes têm mais de 30 anos.

// Criação do array de objetos clientes
let clientes = [
    { nome: "João", idade: 28, cidade: "São Paulo" },
    { nome: "Maria", idade: 35, cidade: "Rio de Janeiro" },
    { nome: "Carlos", idade: 40, cidade: "Belo Horizonte" },
    { nome: "Ana", idade: 25, cidade: "Curitiba" }
];

// Variável para contar quantos clientes têm mais de 30 anos
let clientesMaisDe30 = 0;

// Usar forEach para contar os clientes com idade maior que 30
clientes.forEach(cliente => {
    if (cliente.idade > 30) {
        clientesMaisDe30++;
    }
});

// Exibir o total de clientes com mais de 30 anos
console.log(`Total de clientes com mais de 30 anos: ${clientesMaisDe30}`);
