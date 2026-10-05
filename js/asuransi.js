(function () {
    var KUNCI = "asuransi_user";

    function el(id) {
        return document.getElementById(id);
    }

    function rupiah(angka) {
        return "Rp " + angka.toLocaleString("id-ID");
    }

    function hargaPaket(paket) {
        var kartu = document.querySelector('.as-card[data-paket="' + paket + '"]');
        return Number(kartu.getAttribute("data-harga"));
    }

    function hitungTotal() {
        var peserta = Number(el("as-peserta").value) || 0;
        el("as-total").textContent = rupiah(hargaPaket(el("as-paket").value) * peserta);
    }

    function buatKode() {
        var huruf = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
        var kode = "AS-";
        for (var i = 0; i < 5; i++) {
            kode += huruf.charAt(Math.floor(Math.random() * huruf.length));
        }
        return kode;
    }

    function tampilkan(sukses) {
        el("as-form-wrap").hidden = sukses;
        el("as-sukses").hidden = !sukses;
    }

    function tampilkanPolis(polis) {
        el("as-kode").textContent = polis.kode;
        el("as-ringkasan").textContent = "Paket " + polis.paket + " untuk " + polis.peserta +
            " peserta, premi " + rupiah(polis.total) + "/bulan.";
        tampilkan(true);
    }

    function tampilkanError(pesan) {
        el("as-error").textContent = pesan;
        el("as-error").hidden = !pesan;
    }

    try {
        var profil = JSON.parse(localStorage.getItem("profile_data"));
        if (profil && profil.name) el("as-nama").value = profil.name;
        if (profil && profil.age) el("as-usia").value = profil.age;
    } catch (e) {}
    
    document.querySelectorAll(".as-card .as-btn").forEach(function (tombol) {
        tombol.addEventListener("click", function () {
            el("as-paket").value = tombol.closest(".as-card").getAttribute("data-paket");
            hitungTotal();
            tampilkan(false);
        });
    });

    el("as-paket").addEventListener("change", hitungTotal);
    el("as-peserta").addEventListener("input", hitungTotal);

    el("as-form").addEventListener("submit", function (e) {
        e.preventDefault();

        var nama = el("as-nama").value.trim();
        var usia = Number(el("as-usia").value);
        var peserta = Number(el("as-peserta").value);

        if (!nama) return tampilkanError("Nama lengkap wajib diisi.");
        if (!usia || usia < 1 || usia > 65) return tampilkanError("Usia harus antara 1 dan 65 tahun.");
        if (!peserta || peserta < 1 || peserta > 6) return tampilkanError("Jumlah peserta harus antara 1 dan 6.");
        tampilkanError("");

        var paket = el("as-paket").value;
        var polis = {
            kode: buatKode(),
            nama: nama,
            paket: el("as-paket").options[el("as-paket").selectedIndex].text,
            peserta: peserta,
            total: hargaPaket(paket) * peserta
        };
        localStorage.setItem(KUNCI, JSON.stringify(polis));

        if (typeof tambahRiwayat === "function") {
            tambahRiwayat({
                type: "asuransi",
                title: "Asuransi " + polis.paket,
                desc: polis.peserta + " peserta - " + rupiah(polis.total) + "/bulan",
                status: "Aktif",
                kode: polis.kode
            });
        }

        tampilkanPolis(polis);
    });

    el("as-ubah").addEventListener("click", function () {
        tampilkan(false);
    });

    hitungTotal();

    try {
        var tersimpan = JSON.parse(localStorage.getItem(KUNCI));
        if (tersimpan) tampilkanPolis(tersimpan);
    } catch (e) {}
})();