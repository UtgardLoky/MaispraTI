// 2. Verificando Propriedades 
// O Objetivo: Crie um objeto livro com propriedades titulo, autor, anoPublicacao e genero. Verifique se a propriedade editora existe no objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

// Criação do objeto livro
let livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
    genero: "Fantasia"
};

// Verificação se a propriedade 'editora' existe usando for...in
let temEditora = false;

for (let propriedade in livro) {
    if (propriedade === "editora") {
        temEditora = true;
        break; // Se encontrado, saímos do loop
    }
}

// Se a propriedade 'editora' não existir, adicionamos ao objeto
if (!temEditora) {
    livro.editora = "Allen & Unwin";
}

// Exibir o objeto livro atualizado no console
console.log(livro);
