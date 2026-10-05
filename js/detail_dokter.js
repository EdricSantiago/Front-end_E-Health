const dokter = cariDokter(ambilIdDariUrl());

if (!dokter) {
    document.getElementById("dd-card").style.display = "none";
    document.getElementById("dd-detail").style.display = "none";
    document.getElementById("dd-tidak-ada").style.display = "block";
} else {
    document.title = dokter.nama + " - HeiDoc";

    document.getElementById("dd-nama").textContent = dokter.nama;
    document.getElementById("dd-spesialis").textContent = dokter.spesialis;
    document.getElementById("dd-rating").textContent = "⭐ " + dokter.rating;
    document.getElementById("dd-tentang").textContent = dokter.tentang;
    document.getElementById("dd-pengalaman").textContent = dokter.pengalaman;
    document.getElementById("dd-biaya").textContent = formatRupiah(dokter.biaya);

    document.getElementById("btn-chat").onclick = function () {
        window.location.href = "chat_dokter.html?doctor=" + encodeURIComponent(dokter.nama);
    };

    document.getElementById("btn-jadwal").onclick = function () {
        window.location.href = "jadwal_dokter.html?id=" + dokter.id;
    };
}
