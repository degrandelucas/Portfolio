// Atualiza dinamicamente o link do WhatsApp com base no tamanho da tela

export function atualizaWhatsappLink() {
    var whatsappLink = document.getElementById('whatsapp-link');

    // Verifica o tamanho da tela
    if (window.innerWidth > 960) {
        whatsappLink.href = "https://web.whatsapp.com/send?phone=553492517716"; 
    } else {
        whatsappLink.href = "https://wa.me/553492517716";
    }
}