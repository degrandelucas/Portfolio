document.addEventListener("DOMContentLoaded", function() {
    const iconeMenu = document.querySelector('.icone-menu');
    const iconeFechar = document.querySelector('.icone-fechar');
    const nav = document.querySelector('nav');
  
    // Adiciona manipuladores de eventos de clique aos ícones
    iconeMenu.addEventListener('click', function() {
      nav.style.display = 'block';
      iconeMenu.style.display = 'none';
      iconeFechar.style.display = 'block';
    });
  
    iconeFechar.addEventListener('click', function() {
      nav.style.display = 'none';
      iconeMenu.style.display = 'block';
      iconeFechar.style.display = 'none';
    });
  
    // Detecta cliques fora dos elementos relevantes para reverter as alterações
    document.addEventListener('click', function(event) {
      if (!event.target.closest('.cabecalho')) {
        nav.style.display = 'none';
        iconeMenu.style.display = 'block';
        iconeFechar.style.display = 'none';
      }
    });
  });