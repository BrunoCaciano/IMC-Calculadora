
function armazenaValor() {
    /*ARMAZENA OS VALORES DIGITADOS NO INPUT*/
    var pesoDigitado = parseFloat(document.getElementById('peso').value);
    var alturaDigitada = parseFloat(document.getElementById('altura').value);

    if(isNaN(pesoDigitado) || isNaN(alturaDigitada) || pesoDigitado === '' || alturaDigitada === '') {
        alert('Preencha ambos os campos de peso e altura com valores numéricos');
        return null;
    }

    return {
        peso: pesoDigitado,
        altura: alturaDigitada
    };
}

function CalculoIMC(peso, altura) {
    var resultado = peso / (altura * altura);

    var resultadoFormatado = resultado.toFixed(2)

    alert(resultadoFormatado);
    return resultadoFormatado;
}
