(function () {
    var BIAYA_LAYANAN = 5000;
    var TAMBAHAN_VIDEO = 15000;

    var params = new URLSearchParams(window.location.search);
    var tanggal = params.get("tanggal") || "";
    var jam = params.get("jam") || "";
    var dokterBooking = cariDokter(ambilIdDariUrl());
    var janjiAktif = null;

    function el(id) {
        return document.getElementById(id);
    }

    function nilaiRadio(nama) {
        var terpilih = document.querySelector('input[name="' + nama + '"]:checked');
        return terpilih ? terpilih.value : "";
    }

    // Pastikan link-nya masuk akal: dokter ada, tanggal valid & belum lewat, jam sesuai jadwal dokter
    function jadwalValid() {
        if (!dokterBooking || !/^\d{4}-\d{2}-\d{2}$/.test(tanggal)) return false;

        var d = parseIso(tanggal);
        if (isNaN(d.getTime()) || isoLokal(d) !== tanggal) return false;

        var hariIni = new Date();
        hariIni.setHours(0, 0, 0, 0);
        if (d < hariIni) return false;

        var jamHari = dokterBooking.jadwal[NAMA_HARI[d.getDay()]];
        return !!jamHari && jamHari.indexOf(jam) !== -1;
    }

    function tampilkan(idTampil) {
        ["bk-invalid", "bk-form-view", "bk-sukses-view"].forEach(function (id) {
            el(id).hidden = id !== idTampil;
        });
        window.scrollTo(0, 0);
    }

    function inisial(nama) {
        var kata = nama.replace(/^(dr\.|drh\.)\s*/i, "").split(" ");
        return (kata[0].charAt(0) + (kata[1] ? kata[1].charAt(0) : "")).toUpperCase();
    }

    function totalBiaya(metode) {
        return dokterBooking.biaya + BIAYA_LAYANAN + (metode === "video" ? TAMBAHAN_VIDEO : 0);
    }

    function hitungRincian() {
        var metode = nilaiRadio("metode");
        el("rc-konsultasi").textContent = formatRupiah(dokterBooking.biaya);
        el("rc-layanan").textContent = formatRupiah(BIAYA_LAYANAN);
        el("rc-video").textContent = formatRupiah(TAMBAHAN_VIDEO);
        el("rc-video-baris").hidden = metode !== "video";
        el("rc-total").textContent = formatRupiah(totalBiaya(metode));
    }

    // ---------- isi awal ----------
    function isiRingkasan() {
        el("bk-avatar").textContent = inisial(dokterBooking.nama);
        el("bk-dokter").textContent = dokterBooking.nama;
        el("bk-spesialis").textContent = dokterBooking.spesialis;
        el("bk-waktu").textContent = formatTanggal(tanggal) + ", pukul " + jam;

        var linkJadwal = "jadwal_dokter.html?id=" + dokterBooking.id;
        el("bk-ubah").href = linkJadwal;
        el("bk-pilih-lain").href = linkJadwal;
    }

    // Ambil nama & usia dari halaman Profile kalau sudah pernah diisi
    function isiDariProfil() {
        try {
            var profil = JSON.parse(localStorage.getItem("profile_data"));
            if (profil && profil.name) el("bk-nama").value = profil.name;
            if (profil && profil.age) el("bk-usia").value = profil.age;
        } catch (e) {}

        // Kalau belum ada data profil, pakai username dari login
        if (!el("bk-nama").value) {
            var user = localStorage.getItem("heidoc_user");
            if (user) el("bk-nama").value = user;
        }
    }

    // ---------- validasi ----------
    function setError(idInput, idErr, pesan) {
        el(idErr).textContent = pesan;
        if (idInput) el(idInput).classList.toggle("salah", pesan !== "");
        return pesan === "";
    }

    function validasi() {
        var nama = el("bk-nama").value.trim();
        var usia = Number(el("bk-usia").value);
        var keluhan = el("bk-keluhan").value.trim();

        var ok = true;
        ok = setError("bk-nama", "err-nama", nama.length < 3 ? "Nama minimal 3 huruf." : "") && ok;
        ok = setError("bk-usia", "err-usia", !usia || usia < 1 || usia > 120 ? "Isi usia antara 1 sampai 120 tahun." : "") && ok;
        ok = setError("bk-keluhan", "err-keluhan", keluhan.length < 10 ? "Ceritakan keluhan minimal 10 huruf supaya dokter paham." : "") && ok;
        ok = setError(null, "err-bayar", nilaiRadio("bayar") === "" ? "Pilih salah satu metode pembayaran." : "") && ok;
        return ok;
    }

    // ---------- submit ----------
    function kirimBooking(e) {
        e.preventDefault();
        if (!validasi()) {
            var salah = document.querySelector(".salah");
            if (salah) salah.focus();
            return;
        }

        // Cek ulang: bisa jadi slot dipesan di tab lain saat form diisi
        if (slotTerpakai(dokterBooking.id, tanggal, jam)) {
            el("bk-slot-error").hidden = false;
            el("bk-slot-error").scrollIntoView({ behavior: "smooth", block: "center" });
            return;
        }

        var metode = nilaiRadio("metode");
        janjiAktif = tambahJanji({
            kode: buatKode(),
            dokterId: dokterBooking.id,
            dokterNama: dokterBooking.nama,
            spesialis: dokterBooking.spesialis,
            tanggal: tanggal,
            jam: jam,
            pasien: el("bk-nama").value.trim(),
            usia: Number(el("bk-usia").value),
            keluhan: el("bk-keluhan").value.trim(),
            metode: metode,
            bayar: nilaiRadio("bayar"),
            total: totalBiaya(metode),
            status: "Terjadwal"
        });

        // Masuk ke halaman Riwayat (pakai helper punya teman satu tim)
        if (typeof tambahRiwayat === "function") {
            tambahRiwayat({
                type: "konsultasi",
                title: "Booking dengan " + janjiAktif.dokterNama,
                desc: janjiAktif.spesialis + " - " + formatTanggal(janjiAktif.tanggal) + ", " + janjiAktif.jam,
                status: "Terjadwal",
                kode: janjiAktif.kode
            });
        }

        tampilkanSukses();
    }

    // ---------- halaman sukses ----------
    function tampilkanSukses() {
        var j = janjiAktif;
        el("sk-sub").textContent = "Simpan kode ini. Dokter akan menunggu pada jadwal yang kamu pilih.";
        el("sk-kode").textContent = j.kode;
        el("sk-dokter").textContent = j.dokterNama;
        el("sk-waktu").textContent = formatTanggal(j.tanggal) + ", " + j.jam;
        el("sk-pasien").textContent = j.pasien + " (" + j.usia + " th)";
        el("sk-metode").textContent = j.metode === "video" ? "Video call" : "Chat";
        el("sk-bayar").textContent = j.bayar;
        el("sk-total").textContent = formatRupiah(j.total);
        tampilkan("bk-sukses-view");
    }

    // ---------- simpan ke kalender (.ics) ----------
    function tulisIcs(j) {
        function stempel(iso, jamStr, tambahMenit) {
            var p = jamStr.split(":");
            var d = parseIso(iso);
            d.setHours(Number(p[0]), Number(p[1]) + tambahMenit, 0, 0);
            return d.getFullYear() +
                String(d.getMonth() + 1).padStart(2, "0") +
                String(d.getDate()).padStart(2, "0") + "T" +
                String(d.getHours()).padStart(2, "0") +
                String(d.getMinutes()).padStart(2, "0") + "00";
        }

        var baris = [
            "BEGIN:VCALENDAR",
            "VERSION:2.0",
            "PRODID:-//HeiDoc//Booking//ID",
            "BEGIN:VEVENT",
            "UID:" + j.kode + "@heidoc",
            "DTSTAMP:" + new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z",
            "DTSTART:" + stempel(j.tanggal, j.jam, 0),
            "DTEND:" + stempel(j.tanggal, j.jam, 30),
            "SUMMARY:Konsultasi dengan " + j.dokterNama,
            "DESCRIPTION:Kode booking " + j.kode + " (" + (j.metode === "video" ? "Video call" : "Chat") + ")",
            "END:VEVENT",
            "END:VCALENDAR"
        ];
        return baris.join("\r\n");
    }

    function unduhKalender() {
        var blob = new Blob([tulisIcs(janjiAktif)], { type: "text/calendar;charset=utf-8" });
        var url = URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url;
        a.download = "janji-" + janjiAktif.kode + ".ics";
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    }

    // ---------- batalkan janji ----------
    function setInfo(teks) {
        el("sk-info").textContent = teks;
        el("sk-info").hidden = false;
    }

    function konfirmasiBatal(tampil) {
        el("sk-konfirmasi").hidden = !tampil;
        el("sk-batal").hidden = tampil;
    }

    function prosesBatal() {
        batalkanJanji(janjiAktif.kode);
        janjiAktif.status = "Dibatalkan";

        el("sk-status").textContent = "Dibatalkan";
        el("sk-status").classList.add("batal");
        el("bk-tiket").classList.add("dibatalkan");
        el("sk-kalender").disabled = true;
        el("sk-batal").hidden = true;
        el("sk-konfirmasi").hidden = true;
        setInfo("Janji dibatalkan. Jadwal ini bisa dipesan lagi, dan status di Riwayat ikut berubah.");
    }

    // ---------- mulai ----------
    if (!jadwalValid()) {
        tampilkan("bk-invalid");
        return;
    }

    isiRingkasan();
    isiDariProfil();
    hitungRincian();
    tampilkan("bk-form-view");

    el("bk-form").addEventListener("submit", kirimBooking);

    document.querySelectorAll('input[name="metode"]').forEach(function (r) {
        r.addEventListener("change", hitungRincian);
    });

    el("bk-keluhan").addEventListener("input", function () {
        el("bk-hitung").textContent = el("bk-keluhan").value.length + "/300";
    });

    ["bk-nama", "bk-usia", "bk-keluhan"].forEach(function (id) {
        el(id).addEventListener("input", function () {
            el(id).classList.remove("salah");
        });
    });

    el("sk-kalender").addEventListener("click", unduhKalender);
    el("sk-batal").addEventListener("click", function () { konfirmasiBatal(true); });
    el("sk-tidak").addEventListener("click", function () { konfirmasiBatal(false); });
    el("sk-ya").addEventListener("click", prosesBatal);
})();
