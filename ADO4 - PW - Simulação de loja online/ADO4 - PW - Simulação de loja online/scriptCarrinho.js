document.addEventListener('DOMContentLoaded', function() {
    mostrarItensCarrinho();

    document.getElementById('voltar-btn').addEventListener('click', function() {
        window.location.href = 'selecao.html';
    });
});

function mostrarItensCarrinho() {
    var cartItems = document.getElementById('cart-items');
    var cart = JSON.parse(localStorage.getItem('CarrinhoCompras')) || [];
    if (cart.length > 0) {
        var table = document.createElement('table');
        table.innerHTML = `
            <tr>
                <th>Número</th>
                <th>Nome do Produto</th>
                <th>Preço Unitário</th>
                <th>Quantidade</th>
                <th>Valor Total</th>
                <th>Imagem do Produto</th>
                <th></th>
            </tr>
        `;
        cart.forEach(function(item, index) {
            var row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${item.name}</td>
                <td>R$ ${item.price.toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td>R$ ${(item.price * item.quantity).toFixed(2)}</td>
                <td><img src="${item.imageUrl}" alt="${item.name}" style="width: 50px;"></td>
                <td><button class="remove-btn" data-index="${index}">Remover</button></td>
            `;
            table.appendChild(row);
        });
        cartItems.appendChild(table);
        var removeButtons = document.querySelectorAll('.remove-btn');
        removeButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                var indexToRemove = parseInt(button.getAttribute('data-index'));
                removerItem(indexToRemove);
                location.reload();
            });
        });
    } else {
        cartItems.innerHTML = '<p>O carrinho está vazio.</p>';
    }
}

function removerItem(index) {
    var cart = JSON.parse(localStorage.getItem('CarrinhoCompras'));
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        cart.splice(index, 1);
    }
    localStorage.setItem('CarrinhoCompras', JSON.stringify(cart));
}

document.getElementById('checkout-btn').addEventListener('click', function() {
    window.location.href = 'pagamento.html';
});