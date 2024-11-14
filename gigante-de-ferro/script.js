// Seleciona todas as perguntas do FAQ
const faqQuestions = document.querySelectorAll('.faq-question');

// Adiciona evento de clique a cada pergunta
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // Alterna a classe "active" no item pai (faq-item)
        const faqItem = question.parentElement;
        faqItem.classList.toggle('active');
    });
});
