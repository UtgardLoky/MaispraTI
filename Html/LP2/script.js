// Inicialização das animações usando AOS.js
AOS.init();

// Carregar serviços dinamicamente usando Fetch API
fetch('https://api.exemplo.com/servicos')
    .then(response => response.json())
    .then(data => {
        const servicosContainer = document.getElementById('servicos-container');
        data.forEach(servico => {
            const col = document.createElement('div');
            col.className = 'col-md-4 mb-4';
            col.innerHTML = `
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${servico.nome}</h5>
                        <p class="card-text">${servico.descricao}</p>
                    </div>
                </div>
            `;
            servicosContainer.appendChild(col);
        });
    })
    .catch(error => {
        console.error('Erro ao carregar os serviços:', error);
    });

// Validação do formulário de contato
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Formulário enviado com sucesso!');
});
