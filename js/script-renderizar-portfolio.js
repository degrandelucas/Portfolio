import { projetosPortfolio } from './projetos-portfolio.js';

export function renderizarPortfolio() {
    const portfolioContainer = document.getElementById('projetos-portfolio');
    portfolioContainer.innerHTML = ''; // Limpa o conteúdo existente

    projetosPortfolio.forEach(projeto => {
        const articleElement = document.createElement('article');
        articleElement.classList.add('row');

        const divCol = document.createElement('div');
        divCol.classList.add('col', 's12', 'm12', 'l12');

        const divCard = document.createElement('div');
        divCard.classList.add('card');

        const divCardImage = document.createElement('div');
        divCardImage.classList.add('card-image');

        const imgProjeto = document.createElement('img');
        imgProjeto.src = projeto.imagem;
        imgProjeto.alt = projeto.altImagem;
        imgProjeto.classList.add('responsive-img');

        divCardImage.appendChild(imgProjeto);

        const spanTitulo = document.createElement('span');
        spanTitulo.classList.add('left-align', 'card-title', '#00695c', 'teal', 'darken-3');
        spanTitulo.textContent = projeto.titulo;

        const divCardContentDescricao = document.createElement('div');
        divCardContentDescricao.classList.add('card-content', '#00695c', 'teal', 'darken-3');
        const descricao = document.createElement('p');
        descricao.textContent = projeto.descricao;
        divCardContentDescricao.appendChild(descricao);

        const divCardContentLinks = document.createElement('div');
        divCardContentLinks.classList.add('card-content', 'center-align');
        const divLinksInterno = document.createElement('div');

        const linkVerProjeto = document.createElement('a');
        linkVerProjeto.classList.add('waves-effect', '#0277bd', 'light-blue', 'darken-3', 'btn', 'hoverable');
        linkVerProjeto.href = projeto.linkVerProjeto;
        linkVerProjeto.target = '_blank';
        linkVerProjeto.textContent = 'Ver Projeto';

        const linkRepositorio = document.createElement('a');
        linkRepositorio.classList.add('waves-effect', '#212121', 'grey', 'darken-4', 'btn', 'hoverable');
        linkRepositorio.href = projeto.linkRepositorio;
        linkRepositorio.target = '_blank';
        linkRepositorio.innerHTML = '&#60; Repositório /&#62;';

        divLinksInterno.appendChild(linkVerProjeto);
        divLinksInterno.appendChild(linkRepositorio);
        divCardContentLinks.appendChild(divLinksInterno);

        divCard.appendChild(divCardImage);
        divCard.appendChild(spanTitulo);
        divCard.appendChild(divCardContentDescricao);
        divCard.appendChild(divCardContentLinks);

        divCol.appendChild(divCard);
        articleElement.appendChild(divCol);
        portfolioContainer.appendChild(articleElement);
    });
}