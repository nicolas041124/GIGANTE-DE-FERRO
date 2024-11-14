document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    // Obtendo os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const plano = document.getElementById('plano').value;

    // Preenchendo a mensagem de sucesso com as informações
    document.getElementById('msg-nome').textContent = nome;
    document.getElementById('msg-email').textContent = email;
    document.getElementById('msg-telefone').textContent = telefone;
    document.getElementById('msg-plano').textContent = plano;

    // Exibindo a mensagem de sucesso
    document.getElementById('mensagem-sucesso').style.display = 'block';

    // Escondendo o formulário
    document.getElementById('formulario').style.display = 'none';
});

function toggleTerms() {
    var termos = document.getElementById("termos");
    if (termos.style.display === "none") {
        termos.style.display = "block";
    } else {
        termos.style.display = "none";
    }
}
// Exibe ou oculta os termos e condições
function toggleTerms() {
    const termosDiv = document.getElementById('termos');
    termosDiv.style.display = termosDiv.style.display === 'none' ? 'block' : 'none';
}
