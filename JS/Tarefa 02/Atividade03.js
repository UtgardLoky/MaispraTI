// 3. Filtrando Propriedades de Objetos
// O Objetivo: Dado um objeto produto com várias propriedades, crie uma função que retorna um novo objeto contendo apenas as propriedades cujo valor seja maior que um valor específico. Use for in para filtrar as propriedades.

// Objeto produto com várias propriedades
let produto = {
    nome: "Notebook",
    preco: 3000,
    estoque: 50,
    peso: 2.5,      // Em kg
    desconto: 10    // Em porcentagem
};

// Função que filtra as propriedades do objeto com valores maiores que o valor especificado
function filtrarPropriedades(obj, valor) {
    let novoObjeto = {};  // Objeto para armazenar as propriedades filtradas

    // Usar for...in para iterar sobre as propriedades do objeto
    for (let propriedade in obj) {
        if (obj[propriedade] > valor) {
            novoObjeto[propriedade] = obj[propriedade];  // Adicionar propriedade ao novo objeto
        }
    }

    return novoObjeto;
}

// Testando a função com o valor 20
let resultado = filtrarPropriedades(produto, 20);
console.log(resultado);
