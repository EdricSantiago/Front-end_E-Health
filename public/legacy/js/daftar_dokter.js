const listEl = document.getElementById("dl-list");
const kosongEl = document.getElementById("dl-kosong");
const cariEl = document.getElementById("cari-dokter");
const filterEl = document.getElementById("filter-spesialis");

function tampilkanDokter() {
    const kata = cariEl.value.toLowerCase();
    const spesialis = filterEl.value;

    const hasil = dataDokter.filter(function (d) {
        const cocokNama = d.nama.toLowerCase().includes(kata);
        const cocokSpesialis = spesialis === "" || d.spesialis === spesialis;
        return cocokNama && cocokSpesialis;
    });

    listEl.innerHTML = "";

    hasil.forEach(function (d) {
        const kartu = document.createElement("div");
        kartu.className = "dl-card";
        kartu.innerHTML =
            '<div class="dl-foto">Foto Dokter</div>' +
            '<div class="dl-info">' +
                "<h3>" + d.nama + "</h3>" +
                "<p>" + d.spesialis + "</p>" +
                '<p class="dl-rating">⭐ ' + d.rating + "</p>" +
                "<p>Pengalaman " + d.pengalaman + "</p>" +
                "<p>" + formatRupiah(d.biaya) + " / konsultasi</p>" +
                '<div class="dl-tombol">' +
                    '<button type="button" onclick="lihatDetail(' + d.id + ')">Lihat Detail</button>' +
                    '<button type="button" class="dl-outline" onclick="lihatJadwal(' + d.id + ')">Jadwal</button>' +
                "</div>" +
            "</div>";
        listEl.appendChild(kartu);
    });

    kosongEl.style.display = hasil.length === 0 ? "block" : "none";
}

function lihatDetail(id) {
    window.location.href = "detail_dokter.html?id=" + id;
}

function lihatJadwal(id) {
    window.location.href = "jadwal_dokter.html?id=" + id;
}

cariEl.addEventListener("input", tampilkanDokter);
filterEl.addEventListener("change", tampilkanDokter);

tampilkanDokter();
