document.addEventListener('DOMContentLoaded', function () {
    var icon = {
        konsultasi: '💬',
        pesanan: '🛍️',
        bmi: '📊'
    };

    function ambilSemuaRiwayat() {
        var tersimpan = [];
        try { tersimpan = JSON.parse(localStorage.getItem('riwayat_user')) || []; } catch (e) {}
        return tersimpan.concat(riwayatDummy);
    }

    function tampilkan(filter) {
        var semua = ambilSemuaRiwayat();
        var data = filter === 'semua' ? semua : semua.filter(function (d) {
            return d.type === filter;
        });

        var list = document.getElementById('riwayat-list');
        list.innerHTML = '';

        data.forEach(function (d) {
            var item = document.createElement('div');
            item.className = 'riwayat-item';
            item.innerHTML =
                '<div class="riwayat-icon">' + icon[d.type] + '</div>' +
                '<div class="riwayat-body">' +
                '<p class="riwayat-title">' + d.title + '</p>' +
                '<p class="riwayat-desc">' + d.desc + '</p>' +
                '</div>' +
                '<span class="riwayat-status">' + d.status + '</span>';
            list.appendChild(item);
        });

        document.getElementById('riwayat-kosong').hidden = data.length > 0;
    }

    var tabs = document.querySelectorAll('.tab-chip');
    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            tabs.forEach(function (t) { t.classList.remove('active'); });
            tab.classList.add('active');
            tampilkan(tab.getAttribute('data-filter'));
        });
    });

    tampilkan('semua');
});