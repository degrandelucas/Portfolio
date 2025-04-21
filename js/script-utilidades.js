// Adiciona o ano atual de forma automatica no copyright
export function atualizarAnoCopyright(idAnoCopyright) {
    const anoAtual = new Date().getFullYear();
    const anoCopyright = document.getElementById(idAnoCopyright);
    anoCopyright.textContent = anoAtual;
}