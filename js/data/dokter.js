// Data dokter (dipakai di daftar, detail, dan jadwal dokter)
const dataDokter = [
    {
        id: 1,
        nama: "dr. Andini Putri",
        spesialis: "Dokter Kulit",
        rating: 4.9,
        pengalaman: "8 tahun",
        biaya: 75000,
        tentang: "Berpengalaman menangani jerawat, komedo, flek hitam, dan masalah kulit lainnya.",
        jadwal: {
            Senin: ["09:00", "10:00", "13:00"],
            Rabu: ["09:00", "11:00"],
            Jumat: ["13:00", "14:00", "15:00"]
        }
    },
    {
        id: 2,
        nama: "dr. Raka Pratama",
        spesialis: "Dokter Kulit",
        rating: 4.8,
        pengalaman: "6 tahun",
        biaya: 70000,
        tentang: "Fokus pada perawatan kulit berjerawat dan kulit sensitif.",
        jadwal: {
            Selasa: ["10:00", "11:00", "14:00"],
            Kamis: ["09:00", "10:00"],
            Sabtu: ["09:00", "10:00", "11:00"]
        }
    },
    {
        id: 3,
        nama: "dr. Citra Lestari",
        spesialis: "Dokter Kulit",
        rating: 4.9,
        pengalaman: "10 tahun",
        biaya: 90000,
        tentang: "Menangani masalah kulit kering, alergi kulit, dan perawatan anti penuaan.",
        jadwal: {
            Senin: ["14:00", "15:00"],
            Rabu: ["13:00", "14:00", "15:00"],
            Jumat: ["09:00", "10:00"]
        }
    },
    {
        id: 4,
        nama: "drh. Bima Saputra",
        spesialis: "Dokter Hewan",
        rating: 4.7,
        pengalaman: "7 tahun",
        biaya: 65000,
        tentang: "Menangani kesehatan kucing dan anjing, termasuk vaksinasi dan perawatan rutin.",
        jadwal: {
            Selasa: ["09:00", "10:00"],
            Kamis: ["13:00", "14:00", "15:00"],
            Sabtu: ["10:00", "11:00"]
        }
    }
];

function formatRupiah(angka) {
    return "Rp" + angka.toLocaleString("id-ID");
}

function cariDokter(id) {
    return dataDokter.find(function (d) {
        return d.id === Number(id);
    });
}

function ambilIdDariUrl() {
    return new URLSearchParams(window.location.search).get("id");
}
