import { linksContatos } from './links-contatos.js';
import { linkCurriculo } from './links-contatos.js';

export function atualizarLinkCurriculo(idCurriculo) {
    const linkCV = document.getElementById(idCurriculo);
    linkCV.href = linkCurriculo;
}

export function renderizarLinksParaContato() {
    const linksContatoContainer = document.getElementById('links-container');

    linksContatos.forEach(link => {
        const linkElementLi = document.createElement('li');
        linkElementLi.classList.add('row');

        const linkAncora = document.createElement('a');
        linkAncora.classList.add('grey-text', 'text-lighten-3');
        linkAncora.href = link.link;
        linkAncora.target = '_blank';

        const iconImage = document.createElement('img');
        iconImage.classList.add('image-footer');
        iconImage.src = link.icone;
        iconImage.alt = link.alt;

        linkAncora.appendChild(iconImage);
        linkAncora.appendChild(document.createTextNode(link.texto));
        linkElementLi.appendChild(linkAncora);
        linksContatoContainer.appendChild(linkElementLi);
    });
}