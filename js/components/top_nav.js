(function () {
    var inPages = window.location.pathname.indexOf('/pages/') !== -1;
    var root = inPages ? '../' : '';
    var pages = inPages ? '' : 'pages/';
    var file = window.location.pathname.split('/').pop() || 'index.html';

    var menu = [
        ['Beranda', root + 'index.html', ['index.html']],
        ['Kesehatan Kulit', pages + 'kesehatan_kulit.html', ['kesehatan_kulit.html', 'informasi_kulit.html']],
        ['Kesehatan Hewan', pages + 'kesehatan_hewan.html', ['kesehatan_hewan.html', 'informasi_hewan.html', 'chat_hewan.html']],
        ['Toko', pages + 'toko.html', ['toko.html']],
        ['Asuransi', pages + 'asuransi.html', ['asuransi.html']],
        ['Diet & Gizi', pages + 'diet_gizi.html', ['diet_gizi.html', 'informasi_gizi.html', 'chat_gizi.html']],
        ['BMI', pages + 'bmi.html', ['bmi.html', 'bmi_faq.html']]
    ];

    var links = menu.map(function (m) {
        var aktif = m[2].indexOf(file) !== -1 ? ' class="active"' : '';
        return '<a href="' + m[1] + '"' + aktif + '>' + m[0] + '</a>';
    }).join('');

    document.body.insertAdjacentHTML('afterbegin',
        '<header class="hd-topnav">' +
            '<div class="hd-topnav-inner">' +
                '<a href="' + root + 'index.html" class="hd-logo">HeiDoc</a>' +
                '<nav class="hd-nav-links">' + links + '</nav>' +
                '<a href="' + pages + 'login.html" class="hd-login-btn" data-logout>Keluar</a>' +
            '</div>' +
        '</header>');
})();