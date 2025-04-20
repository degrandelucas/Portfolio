import { linkCurriculo } from './links-contatos.js';

// Adiciona o ano atual de forma automatica no copyright
export function atualizarAnoCopyright(idAnoCopyright) {
    const anoAtual = new Date().getFullYear();
    const anoCopyright = document.getElementById(idAnoCopyright);
    anoCopyright.textContent = anoAtual;
}

// Atualiza o link do currículo no elemento com o id fornecido
export function atualizarLinkCurriculo(idCurriculo) {
    const linkCV = document.getElementById(idCurriculo);
    linkCV.href = linkCurriculo;
}