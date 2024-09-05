// 8. Criando Novos Arrays a Partir de Objetos
// O Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo, diretor, e anoLancamento. Use forEach para criar um novo array contendo apenas os títulos dos filmes.

// Criação do array de objetos filmes
let filmes = [
    { titulo: "O Poderoso Chefão", diretor: "Francis Ford Coppola", anoLancamento: 1972 },
    { titulo: "Clube da Luta", diretor: "David Fincher", anoLancamento: 1999 },
    { titulo: "Interestelar", diretor: "Christopher Nolan", anoLancamento: 2014 },
    { titulo: "Matrix", diretor: "Lana e Lilly Wachowski", anoLancamento: 1999 }
];

// Array para armazenar os títulos dos filmes
let titulos = [];

// Usar forEach para preencher o array de títulos dos filmes
filmes.forEach(filme => {
    titulos.push(filme.titulo);
});

// Exibir o array contendo apenas os títulos
console.log(titulos);
