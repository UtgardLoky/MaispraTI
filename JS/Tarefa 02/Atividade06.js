// 6. Filtrando Arrays de Objetos
// O Objetivo: Crie um array de objetos funcionarios, onde cada objeto contém informações como nome, cargo, e salario. Use for of para filtrar e exibir apenas os funcionários cujo alário seja maior que um valor específico.

// Criação do array de objetos funcionarios
let funcionarios = [
    { nome: "Carlos", cargo: "Analista", salario: 3500 },
    { nome: "Ana", cargo: "Gerente", salario: 7000 },
    { nome: "Pedro", cargo: "Desenvolvedor", salario: 4500 },
    { nome: "Mariana", cargo: "Designer", salario: 3200 }
];

// Definindo o valor do salário mínimo para o filtro
let salarioMinimo = 4000;

// Usar for...of para filtrar e exibir funcionários com salário maior que o valor específico
for (let funcionario of funcionarios) {
    if (funcionario.salario > salarioMinimo) {
        console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: R$ ${funcionario.salario}`);
    }
}
