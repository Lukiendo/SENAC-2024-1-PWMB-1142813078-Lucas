function changeLanguage(language) {
    const elements = {
        'pt-BR': {
            clientsTitle: 'Clientes',
            clientsText: 'Informações sobre os nossos clientes.',
            footerText: 'Contato: contato@investoros.com | Telefone: (XX) XXXX-XXXX',
            clientA: {
                name: 'Cliente A',
                description: 'Empresa de Tecnologia especializada em soluções de inteligência artificial para otimização de processos industriais.'
            },
            clientB: {
                name: 'Cliente B',
                description: 'Corretora de Investimentos líder no mercado financeiro, oferecendo uma ampla gama de produtos e serviços.'
            },
            clientC: {
                name: 'Cliente C',
                description: 'Rede de lojas de varejo com foco em moda jovem e acessórios, presente em todo o país.'
            },
            clientD: {
                name: 'Cliente D',
                description: 'Empresa de consultoria em sustentabilidade e responsabilidade social corporativa, reconhecida internacionalmente por suas iniciativas inovadoras.'
            }
        },
        'en-US': {
            clientsTitle: 'Clients',
            clientsText: 'Information about our clients.',
            footerText: 'Contact: contact@investoros.com | Phone: (XX) XXXX-XXXX',
            clientA: {
                name: 'Client A',
                description: 'Technology company specializing in artificial intelligence solutions for optimizing industrial processes.'
            },
            clientB: {
                name: 'Client B',
                description: 'Leading investment brokerage in the financial market, offering a wide range of products and services.'
            },
            clientC: {
                name: 'Client C',
                description: 'Retail store network focusing on young fashion and accessories, present nationwide.'
            },
            clientD: {
                name: 'Client D',
                description: 'Consulting company in sustainability and corporate social responsibility, internationally recognized for its innovative initiatives.'
            }
        },
        'es-ES': {
            clientsTitle: 'Clientes',
            clientsText: 'Información sobre nuestros clientes.',
            footerText: 'Contacto: contacto@investoros.com | Teléfono: (XX) XXXX-XXXX',
            clientA: {
                name: 'Cliente A',
                description: 'Empresa de tecnología especializada en soluciones de inteligencia artificial para optimización de procesos industriales.'
            },
            clientB: {
                name: 'Cliente B',
                description: 'Correduría de inversiones líder en el mercado financiero, ofreciendo una amplia gama de productos y servicios.'
            },
            clientC: {
                name: 'Cliente C',
                description: 'Red de tiendas minoristas enfocadas en moda joven y accesorios, presente en todo el país.'
            },
            clientD: {
                name: 'Cliente D',
                description: 'Empresa de consultoría en sostenibilidad y responsabilidad social corporativa, reconocida internacionalmente por sus iniciativas innovadoras.'
            }
        }
    };

    const selectedElements = elements[language] || elements['en-US'];

    document.getElementById('clientsTitle').textContent = selectedElements.clientsTitle;
    document.getElementById('clientsText').textContent = selectedElements.clientsText;
    document.getElementById('footerText').textContent = selectedElements.footerText;
    document.getElementById('clientA').innerHTML = `<h2>${selectedElements.clientA.name}</h2><p>${selectedElements.clientA.description}</p>`;
    document.getElementById('clientB').innerHTML = `<h2>${selectedElements.clientB.name}</h2><p>${selectedElements.clientB.description}</p>`;
    document.getElementById('clientC').innerHTML = `<h2>${selectedElements.clientC.name}</h2><p>${selectedElements.clientC.description}</p>`;
    document.getElementById('clientD').innerHTML = `<h2>${selectedElements.clientD.name}</h2><p>${selectedElements.clientD.description}</p>`;
}

changeLanguage('pt-BR');