document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('accountStatementBtn').addEventListener('click', () => generateReport('accountStatement'));
    document.getElementById('transactionHistoryBtn').addEventListener('click', () => generateReport('transactionHistory'));
    document.getElementById('fundPerformanceBtn').addEventListener('click', () => generateReport('fundPerformance'));
    document.getElementById('complianceReportBtn').addEventListener('click', () => generateReport('complianceReport'));

    // Verificar se há relatório selecionado no localStorage
    const selectedReport = localStorage.getItem('selectedReport');
    if (selectedReport) {
        generateReport(selectedReport);
    }
});

function generateReport(reportType) {
    let reportContent = '';
    switch (reportType) {
        case 'accountStatement':
            reportContent = generateAccountStatement();
            break;
        case 'transactionHistory':
            reportContent = generateTransactionHistory();
            break;
        case 'fundPerformance':
            reportContent = generateFundPerformance();
            break;
        case 'complianceReport':
            reportContent = generateComplianceReport();
            break;
    }
    document.getElementById('reportContent').innerHTML = reportContent;
    showDownloadNotification(`Relatório ${getReportName(reportType)}`);

    // Armazenar o tipo de relatório selecionado no localStorage
    localStorage.setItem('selectedReport', reportType);
}

// Funções geradoras de relatório
function generateAccountStatement() {
    return `
        <h2>Extrato de Conta</h2>
        <table>
            <tr>
                <th>Data</th>
                <th>Descrição</th>
                <th>Valor</th>
                <th>Saldo</th>
            </tr>
            <tr>
                <td>01/06/2024</td>
                <td>Depósito Inicial</td>
                <td>R$ 10.000,00</td>
                <td>R$ 10.000,00</td>
            </tr>
            <tr>
                <td>05/06/2024</td>
                <td>Compra de Ações</td>
                <td>R$ -1.500,00</td>
                <td>R$ 8.500,00</td>
            </tr>
            <tr>
                <td>10/06/2024</td>
                <td>Dividendos Recebidos</td>
                <td>R$ 200,00</td>
                <td>R$ 8.700,00</td>
            </tr>
        </table>
    `;
}

function generateTransactionHistory() {
    return `
        <h2>Histórico de Transações</h2>
        <table>
            <tr>
                <th>Data</th>
                <th>Tipo</th>
                <th>Descrição</th>
                <th>Valor</th>
            </tr>
            <tr>
                <td>01/06/2024</td>
                <td>Depósito</td>
                <td>Depósito Inicial</td>
                <td>R$ 10.000,00</td>
            </tr>
            <tr>
                <td>05/06/2024</td>
                <td>Compra</td>
                <td>Compra de Ações</td>
                <td>R$ -1.500,00</td>
            </tr>
            <tr>
                <td>10/06/2024</td>
                <td>Recebimento</td>
                <td>Dividendos Recebidos</td>
                <td>R$ 200,00</td>
            </tr>
        </table>
    `;
}

function generateFundPerformance() {
    return `
        <h2>Rentabilidade do Fundo</h2>
        <p>Relatório de rentabilidade acumulada do fundo:</p>
        <table>
            <tr>
                <th>Período</th>
                <th>Rentabilidade</th>
            </tr>
            <tr>
                <td>Janeiro 2024</td>
                <td>2.5%</td>
            </tr>
            <tr>
                <td>Fevereiro 2024</td>
                <td>3.1%</td>
            </tr>
            <tr>
                <td>Março 2024</td>
                <td>2.8%</td>
            </tr>
            <tr>
                <td>Abril 2024</td>
                <td>3.0%</td>
            </tr>
            <tr>
                <td>Maio 2024</td>
                <td>2.7%</td>
            </tr>
        </table>
    `;
}

function generateComplianceReport() {
    return `
        <h2>Relatório de Conformidade</h2>
        <p>Relatório de conformidade regulatória:</p>
        <ul>
            <li>Norma XYZ cumprida em 01/06/2024</li>
            <li>Relatório ABC submetido em 15/06/2024</li>
            <li>Auditoria DEF realizada em 30/06/2024</li>
        </ul>
    `;
}

function showDownloadNotification(reportName) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `<p>Baixando ${reportName}...</p>`;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 3000);
}

function changeLanguage(language) {
    const elements = {
        'pt-BR': {
            reportsTitle: 'Relatórios',
            reportsText: 'Selecione o tipo de relatório que você deseja gerar e clique no botão correspondente:',
            footerText: 'Contato: contato@investoros.com | Telefone: (XX) XXXX-XXXX',
            accountStatement: 'Extrato de Conta',
            transactionHistory: 'Histórico de Transações',
            fundPerformance: 'Rentabilidade do Fundo',
            complianceReport: 'Relatório de Conformidade'
        },
        'en-US': {
            reportsTitle: 'Reports',
            reportsText: 'Select the type of report you want to generate and click the corresponding button:',
            footerText: 'Contact: contact@investoros.com | Phone: (XX) XXXX-XXXX',
            accountStatement: 'Account Statement',
            transactionHistory: 'Transaction History',
            fundPerformance: 'Fund Performance',
            complianceReport: 'Compliance Report'
        },
        'es-ES': {
            reportsTitle: 'Informes',
            reportsText: 'Seleccione el tipo de informe que desea generar y haga clic en el botón correspondiente:',
            footerText: 'Contacto: contacto@investoros.com | Teléfono: (XX) XXXX-XXXX',
            accountStatement: 'Extracto de Cuenta',
            transactionHistory: 'Historial de Transacciones',
            fundPerformance: 'Rendimiento del Fondo',
            complianceReport: 'Informe de Cumplimiento'
        }
    };

    const selectedElements = elements[language] || elements['en-US'];

    document.getElementById('reportsTitle').textContent = selectedElements.reportsTitle;
    document.getElementById('reportsText').textContent = selectedElements.reportsText;
    document.getElementById('footerText').textContent = selectedElements.footerText;
    document.getElementById('accountStatementBtn').textContent = selectedElements.accountStatement;
    document.getElementById('transactionHistoryBtn').textContent = selectedElements.transactionHistory;
    document.getElementById('fundPerformanceBtn').textContent = selectedElements.fundPerformance;
    document.getElementById('complianceReportBtn').textContent = selectedElements.complianceReport;
}

changeLanguage('pt-BR');