// Atualiza dinamicamente o link do WhatsApp com base no tamanho da tela

function atualizaWhatsappLink() {
    var whatsappLink = document.getElementById('whatsapp-link');

    // Verifica o tamanho da tela
    if (window.innerWidth > 960) {
        whatsappLink.href = "https://web.whatsapp.com/send?phone=553492517716"; 
    } else {
        whatsappLink.href = "whatsapp://send?phone=+34992517716";
    }
}

// Chama a função para atualizar o link do WhatsApp quando a página carrega e quando a janela é redimensionada
window.onload = atualizaWhatsappLink;
window.onresize = atualizaWhatsappLink;
``