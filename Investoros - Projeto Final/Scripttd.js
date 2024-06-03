const translations = {
    'pt-BR': {
        navHome: "Início",
        navReports: "Relatórios",
        navClients: "Clientes",
        navContact: "Contato",
        navMonitoring: "Monitorar",
        navLogin: "Entrar",
        contactTitle: "Contato",
        contactText: "Entre em contato conosco através dos seguintes meios:",
        contactEmail: "Email:",
        contactPhone: "Telefone:",
        contactAddress: "Endereço:",
        addressText: "Rua Exemplo, 123, Bairro, Cidade, Estado, País",
        sendMessageTitle: "Envie uma Mensagem",
        nameLabel: "Nome:",
        emailLabel: "Email:",
        messageLabel: "Mensagem:",
        submitButton: "Enviar",
        footerText: "Contato: contato@investoros.com | Telefone: (XX) XXXX-XXXX"
    },
    'en-US': {
        navHome: "Home",
        navReports: "Reports",
        navClients: "Clients",
        navContact: "Contact",
        navMonitoring: "Monitoring",
        navLogin: "Login",
        contactTitle: "Contact",
        contactText: "Get in touch with us through the following means:",
        contactEmail: "Email:",
        contactPhone: "Phone:",
        contactAddress: "Address:",
        addressText: "Example Street, 123, Neighborhood, City, State, Country",
        sendMessageTitle: "Send a Message",
        nameLabel: "Name:",
        emailLabel: "Email:",
        messageLabel: "Message:",
        submitButton: "Send",
        footerText: "Contact: contact@investoros.com | Phone: (XX) XXXX-XXXX"
    },
    'es-ES': {
        navHome: "Inicio",
        navReports: "Informes",
        navClients: "Clientes",
        navContact: "Contacto",
        navMonitoring: "Monitorización",
        navLogin: "Iniciar sesión",
        contactTitle: "Contacto",
        contactText: "Póngase en contacto con nosotros a través de los siguientes medios:",
        contactEmail: "Correo electrónico:",
        contactPhone: "Teléfono:",
        contactAddress: "Dirección:",
        addressText: "Calle Ejemplo, 123, Barrio, Ciudad, Estado, País",
        sendMessageTitle: "Enviar un Mensaje",
        nameLabel: "Nombre:",
        emailLabel: "Correo electrónico:",
        messageLabel: "Mensaje:",
        submitButton: "Enviar",
        footerText: "Contacto: contacto@investoros.com | Teléfono: (XX) XXXX-XXXX"
    }
};
 
function changeLanguage(lang) {
    document.getElementById('navHome').innerText = translations[lang].navHome;
    document.getElementById('navReports').innerText = translations[lang].navReports;
    document.getElementById('navClients').innerText = translations[lang].navClients;
    document.getElementById('navContact').innerText = translations[lang].navContact;
    document.getElementById('navMonitoring').innerText = translations[lang].navMonitoring;
    document.getElementById('navLogin').innerText = translations[lang].navLogin;
    document.getElementById('contactTitle').innerText = translations[lang].contactTitle;
    document.getElementById('contactText').innerText = translations[lang].contactText;
    document.querySelector('.contact-info p:nth-child(1)').innerHTML = `<strong>${translations[lang].contactEmail}</strong> contato@investoros.com`;
    document.querySelector('.contact-info p:nth-child(2)').innerHTML = `<strong>${translations[lang].contactPhone}</strong> (XX) XXXX-XXXX`;
    document.querySelector('.contact-info p:nth-child(3)').innerHTML = `<strong>${translations[lang].contactAddress}</strong> ${translations[lang].addressText}`;
    document.querySelector('.contact-form h2').innerText = translations[lang].sendMessageTitle;
    document.querySelector('label[for="name"]').innerText = translations[lang].nameLabel;
    document.querySelector('label[for="email"]').innerText = translations[lang].emailLabel;
    document.querySelector('label[for="message"]').innerText = translations[lang].messageLabel;
    document.querySelector('.contact-form button').innerText = translations[lang].submitButton;
    document.getElementById('footerText').innerText = translations[lang].footerText;
}