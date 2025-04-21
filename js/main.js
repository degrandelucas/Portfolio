import {atualizarAnoCopyright} from './script-utilidades.js';
import { atualizarLinkCurriculo } from './script-utilidades.js';
import './script-materialize.js';
import {atualizaWhatsappLink} from './script-whatsapp.js';
import {renderizarLinksParaContato} from './script-renderizar-links-contatos.js';
import {renderizarPortfolio} from './script-renderizar-portfolio.js';
import { renderizarTecnologias } from './script-renderizar-tecnologias.js';

document.addEventListener('DOMContentLoaded', function() {
    atualizarAnoCopyright("ano-copyright");
    renderizarTecnologias();
    renderizarPortfolio();
    renderizarLinksParaContato();
    atualizaWhatsappLink();
});

// Chama a função para atualizar o link do WhatsApp quando a janela é redimensionada
window.onresize = atualizaWhatsappLink;