document.addEventListener('DOMContentLoaded', function() {
    mostrarProdutos();
});

function mostrarProdutos() {
    var productList = document.getElementById('product-list');
    productList.innerHTML = '';

    var productsDatabase = [
      { id: 1, name: 'Smartphone XY', description: 'O Smartphone XYZ é o último lançamento da marca, com uma tela de alta resolução, câmera de 48MP e processador octa-core.', price: 1499.99, stock: 50, imageUrl: 'Smartphone.jpg' },
      { id: 2, name: 'Fone de Ouvido Bluetooth', description: 'Desfrute de uma qualidade de som excepcional com o Fone de Ouvido Bluetooth ABC. Conecte-se facilmente ao seu dispositivo e ouça suas músicas favoritas por horas.', price: 99.90, stock: 30, imageUrl: 'fonedeouvido.jpg' },
      { id: 3, name: 'Smartwatch DEF', description: 'O Smartwatch DEF é o companheiro perfeito para o seu dia a dia. Monitore sua saúde, receba notificações e muito mais, tudo em um design elegante e moderno.', price: 299.99, stock: 20, imageUrl: 'Smartwatch.jpg' },
      { id: 4, name: 'Tablet ABC', description: 'O Tablet ABC é perfeito para produtividade e entretenimento em movimento. Com uma tela HD de 10 polegadas e bateria de longa duração, é ideal para trabalho e lazer.', price: 499.99, stock: 15, imageUrl: 'tablet.jpg' },
      { id: 5, name: 'Câmera DSLR', description: 'Capture momentos inesquecíveis com a Câmera DSLR XYZ. Com um sensor de alta resolução e lentes intercambiáveis, você terá imagens nítidas e de qualidade profissional.', price: 899.99, stock: 10, imageUrl: 'cameradslr.jpg' },
      { id: 6, name: 'Monitor LED 27', description: 'Expanda sua área de trabalho com o Monitor LED 27". Com resolução Full HD e design fino, proporciona uma experiência de visualização imersiva e confortável.', price: 349.99, stock: 25, imageUrl: 'monitorLed.jpg' },
      { id: 7, name: 'Mouse Sem Fio', description: 'O Mouse Sem Fio ABC oferece liberdade de movimento e conforto ergonômico. Conecte-se facilmente ao seu computador e aumente sua produtividade com este mouse confiável.', price: 29.90, stock: 40, imageUrl: 'mousesemfio.jpg' },
      { id: 8, name: 'Teclado Mecânico', description: 'Experimente uma digitação rápida e precisa com o Teclado Mecânico XYZ. Com teclas retroiluminadas e switches mecânicos, proporciona uma experiência de digitação excepcional.', price: 119.90, stock: 20, imageUrl: 'tecladomecanico.jpg' },
      { id: 9, name: 'Caixa de Som Bluetooth', description: 'Desfrute de um som potente e claro em qualquer lugar com a Caixa de Som Bluetooth XYZ. Conecte-se ao seu dispositivo via Bluetooth e ouça suas músicas favoritas com qualidade superior.', price: 79.99, stock: 35, imageUrl: 'caixadesombluetooth.jpg' },
      { id: 10, name: 'HD Externo 1TB', description: 'Armazene seus arquivos com segurança e praticidade no HD Externo 1TB ABC. Com capacidade de 1TB, é ideal para backup de dados e transporte de arquivos importantes.', price: 89.99, stock: 15, imageUrl: 'Hdexterno_1tb.jpg' },
      { id: 11, name: 'Smart TV Ultra HD', description: 'Smart TV com resolução Ultra HD, tela de 55 polegadas e acesso a aplicativos de streaming.', price: 899.99, stock: 8, imageUrl: 'SmartTV.jpg' 
      },
      { id: 12, name: 'Console de Videogame XY', description: 'Console de videogame com gráficos de última geração, capacidade de armazenamento expandida e controles sem fio.', price: 499.99, stock: 12, imageUrl: 'ConsoledeVideoGame.jpg' 
      }
    ];

    productsDatabase.forEach(function(product) {
        var productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <div class="product-details">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Preço: R$ ${product.price.toFixed(2)}</p>
                <button onclick="adicionarAoCarrinho(${product.id})">Adicionar ao Carrinho</button>
            </div>
        `;
        productList.appendChild(productItem);
    });
}

function adicionarAoCarrinho(productId) {
    var productsDatabase = [
      { id: 1, name: 'Smartphone XY', description: 'O Smartphone XYZ é o último lançamento da marca, com uma tela de alta resolução, câmera de 48MP e processador octa-core.', price: 1499.99, stock: 50, imageUrl: 'Smartphone.jpg' },
      { id: 2, name: 'Fone de Ouvido Bluetooth', description: 'Desfrute de uma qualidade de som excepcional com o Fone de Ouvido Bluetooth ABC. Conecte-se facilmente ao seu dispositivo e ouça suas músicas favoritas por horas.', price: 99.90, stock: 30, imageUrl: 'fonedeouvido.jpg' },
      { id: 3, name: 'Smartwatch DEF', description: 'O Smartwatch DEF é o companheiro perfeito para o seu dia a dia. Monitore sua saúde, receba notificações e muito mais, tudo em um design elegante e moderno.', price: 299.99, stock: 20, imageUrl: 'Smartwatch.jpg' },
      { id: 4, name: 'Tablet ABC', description: 'O Tablet ABC é perfeito para produtividade e entretenimento em movimento. Com uma tela HD de 10 polegadas e bateria de longa duração, é ideal para trabalho e lazer.', price: 499.99, stock: 15, imageUrl: 'tablet.jpg' },
      { id: 5, name: 'Câmera DSLR', description: 'Capture momentos inesquecíveis com a Câmera DSLR XYZ. Com um sensor de alta resolução e lentes intercambiáveis, você terá imagens nítidas e de qualidade profissional.', price: 899.99, stock: 10, imageUrl: 'cameradslr.jpg' },
      { id: 6, name: 'Monitor LED 27', description: 'Expanda sua área de trabalho com o Monitor LED 27. Com resolução Full HD e design fino, proporciona uma experiência de visualização imersiva e confortável.', price: 349.99, stock: 25, imageUrl: 'monitorLed.jpg' },
      { id: 7, name: 'Mouse Sem Fio', description: 'O Mouse Sem Fio ABC oferece liberdade de movimento e conforto ergonômico. Conecte-se facilmente ao seu computador e aumente sua produtividade com este mouse confiável.', price: 29.90, stock: 40, imageUrl: 'mousesemfio.jpg' },
      { id: 8, name: 'Teclado Mecânico', description: 'Experimente uma digitação rápida e precisa com o Teclado Mecânico XYZ. Com teclas retroiluminadas e switches mecânicos, proporciona uma experiência de digitação excepcional.', price: 119.90, stock: 20, imageUrl: 'tecladomecanico.jpg' },
      { id: 9, name: 'Caixa de Som Bluetooth', description: 'Desfrute de um som potente e claro em qualquer lugar com a Caixa de Som Bluetooth XYZ. Conecte-se ao seu dispositivo via Bluetooth e ouça suas músicas favoritas com qualidade superior.', price: 79.99, stock: 35, imageUrl: 'caixadesombluetooth.jpg' },
      { id: 10, name: 'HD Externo 1TB', description: 'Armazene seus arquivos com segurança e praticidade no HD Externo 1TB ABC. Com capacidade de 1TB, é ideal para backup de dados e transporte de arquivos importantes.', price: 89.99, stock: 15, imageUrl: 'Hdexterno_1tb.jpg' },
      { id: 11, name: 'Smart TV Ultra HD', description: 'Smart TV com resolução Ultra HD, tela de 55 polegadas e acesso a aplicativos de streaming.', price: 899.99, stock: 8, imageUrl: 'SmartTV.jpg' 
      },
      { id: 12, name: 'Console de Videogame XY', description: 'Console de videogame com gráficos de última geração, capacidade de armazenamento expandida e controles sem fio.', price: 499.99, stock: 12, imageUrl: 'ConsoledeVideoGame.jpg' 
      }
    ];

    var productToAdd = productsDatabase.find(function(product) {
        return product.id === productId;
    });

    if (productToAdd) {
        var cart = JSON.parse(localStorage.getItem('CarrinhoCompras')) || [];
        var existingItemIndex = cart.findIndex(function(item) {
            return item.id === productId;
        });

        if (existingItemIndex !== -1) {
            cart[existingItemIndex].quantity++;
        } else {
            cart.push({
                id: productToAdd.id,
                name: productToAdd.name,
                price: productToAdd.price,
                quantity: 1,
                imageUrl: productToAdd.imageUrl
            });
        }

        localStorage.setItem('CarrinhoCompras', JSON.stringify(cart));
        alert('Produto adicionado ao carrinho com sucesso!');
    } else {
        alert('Produto não encontrado.');
    }
}