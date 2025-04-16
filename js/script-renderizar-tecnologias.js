import { tecnologias } from './tecnologias.js';

export function renderizarTecnologias() {
    const tecnologiasContainer = document.getElementById('tecnologias-container');

    tecnologias.forEach(tecnologia => {
        const divCol = document.createElement('div');
        divCol.classList.add('col', 's3');

        const imgTecnologia = document.createElement('img');
        imgTecnologia.src = tecnologia.icone;
        imgTecnologia.alt = tecnologia.alt;

        const legendTecnologia = document.createElement('legend');
        legendTecnologia.textContent = tecnologia.nome;

        divCol.appendChild(imgTecnologia);
        divCol.appendChild(legendTecnologia);
        tecnologiasContainer.appendChild(divCol);
    });
}