// Seleciona os botões
const btnCobb = document.getElementById('btnCobb');
const btnRoss = document.getElementById('btnRoss');
const btnHBB = document.getElementById('btnHBB');

// Seleciona as tabelas
const tabelaCobb = document.getElementById('cobb');
const tabelaRoss = document.getElementById('ross');
const tabelaHBB = document.getElementById('hbb');

// Seleciona os títulos das tabelas (opcional, para ocultar/exibir junto)
const nomeCobb = document.getElementById('nomeCobb');
const nomeRoss = document.getElementById('nomeRoss');
const nomeHBB = document.getElementById('nomeHBB');

// Função para ocultar todas as tabelas e títulos
function ocultarTodasAsTabelas() {
    tabelaCobb.classList.add('hidden');
    tabelaRoss.classList.add('hidden');
    tabelaHBB.classList.add('hidden');
    nomeCobb.classList.add('hidden');
    nomeRoss.classList.add('hidden');
    nomeHBB.classList.add('hidden');
}

// Adiciona event listeners para cada botão
btnCobb.addEventListener('click', function() {
    ocultarTodasAsTabelas(); // Oculta todas antes de mostrar a desejada
    tabelaCobb.classList.remove('hidden');
    nomeCobb.classList.remove('hidden');
});

btnRoss.addEventListener('click', function() {
    ocultarTodasAsTabelas(); // Oculta todas antes de mostrar a desejada
    tabelaRoss.classList.remove('hidden');
    nomeRoss.classList.remove('hidden');
});

btnHBB.addEventListener('click', function() {
    ocultarTodasAsTabelas(); // Oculta todas antes de mostrar a desejada
    tabelaHBB.classList.remove('hidden');
    nomeHBB.classList.remove('hidden');
});

// Opcional: Oculta todas as tabelas ao carregar a página
document.addEventListener('DOMContentLoaded', ocultarTodasAsTabelas);