var AUTH_KEY = 'heidoc_user';

function heidocLogout() {
    localStorage.removeItem(AUTH_KEY);
}

(function () {
    if (localStorage.getItem(AUTH_KEY)) return;

    var inPages = window.location.pathname.indexOf('/pages/') !== -1;
    window.location.replace((inPages ? '' : 'pages/') + 'login.html');
})();

document.addEventListener('click', function (e) {
    if (e.target.closest('[data-logout]')) heidocLogout();
});