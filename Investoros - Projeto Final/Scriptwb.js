const translations = {
    'pt-BR': {
        navHome: "Início",
        navReports: "Relatórios",
        navClients: "Clientes",
        navContact: "Contato",
        navMonitoring: "Monitorar",
        navLogin: "Entrar",
        clientsTitle: "Clientes",
        clientsText: "Informações sobre os nossos clientes.",
        clientA: "Cliente A",
        clientADesc: "Empresa de Tecnologia especializada em soluções de inteligência artificial para otimização de processos industriais.",
        clientB: "Cliente B",
        clientBDesc: "Corretora de Investimentos líder no mercado financeiro, oferecendo uma ampla gama de produtos e serviços.",
        clientC: "Cliente C",
        clientCDesc: "Rede de lojas de varejo com foco em moda jovem e acessórios, presente em todo o país.",
        clientD: "Cliente D",
        clientDDesc: "Empresa de consultoria em sustentabilidade e responsabilidade social corporativa, reconhecida internacionalmente por suas iniciativas inovadoras.",
        footerText: "Contato: contato@investoros.com | Telefone: (XX) XXXX-XXXX"
    },
    'en-US': {
        navHome: "Home",
        navReports: "Reports",
        navClients: "Clients",
        navContact: "Contact",
        navMonitoring: "Monitoring",
        navLogin: "Login",
        clientsTitle: "Clients",
        clientsText: "Information about our clients.",
        clientA: "Client A",
        clientADesc: "Technology company specializing in artificial intelligence solutions for optimizing industrial processes.",
        clientB: "Client B",
        clientBDesc: "Leading investment brokerage in the financial market, offering a wide range of products and services.",
        clientC: "Client C",
        clientCDesc: "Retail chain focused on youth fashion and accessories, present nationwide.",
        clientD: "Client D",
        clientDDesc: "Consulting firm in sustainability and corporate social responsibility, internationally recognized for its innovative initiatives.",
        footerText: "Contact: contact@investoros.com | Phone: (XX) XXXX-XXXX"
    },
    'es-ES': {
        navHome: "Inicio",
        navReports: "Informes",
        navClients: "Clientes",
        navContact: "Contacto",
        navMonitoring: "Monitorización",
        navLogin: "Iniciar sesión",
        clientsTitle: "Clientes",
        clientsText: "Información sobre nuestros clientes.",
        clientA: "Cliente A",
        clientADesc: "Empresa de tecnología especializada en soluciones de inteligencia artificial para optimizar procesos industriales.",
        clientB: "Cliente B",
        clientBDesc: "Corredora de inversiones líder en el mercado financiero, ofreciendo una amplia gama de productos y servicios.",
        clientC: "Cliente C",
        clientCDesc: "Cadena de tiendas minoristas enfocada en moda joven y accesorios, presente en todo el país.",
        clientD: "Cliente D",
        clientDDesc: "Empresa de consultoría en sostenibilidad y responsabilidad social corporativa, reconocida internacionalmente por sus iniciativas innovadoras.",
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
    document.getElementById('clientsTitle').innerText = translations[lang].clientsTitle;
    document.getElementById('clientsText').innerText = translations[lang].clientsText;
    document.querySelector('.client:nth-child(1) h2').innerText = translations[lang].clientA;
    document.querySelector('.client:nth-child(1) p').innerText = translations[lang].clientADesc;
    document.querySelector('.client:nth-child(2) h2').innerText = translations[lang].clientB;
    document.querySelector('.client:nth-child(2) p').innerText = translations[lang].clientBDesc;
    document.querySelector('.client:nth-child(3) h2').innerText = translations[lang].clientC;
    document.querySelector('.client:nth-child(3) p').innerText = translations[lang].clientCDesc;
    document.querySelector('.client:nth-child(4) h2').innerText = translations[lang].clientD;
    document.querySelector('.client:nth-child(4) p').innerText = translations[lang].clientDDesc;
    document.getElementById('footerText').innerText = translations[lang].footerText;
}