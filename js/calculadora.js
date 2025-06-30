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
            // For 'c5' (5 Comportas) for 'rPostura', we'll handle this separately to show both options
            'c5_option1': '15.300 KG', // From '5 COM. (17 BATIDAS)'
            'c5_option2': '17.100 KG'  // From '5 COM. (19 BATIDAS)'
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

        let feedQuantityMessage = '';
        let racaoLabel = '';

        // Get the text label for the selected feed type
        const selectedOption = tipoRacaoSelect.options[tipoRacaoSelect.selectedIndex];
        racaoLabel = selectedOption ? selectedOption.textContent : 'Tipo de Ração Desconhecido';

        if (selectedRacao === 'rPostura' && selectedComporta === 'c5') {
            // Special case for 'Posturas' and '5 Comportas'
            const quantity1 = feedData.rPostura.c5_option1;
            const quantity2 = feedData.rPostura.c5_option2;
            feedQuantityMessage = `o pedido deve ser de ${quantity1} ou ${quantity2}`;
        } else if (feedData[selectedRacao] && feedData[selectedRacao][selectedComporta]) {
            // General case for other selections
            const quantity = feedData[selectedRacao][selectedComporta];
            feedQuantityMessage = `o pedido deve ser de ${quantity}`;
        } else {
            // Handle cases where data might not be explicitly defined for 'c5' if it wasn't already covered
            feedQuantityMessage = `N/A`; // Or a more specific message if needed
        }

        if (feedQuantityMessage !== 'N/A') {
            resultadoComportaP.textContent = `A ração ${racaoLabel.toLowerCase()} ${feedQuantityMessage} para caber em ${selectedComporta.replace('c', '')} Comportas.`;
        } else {
            resultadoComportaP.textContent = `Não há dados disponíveis para a ração "${racaoLabel.toLowerCase()}" e "${selectedComporta.replace('c', '')}" comportas.`;
        }
    }
});
