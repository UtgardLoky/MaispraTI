// 4. Iterando Sobre Arrays de Objetos
// O Objetivo: Crie um array de objetos pessoas, onde cada objeto representa uma pessoa com nome, idade, e cidade. Use for of para exibir as informações de cada pessoa no console.

// Criação do array de objetos pessoas
let pessoas = [
    { nome: "João", idade: 25, cidade: "São Paulo" },
    { nome: "Maria", idade: 30, cidade: "Rio de Janeiro" },
    { nome: "Carlos", idade: 22, cidade: "Belo Horizonte" },
    { nome: "Ana", idade: 28, cidade: "Curitiba" }
];

// Usar for...of para exibir as informações de cada pessoa
for (let pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
}
