$(function () {
    var icon = {
        konsultasi: 'assets/images/icons/chat.png',
        pesanan: 'assets/images/icons/obat.png',
        bmi: 'assets/images/icons/bmi.png'
    };

    function ambilSemuaRiwayat() {
        var tersimpan = JSON.parse(localStorage.getItem('riwayat_user') || '[]');
        return tersimpan.concat(riwayatDummy);
    }

    function tampilkan(filter) {
        var semua = ambilSemuaRiwayat();
        var data = filter === 'semua' ? semua : semua.filter(function (d) {
            return d.type === filter;
        });

        $('#history-list').empty();

        data.forEach(function (d) {
            var html = '<div class="history-item">' +
                '<img src="' + icon[d.type] + '" alt="">' +
                '<div class="history-body">' +
                '<p class="history-title">' + d.title + '</p>' +
                '<p class="history-desc">' + d.desc + '</p>' +
                '</div>' +
                '<span class="history-status">' + d.status + '</span>' +
                '</div>';
            $('#history-list').append(html);
        });

        $('#history-empty').prop('hidden', data.length > 0);
    }

    $('.tab').on('click', function () {
        $('.tab').removeClass('active');
        $(this).addClass('active');
        tampilkan($(this).data('filter'));
    });

    tampilkan('semua');
});