var KUNCI_JANJI = "janji_dokter";
var NAMA_HARI = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
var NAMA_BULAN = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];

function ambilJanji() {
    try {
        return JSON.parse(localStorage.getItem(KUNCI_JANJI)) || [];
    } catch (e) {
        return [];
    }
}

function simpanJanji(daftar) {
    localStorage.setItem(KUNCI_JANJI, JSON.stringify(daftar));
}

function slotTerpakai(dokterId, tanggal, jam) {
    return ambilJanji().some(function (j) {
        return j.dokterId === Number(dokterId) &&
            j.tanggal === tanggal &&
            j.jam === jam &&
            j.status !== "Dibatalkan";
    });
}

function buatKode() {
    var huruf = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    var kode = "HD-";
    for (var i = 0; i < 5; i++) {
        kode += huruf.charAt(Math.floor(Math.random() * huruf.length));
    }
    return kode;
}

function tambahJanji(janji) {
    var daftar = ambilJanji();
    daftar.unshift(janji);
    simpanJanji(daftar);
    return janji;
}

function batalkanJanji(kode) {
    var daftar = ambilJanji();
    daftar.forEach(function (j) {
        if (j.kode === kode) j.status = "Dibatalkan";
    });
    simpanJanji(daftar);

    try {
        var riwayat = JSON.parse(localStorage.getItem("riwayat_user")) || [];
        riwayat.forEach(function (r) {
            if (r.kode === kode) r.status = "Dibatalkan";
        });
        localStorage.setItem("riwayat_user", JSON.stringify(riwayat));
    } catch (e) {}
}

function isoLokal(d) {
    var bulan = String(d.getMonth() + 1).padStart(2, "0");
    var hari = String(d.getDate()).padStart(2, "0");
    return d.getFullYear() + "-" + bulan + "-" + hari;
}

function parseIso(iso) {
    var p = iso.split("-");
    return new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
}

function formatTanggal(iso) {
    var d = parseIso(iso);
    return NAMA_HARI[d.getDay()] + ", " + d.getDate() + " " + NAMA_BULAN[d.getMonth()] + " " + d.getFullYear();
}

function tanggalTersedia(dokter, jumlahHari) {
    var hasil = [];
    for (var i = 1; i <= jumlahHari; i++) {
        var d = new Date();
        d.setHours(0, 0, 0, 0);
        d.setDate(d.getDate() + i);

        var jamHari = dokter.jadwal[NAMA_HARI[d.getDay()]];
        if (jamHari) {
            hasil.push({ tanggal: isoLokal(d), jam: jamHari });
        }
    }
    return hasil;
}
