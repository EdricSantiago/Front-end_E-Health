const dokterJadwal = cariDokter(ambilIdDariUrl());
let tanggalDipilih = "";
let jamDipilih = "";

if (!dokterJadwal) {
    document.getElementById("jd-isi").style.display = "none";
    document.getElementById("jd-tidak-ada").style.display = "block";
} else {
    document.getElementById("jd-nama").textContent = dokterJadwal.nama + " - " + dokterJadwal.spesialis;
    tampilkanJadwal();
}

function tampilkanJadwal() {
    const listEl = document.getElementById("jd-list");
    listEl.innerHTML = "";

    const tanggalList = tanggalTersedia(dokterJadwal, 14);

    tanggalList.forEach(function (item) {
        const baris = document.createElement("div");
        baris.className = "jd-hari";

        let jamHtml = "";
        item.jam.forEach(function (jam) {
            const penuh = slotTerpakai(dokterJadwal.id, item.tanggal, jam);
            jamHtml += '<button type="button" class="jd-jam' + (penuh ? " penuh" : "") + '"' +
                ' data-tanggal="' + item.tanggal + '" data-jam="' + jam + '"' +
                (penuh ? ' disabled title="Sudah dipesan"' : "") + ">" + jam + "</button>";
        });

        baris.innerHTML = "<h3>" + formatTanggal(item.tanggal) + '</h3><div class="jd-jam-list">' + jamHtml + "</div>";
        listEl.appendChild(baris);
    });

    document.querySelectorAll(".jd-jam:not(.penuh)").forEach(function (tombol) {
        tombol.addEventListener("click", function () {
            pilihJam(tombol);
        });
    });
}

function pilihJam(tombol) {
    document.querySelectorAll(".jd-jam").forEach(function (t) {
        t.classList.remove("dipilih");
    });

    tombol.classList.add("dipilih");
    tanggalDipilih = tombol.dataset.tanggal;
    jamDipilih = tombol.dataset.jam;

    document.getElementById("jd-pilihan").textContent =
        "Jadwal dipilih: " + formatTanggal(tanggalDipilih) + ", pukul " + jamDipilih;
    document.getElementById("jd-pesan").disabled = false;
}

document.getElementById("jd-pesan").addEventListener("click", function () {
    if (tanggalDipilih === "") return;

    window.location.href = "booking.html?id=" + dokterJadwal.id +
        "&tanggal=" + tanggalDipilih +
        "&jam=" + encodeURIComponent(jamDipilih);
});
