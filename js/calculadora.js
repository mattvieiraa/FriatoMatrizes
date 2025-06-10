function realizarCalculo() {
    const tipoRacao = tipoRacaoSelect.value;
    const numComportas = parseInt(comportasInput.value); // Converte para número inteiro

    // Verifica se ambos os campos foram preenchidos e são válidos
    if (tipoRacao && numComportas >= 1 && numComportas <= 5) {
        const kgPorComporta = valoresRacao[tipoRacao]; // Pega o valor correspondente ao tipo de ração
        const totalRacao = kgPorComporta * numComportas;

    // Obtém o texto legível da opção selecionada
    const nomeRacaoDisplay = tipoRacaoSelect.options[tipoRacaoSelect.selectedIndex].text;

    // Atualiza o conteúdo do parágrafo
    resultadoParagrafo.textContent = `Ração: ${nomeRacaoDisplay} em ${numComportas} comporta(s) fazer pedido de ${totalRacao} kg.`;
    } else {
    // Limpa o parágrafo se os campos não estiverem preenchidos ou válidos
    resultadoParagrafo.textContent = '';
    }
}

tipoRacaoSelect.addEventListener('change', realizarCalculo);
// Quando a quantidade de comportas mudar (ao digitar ou usar as setas)
comportasInput.addEventListener('input', realizarCalculo);
// Opcional: Para executar o cálculo no carregamento da página, se já houver valores pré-definidos
document.addEventListener('DOMContentLoaded', realizarCalculo);