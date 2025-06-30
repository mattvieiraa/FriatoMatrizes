// script.js

document.addEventListener('DOMContentLoaded', () => {
    const tipoRacaoSelect = document.querySelector('.calculadora__idade #linhagemGranja:first-of-type'); // Selects the first select for feed type
    const comportaSelect = document.querySelector('.calculadora__idade #linhagemGranja:last-of-type'); // Selects the second select for compartments
    const calcularButton = document.getElementById('btn-calcular');
    const resultadoComportaP = document.getElementById('resultadoComporta');

    // Data structure to hold the feed quantities based on your image
    const feedData = {
        'rInicial': { // PRÉ INICIAL/INICIAL
            'c1': '3.200 KG',
            'c2': '6.400 KG',
            'c3': '8.800 KG',
            'c4': '12.000 KG',
            'c5': '16.000 KG' // Assuming '19 BATIDAS' corresponds to 5 Comportas for rInicial
        },
        'rCrescimento': { // CRESCIMENTO
            'c1': '2.500 KG',
            'c2': '3.500 KG',
            'c3': '7.700 KG',
            'c4': '10.500 KG',
            'c5': '13.300 KG' // Assuming '19 BATIDAS' corresponds to 5 Comportas for rCrescimento
        },
        'rPpostura': { // PRÉ POSTURA
            'c1': '3.200 KG',
            'c2': '6.400 KG',
            'c3': '8.800 KG',
            'c4': '12.000 KG',
            'c5': '15.200 KG' // Assuming '19 BATIDAS' corresponds to 5 Comportas for rPpostura
        },
        'rPostura': { // POSTURAS (Postura 1, 2, 3 have the same values)
            'c1': '3.600 KG',
            'c2': '7.200 KG',
            'c3': '9.900 KG',
            'c4': '13.500 KG',
            'c5': '17.100 KG' // Assuming '19 BATIDAS' corresponds to 5 Comportas for rPostura
        },
        'rMacho': { // MACHO
            'c1': '2.500 KG',
            'c2': '3.500 KG',
            'c3': '7.700 KG',
            'c4': '10.500 KG',
            'c5': '13.300 KG' // Assuming '19 BATIDAS' corresponds to 5 Comportas for rMacho
        }
    };

    calcularButton.addEventListener('click', mostrarComporta);

    function mostrarComporta() {
        const selectedRacao = tipoRacaoSelect.value;
        const selectedComporta = comportaSelect.value;

        let feedQuantity = 'N/A';

        // Check if the selected feed type and compartment exist in our data
        if (feedData[selectedRacao] && feedData[selectedRacao][selectedComporta]) {
            feedQuantity = feedData[selectedRacao][selectedComporta];
        } else if (selectedRacao === 'rPpostura' && selectedComporta === 'c5') {
             // Specific handling for "Pré Postura" and 5 Comportas, which has "15.200 KG" in the image's "19 BATIDAS" column
            feedQuantity = '15.200 KG';
        } else if ((selectedRacao === 'rInicial' || selectedRacao === 'rCrescimento' || selectedRacao === 'rMacho' || selectedRacao === 'rPostura') && selectedComporta === 'c5') {
            // General handling for 5 Comportas (19 BATIDAS) for other feed types
            feedQuantity = feedData[selectedRacao][selectedComporta];
        }


        let racaoLabel = '';
        // Get the text label for the selected feed type
        const selectedOption = tipoRacaoSelect.options[tipoRacaoSelect.selectedIndex];
        racaoLabel = selectedOption ? selectedOption.textContent : 'Tipo de Ração Desconhecido';


        if (feedQuantity !== 'N/A') {
            resultadoComportaP.textContent = `A ração ${racaoLabel.toLowerCase()} o pedido deve ser de ${feedQuantity} para caber em ${selectedComporta.replace('c', '')} Comportas.`;
        } else {
            resultadoComportaP.textContent = `Não há dados disponíveis para a ração "${racaoLabel.toLowerCase()}" e "${selectedComporta.replace('c', '')}" comportas.`;
        }
    }
});