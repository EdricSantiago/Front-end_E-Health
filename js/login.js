const passwordInput = document.getElementById('password');
const toggleButton = document.getElementById('togglePassword');

toggleButton.addEventListener('click', function () {
    const isHidden = passwordInput.getAttribute('type') === 'password';

    passwordInput.setAttribute('type', isHidden ? 'text' : 'password');
    toggleButton.textContent = isHidden ? '*' : '-';
});