document.addEventListener('DOMContentLoaded', function () {
    var KEY = 'heidoc_settings';
    var simpanan = {};
    try { simpanan = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) {}

    var notif = document.getElementById('set-notif');
    var sound = document.getElementById('set-sound');
    var history = document.getElementById('set-history');
    var optId = document.getElementById('lang-opt-id');
    var optEn = document.getElementById('lang-opt-en');

    notif.checked = simpanan.notif !== undefined ? simpanan.notif : true;
    sound.checked = simpanan.sound !== undefined ? simpanan.sound : true;
    history.checked = simpanan.history !== undefined ? simpanan.history : true;

    var bahasa = simpanan.lang || 'id';
    setLangActive(bahasa);

    function setLangActive(lang) {
        optId.classList.toggle('active', lang === 'id');
        optEn.classList.toggle('active', lang === 'en');
    }

    function simpan(lang) {
        localStorage.setItem(KEY, JSON.stringify({
            notif: notif.checked,
            sound: sound.checked,
            history: history.checked,
            lang: lang || bahasa
        }));
    }

    notif.addEventListener('change', function () { simpan(); });
    sound.addEventListener('change', function () { simpan(); });
    history.addEventListener('change', function () { simpan(); });

    optId.addEventListener('click', function () {
        bahasa = 'id';
        setLangActive(bahasa);
        simpan(bahasa);
    });

    optEn.addEventListener('click', function () {
        bahasa = 'en';
        setLangActive(bahasa);
        simpan(bahasa);
    });

    var profil = localStorage.getItem('profile_data');
    if (profil) {
        try {
            var data = JSON.parse(profil);
            if (data.name) {
                var nameEl = document.getElementById('pengguna-nama');
                if (nameEl) nameEl.textContent = data.name;
            }
        } catch (e) {}
    }

    document.getElementById('btn-logout').addEventListener('click', function () {
        if (confirm('Yakin ingin keluar?')) {
            heidocLogout();
            window.location.href = 'login.html';
        }
    });
});