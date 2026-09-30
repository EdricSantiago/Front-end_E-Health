const dokterJadwal = cariDokter(ambilIdDariUrl());
let hariDipilih = "";
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

    Object.keys(dokterJadwal.jadwal).forEach(function (hari) {
        const baris = document.createElement("div");
        baris.className = "jd-hari";

        let jamHtml = "";
        dokterJadwal.jadwal[hari].forEach(function (jam) {
            jamHtml += '<button type="button" class="jd-jam" data-hari="' + hari + '" data-jam="' + jam + '">' + jam + "</button>";
        });

        baris.innerHTML = "<h3>" + hari + '</h3><div class="jd-jam-list">' + jamHtml + "</div>";
        listEl.appendChild(baris);
    });

    document.querySelectorAll(".jd-jam").forEach(function (tombol) {
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
    hariDipilih = tombol.dataset.hari;
    jamDipilih = tombol.dataset.jam;

    document.getElementById("jd-pilihan").textContent =
        "Jadwal dipilih: " + hariDipilih + ", pukul " + jamDipilih;
}

document.getElementById("jd-pesan").addEventListener("click", function () {
    if (hariDipilih === "") {
        alert("Pilih jadwal terlebih dahulu.");
        return;
    }

    alert("Janji dengan " + dokterJadwal.nama + " berhasil dibuat pada hari " + hariDipilih + " pukul " + jamDipilih + ".");
});
