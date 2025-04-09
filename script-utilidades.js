function atualizarAnoCopyright(idAnoCopyright) {
    const anoAtual = new Date().getFullYear();
    const anoCopyright = document.getElementById(idAnoCopyright);
    anoCopyright.textContent = anoAtual;
}

atualizarAnoCopyright("ano-copyright");
