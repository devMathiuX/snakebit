// JS para que se oculte/muestre la contraseña

const togglePasswordButton = document.getElementById('toggle-password');
const passwordInput = document.getElementById('password');

togglePasswordButton.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    togglePasswordButton.textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
});