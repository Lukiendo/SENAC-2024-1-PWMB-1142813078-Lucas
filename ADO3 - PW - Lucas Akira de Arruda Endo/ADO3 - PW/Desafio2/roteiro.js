document.addEventListener('DOMContentLoaded', function() {
    const numeros = [];

    const incluirNumero = () => {
        const inputNumero = document.getElementById('numero');
        const valor = parseInt(inputNumero.value);

        if (isNaN(valor) || valor < 1 || valor > 100 || numeros.includes(valor)) {
            alert(`Número informado (${valor}) inválido. Deve ser entre 1 e 100 e não pode ser repetido.`);
            return;
        }

        numeros.push(valor);
        const selectNumeros = document.getElementById('numeros');
        const option = document.createElement('option');
        option.text = `Valor ${valor} adicionado`;
        selectNumeros.add(option);
        inputNumero.value = '';
    };

    const finalizar = () => {
        if (numeros.length === 0) {
            alert("Inclua valores antes de finalizar.");
            return;
        }

        const totalElementos = numeros.length;
        const maiorValor = Math.max(...numeros);
        const menorValor = Math.min(...numeros);
        const soma = numeros.reduce((acc, curr) => acc + curr, 0);
        const media = soma / totalElementos;

        alert(`No total, temos ${totalElementos} elementos cadastrados.\nMaior valor informado: ${maiorValor}\nMenor valor informado: ${menorValor}\nSoma dos valores: ${soma}\nMédia dos valores: ${media}`);
    };

    document.getElementById('incluirBtn').addEventListener('click', incluirNumero);
    document.getElementById('finalizarBtn').addEventListener('click', finalizar);
});