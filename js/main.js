import {atualizarAnoCopyright} from './script-utilidades.js';
import './script-materialize.js';
import {atualizaWhatsappLink} from './script-whatsapp.js';
import './script-renderizar-contatos.js';

document.addEventListener('DOMContentLoaded', function() {
    atualizarAnoCopyright("ano-copyright");
    atualizaWhatsappLink();
    renderizarContatos();
});

// Chama a função para atualizar o link do WhatsApp quando a janela é redimensionada
window.onresize = atualizaWhatsappLink;