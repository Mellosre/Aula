document.addEventListener('DOMContentLoaded', () => {
    const containerPrincipal = document.querySelector('.container-principal');
    const btnAdicionar = document.querySelector('#btn-adicionar-cartao');

    if (containerPrincipal && btnAdicionar) {
        btnAdicionar.addEventListener('click', () => {
            // Cria o novo elemento <article>
            const novoCartao = document.createElement('article');

            // Adiciona a classe "cartao" para aplicar o estilo do CSS
            novoCartao.classList.add('cartao');

            // Define o conteúdo do novo cartão
            novoCartao.innerHTML = `
                <h2>Novo Artigo</h2>
                <p>Este é um novo artigo adicionado dinamicamente.</p>
            `;

            // Adiciona o novo cartão ao container
            containerPrincipal.appendChild(novoCartao);
        });
    }
});