
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('form');
    contactForm.addEventListener('submit', (event) => {
        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        if (!name || !email) {
            event.preventDefault();
            alert('Por favor, complete todos los campos requeridos.');
        }
    });
});