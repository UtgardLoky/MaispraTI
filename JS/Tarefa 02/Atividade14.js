// 14. Manipulando Objetos Complexos
// O Objetivo: Crie um objeto empresa com uma propriedade departamentos, que é um array de objetos. Cada departamento tem um nome e uma lista de funcionarios. Use for in e for of ara iterar sobre os departamentos e seus funcionários, exibindo o nome de cada funcionário junto com o departamento ao qual pertence.

// Criação do objeto empresa
let empresa = {
    departamentos: [
        {
            nome: "Recursos Humanos",
            funcionarios: [
                { nome: "Ana", cargo: "Gerente de RH" },
                { nome: "Roberto", cargo: "Analista de RH" }
            ]
        },
        {
            nome: "Tecnologia",
            funcionarios: [
                { nome: "Carlos", cargo: "Desenvolvedor" },
                { nome: "Mariana", cargo: "Analista de Sistemas" }
            ]
        },
        {
            nome: "Marketing",
            funcionarios: [
                { nome: "Lucas", cargo: "Coordenador de Marketing" },
                { nome: "Sofia", cargo: "Assistente de Marketing" }
            ]
        }
    ]
};

// Iterar sobre os departamentos usando for...in
for (let i in empresa.departamentos) {
    let departamento = empresa.departamentos[i];
    
    // Iterar sobre os funcionários de cada departamento usando for...of
    for (let funcionario of departamento.funcionarios) {
        console.log(`Departamento: ${departamento.nome}, Funcionário: ${funcionario.nome}`);
    }
}
