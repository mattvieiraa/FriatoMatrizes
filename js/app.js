// Seleciona as linagens
const linhagem = document.getElementById('linhagemGranja');

function mostrarLinagem() {
    let idade = document.getElementById('idade').value;
    let racaoRecomendada = document.getElementById('resultadoIdade');
    if (linhagem.value === 'linhagemCobb'){
        if (idade == 0 || idade == "") {
            racaoRecomendada.innerHTML = `<p id="resultadoIdade">Por favor, insira uma idade válida.</p>`;
        } else if (idade == 1) {
            racaoRecomendada.innerHTML = `<p id="resultadoIdade">Ração recomendada:<br> <strong>MATRIZ PRE INICIAL – COBB ROSS HBB</strong></p>`;
        } else if (idade >= 2 && idade <= 4) {
            racaoRecomendada.innerHTML = `<p id="resultadoIdade">Ração recomendada:<br> <strong>MATRIZ INICIAL – COBB</strong></p>`;
        } else if (idade >= 5 && idade <= 18) {
            racaoRecomendada.innerHTML = `<p id="resultadoIdade">Ração recomendada:<br> <strong>MATRIZ CRESCIMENTO - COBB</strong></p>`;
        } else if (idade >= 19 && idade <= 24) {
            racaoRecomendada.innerHTML = `<p id="resultadoIdade">Ração fêmeas recomendada:<br> <strong>MATRIZ PRÉ POSTURA – COBB ROSS HBB</strong> <br>Ração machos recomendada:<br> <strong>MATRIZ CRESCIMENTO – COBB</strong></p>`;
        } else if (idade >= 25 && idade <= 27) {
            racaoRecomendada.innerHTML = `<p id="resultadoIdade">Ração fêmeas recomendada:<br> <strong>MATRIZ POSTURA 1 – COBB</strong> <br>Ração machos recomendada:<br> <strong>MATRIZ CRESCIMENTO – COBB</strong></p>`;
        } else if (idade >= 28 && idade <= 38) {
            racaoRecomendada.innerHTML = `<p id="resultadoIdade">Ração fêmeas recomendada:<br> <strong>MATRIZ POSTURA 1 – COBB</strong> <br>Ração machos recomendada:<br> <strong>RAÇÃO DE MACHO - COBB</strong></p>`;
        } else if (idade >= 39 && idade <= 50) {
            racaoRecomendada.innerHTML = `<p id="resultadoIdade">Ração fêmeas recomendada:<br> <strong>MATRIZ POSTURA 2 – COBB</strong> <br>Ração machos recomendada:<br> <strong>RAÇÃO DE MACHO - COBB</strong></p>`;
        } else {
            racaoRecomendada.innerHTML = `<p id="resultadoIdade">Ração fêmeas recomendada:<br> <strong>MATRIZ POSTURA 3 – COBB</strong> <br>Ração machos recomendada:<br> <strong>RAÇÃO DE MACHO - COBB</strong></p>`;
        }
    } else if (linhagem.value === 'linhagemRoss'){
        if (idade == 0 || idade == "") {
            racaoRecomendada.innerHTML = `<p id="resultadoIdade">Por favor, insira uma idade válida.</p>`;
        } else if (idade == 1) {
            racaoRecomendada.innerHTML = `<p id="resultadoIdade">Ração recomendada:<br> <strong>MATRIZ PRE INICIAL – COBB ROSS HBB</strong></p>`;
        } else if (idade >= 2 && idade <= 6) {
            racaoRecomendada.innerHTML = `<p id="resultadoIdade">Ração recomendada:<br> <strong>MATRIZ INICIAL – ROSS HBB</strong></p>`;
        } else if (idade >= 7 && idade <= 16) {
            racaoRecomendada.innerHTML = `<p id="resultadoIdade">Ração fêmeas recomendada:<strong>MATRIZ CRESCIMENTO – COBB</strong></p>`;
        } else if (idade >= 17 && idade <= 23) {
            racaoRecomendada.innerHTML = `<p id="resultadoIdade">Ração fêmeas recomendada:<br> <strong>MATRIZ PRÉ POSTURA – COBB ROSS HBB</strong> <br>Ração machos recomendada:<br> <strong>MATRIZ CRESCIMENTO – COBB</strong></p>`;            
        } else if (idade >= 24 && idade <= 27) {
            racaoRecomendada.innerHTML = `<p id="resultadoIdade">Ração fêmeas recomendada:<br> <strong>MATRIZ POSTURA 1 – ROSS HBB</strong> <br>Ração machos recomendada:<br> <strong>MATRIZ CRESCIMENTO – COBB</strong></p>`;
        } else if (idade >= 28 && idade <= 34) {
            racaoRecomendada.innerHTML = `<p id="resultadoIdade">Ração fêmeas recomendada:<br> <strong>MATRIZ POSTURA 1 – ROSS HBB</strong> <br>Ração machos recomendada:<br> <strong>RAÇÃO DE MACHO – ROSS</strong></p>`;
        } else if (idade >= 35 && idade <= 49) {
            racaoRecomendada.innerHTML = `<p id="resultadoIdade">Ração fêmeas recomendada:<br> <strong>MATRIZ POSTURA 2 – ROSS HBB</strong> <br>Ração machos recomendada:<br> <strong>RAÇÃO DE MACHO – ROSS</strong></p>`;
        } else  {
            racaoRecomendada.innerHTML = `<p id="resultadoIdade">Ração fêmeas recomendada:<br> <strong>MATRIZ POSTURA 3 – ROSS</strong> <br>Ração machos recomendada:<br> <strong>RAÇÃO DE MACHO – ROSS</strong></p>`;
        }
    } else {
        if (idade == 0 || idade == "") {
            racaoRecomendada.innerHTML = `<p id="resultadoIdade">Por favor, insira uma idade válida.</p>`;
        } else if (idade == 1) {
            racaoRecomendada.innerHTML = `<p id="resultadoIdade">Ração recomendada:<br> <strong>MATRIZ PRE INICIAL – COBB ROSS HBB</strong></p>`;
        } else if (idade >= 2 && idade <= 6) {
            racaoRecomendada.innerHTML = `<p id="resultadoIdade">Ração recomendada:<br> <strong>MATRIZ INICIAL – ROSS HBB</strong></p>`;
        } else if (idade >= 7 && idade <= 16) {
            racaoRecomendada.innerHTML = `<p id="resultadoIdade">Ração fêmeas recomendada:<strong>MATRIZ CRESCIMENTO – COBB</strong></p>`;
        } else if (idade >= 17 && idade <= 23) {
            racaoRecomendada.innerHTML = `<p id="resultadoIdade">Ração fêmeas recomendada:<br> <strong>MATRIZ PRÉ POSTURA – COBB ROSS HBB</strong> <br>Ração machos recomendada:<br> <strong>MATRIZ CRESCIMENTO – COBB</strong></p>`;            
        } else if (idade >= 24 && idade <= 28) {
            racaoRecomendada.innerHTML = `<p id="resultadoIdade">Ração fêmeas recomendada:<br> <strong>MATRIZ POSTURA 1 – ROSS HBB</strong> <br>Ração machos recomendada:<br> <strong>MATRIZ CRESCIMENTO – COBB</strong></p>`;
        } else if (idade >= 29 && idade <= 44) {
            racaoRecomendada.innerHTML = `<p id="resultadoIdade">Ração fêmeas recomendada:<br> <strong>MATRIZ POSTURA 1 – ROSS HBB</strong> <br>Ração machos recomendada:<br> <strong>RAÇÃO DE MACHO – COBB</strong></p>`;
        } else {
            racaoRecomendada.innerHTML = `<p id="resultadoIdade">Ração fêmeas recomendada:<br> <strong>MATRIZ POSTURA 2 – ROSS HBB</strong> <br>Ração machos recomendada:<br> <strong>RAÇÃO DE MACHO – COBB</strong></p>`;
        }
}

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