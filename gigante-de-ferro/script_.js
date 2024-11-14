document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();  // Previne o envio real do formulário

    // Captura os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    // Exibe um alerta com as informações preenchidas (opcional)
    alert(`Informações enviadas:
    Nome: ${nome}
    E-mail: ${email}
    Assunto: ${assunto}
    Mensagem: ${mensagem}`);

    // Mostrar o modal com as informações
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    modalText.textContent = `Nome: ${nome}\nE-mail: ${email}\nAssunto: ${assunto}\nMensagem: ${mensagem}`;
    modal.style.display = "block";

    // Fechar o modal ao clicar na 'X'
    document.querySelector('.close').onclick = function() {
        modal.style.display = "none";
    };
});
