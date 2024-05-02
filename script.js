function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    if (validarEmail(email)) {
        alert('E-mail válido. Enviando formulário...');
        // Adicione aqui a lógica para enviar o formulário
    } else {
        alert('Por favor, insira um e-mail válido.');
    }
});
