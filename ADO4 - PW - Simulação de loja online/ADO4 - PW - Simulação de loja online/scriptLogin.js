document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    var clientes = [
        {
            email: 'lucas.akira@example.com',
            senha: 'Akira@123',
            nome: 'Lucas Akira',
            urlAvatarCliente: 'url_avatar_lucas_akira.jpg',
            nomeArquivoAvatarCliente: 'avatar_lucas_akira.jpg'
        },
    ];

    var clienteEncontrado = clientes.find(function(cliente) {
        return cliente.email === email && cliente.senha === senha;
    });

    if (clienteEncontrado) {
        var loginCliente = {
            email: clienteEncontrado.email,
            nome: clienteEncontrado.nome,
            urlAvatarCliente: clienteEncontrado.urlAvatarCliente,
            nomeArquivoAvatarCliente: clienteEncontrado.nomeArquivoAvatarCliente
        };
        localStorage.setItem('LoginCliente', JSON.stringify(loginCliente));

        window.location.href = 'vitrine.html';
    } else {
        alert('Atenção: você não é nosso cliente, faça seu cadastro');

        window.location.href = 'vitrineParcial.html';
    }
});
