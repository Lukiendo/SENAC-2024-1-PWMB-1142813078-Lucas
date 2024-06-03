document.addEventListener('DOMContentLoaded', function() {
    mostrarDetalhesPagamento();

    document.getElementById('pix-btn').addEventListener('click', function() {
        exibirFormaPagamento('pix');
    });

    document.getElementById('boleto-btn').addEventListener('click', function() {
        exibirFormaPagamento('boleto');
    });

    document.getElementById('payment-form').addEventListener('submit', function(event) {
        event.preventDefault();
        processarPagamento();
    });
});

function mostrarDetalhesPagamento() {
    var cart = JSON.parse(localStorage.getItem('CarrinhoCompras')) || [];
    var totalAmount = calcularTotal(cart);
    document.getElementById('total-amount').textContent = 'Total: R$ ' + totalAmount.toFixed(2);
}

function calcularTotal(cart) {
    var total = 0;
    cart.forEach(function(item) {
        total += item.price * item.quantity;
    });
    return total;
}

function exibirFormaPagamento(formaPagamento) {
    var paymentForm = document.getElementById('payment-form');
    var pixInfo = document.getElementById('pix-info');
    var boletoInfo = document.getElementById('boleto-info');

    paymentForm.style.display = 'block';
    pixInfo.style.display = 'none';
    boletoInfo.style.display = 'none';

    if (formaPagamento === 'pix') {
        pixInfo.style.display = 'block';
        gerarQRCodePix();
    } else if (formaPagamento === 'boleto') {
        boletoInfo.style.display = 'block';
    }
}

function gerarQRCodePix() {
    var totalAmount = document.getElementById('total-amount').textContent.split(' ')[1].replace(',', '');
    var pixKey = 'chave-pix-inventada@example.com';
    var pixData = `00020101021226580014BR.GOV.BCB.PIX0136${pixKey}5204000053039865404${totalAmount}5802BR5925Nome do Recebedor6009Cidade7009Descricao6304${gerarCRC16('00020101021226580014BR.GOV.BCB.PIX0136' + pixKey + '5204000053039865404' + totalAmount + '5802BR5925Nome do Recebedor6009Cidade7009Descricao')}`;

    var qrCodeUrl = 'https://api.qrserver.com/v1/create-qr-code/?data=' + encodeURIComponent(pixData) + '&size=200x200';
    document.getElementById('pix-qr-code').src = qrCodeUrl;
}

function gerarCRC16(payload) {
    var polinomio = 0x1021;
    var resultado = 0xFFFF;

    for (var offset = 0; offset < payload.length; offset++) {
        resultado ^= (payload.charCodeAt(offset) << 8);
        for (var bitwise = 0; bitwise < 8; bitwise++) {
            if ((resultado <<= 1) & 0x10000) {
                resultado ^= polinomio;
            }
            resultado &= 0xFFFF;
        }
    }

    return resultado.toString(16).toUpperCase().padStart(4, '0');
}

function processarPagamento() {
    var pixInfo = document.getElementById('pix-info').style.display;
    var boletoInfo = document.getElementById('boleto-info').style.display;
    var feedbackMessage = document.getElementById('feedback-message');

    feedbackMessage.textContent = '';

    if (pixInfo === 'block') {
        feedbackMessage.textContent = 'Pagamento via Pix processado.';
        setTimeout(() => {
            window.location.href = 'vitrine.html';
        }, 5000);
    } else if (boletoInfo === 'block') {
        gerarBoleto().then((boletoCode) => {
            document.getElementById('boleto-code').textContent = boletoCode;
            feedbackMessage.textContent = `Boleto bancário gerado. Código do Boleto: ${boletoCode}`;
            setTimeout(() => {
                window.location.href = 'vitrine.html';
            }, 10000);
        });
    } else {
        feedbackMessage.textContent = 'Selecione uma forma de pagamento válida.';
    }
}

function gerarBoleto() {
    var valorBoleto = document.getElementById('boleto-value').value;
    var dataVencimento = document.getElementById('boleto-due-date').value;

    return new Promise((resolve) => {
        setTimeout(() => {
            var boletoCode = Math.floor(Math.random() * 10000000000000000);
            resolve(boletoCode);
        }, 2000);
    });
}