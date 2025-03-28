// Inicialize os componentes do Materialize quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    
    // Inicializa o Sidenav
    var sidenavElems = document.querySelectorAll('.sidenav');
    var sidenavInstances = M.Sidenav.init(sidenavElems); // Removido 'options' se não estiver definido

    // Inicializa outros demais componentes do Materialize
    // Modais
    var modalElems = document.querySelectorAll('.modal');
    var modalInstances = M.Modal.init(modalElems);

    // Selects
    var selectElems = document.querySelectorAll('select');
    var selectInstances = M.FormSelect.init(selectElems);

    // Tooltips
    var options = {
        exitDelay: 250, // Atraso antes do tooltip desaparecer
        position: 'bottom', // Posição do tooltip
    };
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems, options);

    // Adicione inicializações para outros componentes que você estiver usando

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Atualiza dinamicamente o link do WhatsApp com base no tamanho da tela
/*
function atualizaWhatsappLink() {
    var whatsappLink = document.getElementById('whatsapp-link');
    var whatsappLinkIcone = document.getElementById('whatsapp-link-icone');

    // Verifica o tamanho da tela
    if (window.innerWidth > 760) {
        whatsappLink.href = "https://web.whatsapp.com/send?phone=553492517716"; 
        whatsappLinkIcone.href = "https://web.whatsapp.com/send?phone=553492517716";
    } else {
        whatsappLink.href = "whatsapp://send?phone=553492517716";
        whatsappLinkIcone.href = "whatsapp://send?phone=553492517716";  
    }
}

// Chama a função para atualizar o link do WhatsApp quando a página carrega e quando a janela é redimensionada
window.onload = atualizaWhatsappLink;
window.onresize = atualizaWhatsappLink;
*/