// script-materialize.js para o framwork Materialize CSS

// Inicialize os componentes do Materialize quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    
    // Sidenav
    var sidenavElems = document.querySelectorAll('.sidenav');
    var sidenavInstances = M.Sidenav.init(sidenavElems);

    // Modais
    var modalElems = document.querySelectorAll('.modal');
    var modalInstances = M.Modal.init(modalElems);

    // Selects
    var selectElems = document.querySelectorAll('select');
    var selectInstances = M.FormSelect.init(selectElems);

    // Tooltips com opcoes
    var options = {
        exitDelay: 250, // Atraso antes do tooltip desaparecer
        position: 'bottom', // Posição do tooltip
    };
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems, options);

    // Adicona a rolagem suave para ancoras (tag a) e id #mobile
    document.querySelectorAll('#mobile a').forEach(anchor => {
        anchor.addEventListener('click', scrollToAnchor);
    
        function scrollToAnchor(e) {
            e.preventDefault(); // Previne o comportamento padrão de rolagem
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });

});