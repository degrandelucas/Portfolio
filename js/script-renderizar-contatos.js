import { linksContatos } from './links-contatos.js';

export function renderizarContatos() {
    const contatosContainer = document.getElementById('contatos-container');

    contatosData.forEach(contato => {
        const linkElement = document.createElement('li');
        linkElement.classList.add('row');

        const linkAncora = document.createElement('a');
        linkAncora.classList.add('grey-text', 'text-lighten-3');
        linkAncora.href = contato.link;
        linkAncora.target = '_blank';

        const iconImage = document.createElement('img');
        iconImage.classList.add('image-footer');
        iconImage.src = contato.icone;
        iconImage.alt = contato.alt;

        linkAncora.appendChild(iconImage);
        linkAncora.appendChild(document.createTextNode(contato.texto));

        linkElement.appendChild(linkAncora);
        contatosContainer.appendChild(linkElement);
    });
}