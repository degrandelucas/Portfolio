import {atualizarAnoCopyright} from './script-utilidades.js';
import './script-materialize.js';
import {atualizaWhatsappLink} from './script-whatsapp.js';
import {renderizarLinksParaContato} from './script-renderizar-links-contatos.js';
import {renderizarPortfolio} from './script-renderizar-portfolio.js';



document.addEventListener('DOMContentLoaded', function() {
    atualizarAnoCopyright("ano-copyright");
    renderizarLinksParaContato();
    renderizarPortfolio();
    atualizaWhatsappLink();
});

// Chama a função para atualizar o link do WhatsApp quando a janela é redimensionada
window.onresize = atualizaWhatsappLink;