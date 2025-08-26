document.addEventListener('DOMContentLoaded', function () {
    const conversionType = document.getElementById('conversionType');
    const inputValue = document.getElementById('inputValue');
    const inputLabel = document.getElementById('inputLabel');
    const convertBtn = document.getElementById('convertBtn');
    const resultContent = document.getElementById('resultContent');
    const errorMessage = document.getElementById('errorMessage');

    conversionType.addEventListener('change', function () {
        if (conversionType.value === 'decToBin') {
            inputLabel.textContent = 'Valor Decimal';
            inputValue.placeholder = 'Ex: 42';
        } else {
            inputLabel.textContent = 'Valor Binário';
            inputValue.placeholder = 'Ex: 101010';
        }
        resultContent.textContent = '-';
        errorMessage.textContent = '';
        inputValue.value = '';
    });

    convertBtn.addEventListener('click', function () {
        errorMessage.textContent = '';
        resultContent.textContent = '-';
        const value = inputValue.value.trim();

        if (conversionType.value === 'decToBin') {
            if (!/^\d+$/.test(value)) {
                errorMessage.textContent = 'Digite um número decimal válido.';
                return;
            }
            const binario = parseInt(value, 10).toString(2);
            resultContent.textContent = `Binário: ${binario}`;
        } else {
            if (!/^[01]+$/.test(value)) {
                errorMessage.textContent = 'Digite um número binário válido.';
                return;
            }
            const decimal = parseInt(value, 2);
            resultContent.textContent = `Decimal: ${decimal}`;
        }
    });
});
