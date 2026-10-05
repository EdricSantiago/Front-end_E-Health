const passwordInput = document.getElementById('password');
const toggleButton = document.getElementById('togglePassword');

toggleButton.addEventListener('click', function () {
    const isHidden = passwordInput.getAttribute('type') === 'password';

    passwordInput.setAttribute('type', isHidden ? 'text' : 'password');
    toggleButton.textContent = isHidden ? '*' : '-';
});

if (localStorage.getItem('heidoc_user')) {
    window.location.replace('../index.html');
}

document.querySelector('.login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    var username = this.username.value.trim();
    if (!username) return;

    localStorage.setItem('heidoc_user', username);
    window.location.replace('../index.html');
});