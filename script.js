function decimalParaBinario() {
    const decimal = document.getElementById('decimal').value;
    if (decimal === '') {
        document.getElementById('resultadoBinario').textContent = 'Digite um número decimal.';
        return;
    }
    const binario = parseInt(decimal, 10).toString(2);
    document.getElementById('resultadoBinario').textContent = `Binário: ${binario}`;
}

function binarioParaDecimal() {
    const binario = document.getElementById('binario').value;
    if (!/^[01]+$/.test(binario)) {
        document.getElementById('resultadoDecimal').textContent = 'Digite um número binário válido.';
        return;
    }
    const decimal = parseInt(binario, 2);
    document.getElementById('resultadoDecimal').textContent = `Decimal: ${decimal}`;
}