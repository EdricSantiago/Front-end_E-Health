document.addEventListener('DOMContentLoaded', function () {
    var isInsidePagesFolder = window.location.pathname.indexOf('/pages/') !== -1;
    var basePath = './';
    var indexPath = 'index.html';
    var pagesPath = 'pages/';

    if (isInsidePagesFolder) {
        basePath = '../';
        indexPath = '../index.html';
        pagesPath = '';
    }

    var xhr = new XMLHttpRequest();
    xhr.open('GET', basePath + 'pages/components/bottom_nav.html', true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var html = xhr.responseText;
            var processedHTML = html
                .replace(/INDEX_PATH/g, indexPath)
                .replace(/PAGES_PATH/g, pagesPath);

            document.body.insertAdjacentHTML('beforeend', processedHTML);

            var currentPath = window.location.pathname;
            var navItems = document.querySelectorAll('.bottom-nav .nav-item');

            for (var i = 0; i < navItems.length; i++) {
                var item = navItems[i];
                var page = item.getAttribute('data-page');

                if (page === 'home' && (currentPath.indexOf('index.html') !== -1 || currentPath.charAt(currentPath.length - 1) === '/')) {
                    item.classList.add('active');
                } else if (page === 'riwayat' && currentPath.indexOf('riwayat.html') !== -1) {
                    item.classList.add('active');
                } else if (page === 'profile' && currentPath.indexOf('profile.html') !== -1) {
                    item.classList.add('active');
                } else if (page === 'pengaturan' && currentPath.indexOf('pengaturan.html') !== -1) {
                    item.classList.add('active');
                }
            }
        }
    };

    xhr.send();
});