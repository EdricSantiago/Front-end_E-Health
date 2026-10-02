# HeiDoc — Front-end E-Health

Aplikasi front-end bertema kesehatan (E-Health) yang dibangun menggunakan **HTML, CSS, dan JavaScript**, terinspirasi dari aplikasi kesehatan Halodoc.

## Teknologi

- HTML5
- CSS (struktur folder modular: `base`, `layout`, `components`, `pages`)
- JavaScript 

## Progres Fitur (per halaman)

### 🏠 Beranda (`index.html`)
Landing page utama: navbar, hero section dengan sapaan dinamis sesuai jam (pagi/siang/sore/malam), carousel banner promo, kolom pencarian, grid layanan kesehatan, daftar dokter rekomendasi, dan artikel kesehatan.
 
### 🔐 Login (`pages/login.html`)
Form login dengan username & password, termasuk fitur tampilkan/sembunyikan password (ikon mata) yang sudah berfungsi via JavaScript.
 
### 🛒 Toko Kesehatan (`pages/toko.html`)
List produk obat dalam bentuk grid card (gambar, nama, harga, diskon, harga coret), dilengkapi filter kategori (Semua / Obat & Perawatan / Vitamin & Suplemen / Kesehatan Lainnya) dan tombol "Tambah +" dengan feedback visual saat diklik.
 
### ⚖️ Kalkulator BMI (`pages/bmi.html` + `pages/bmi_faq.html`)
Kalkulator Body Mass Index dengan pemilihan gender, serta halaman FAQ terpisah yang menjelaskan apa itu BMI dan cara membacanya.
 
### 💬 Chat Dokter (`pages/chat_dokter.html`)
Tampilan chat sederhana dengan dokter, nama & spesialisasi dokter diambil dari parameter URL (misal dari halaman Kesehatan Kulit), lengkap dengan form kirim pesan.
 
### 🩹 Kesehatan Kulit (`pages/kesehatan_kulit.html`)
Halaman layanan kesehatan kulit: hero section, daftar layanan (konsultasi, dll.), dan tombol yang mengarahkan ke bagian dokter/chat.
 
### 📖 Informasi Kulit (`pages/informasi_kulit.html`)
Kumpulan artikel singkat seputar masalah kulit umum (jerawat, komedo, dll.) beserta tips perawatannya.
 
### 🐾 Kesehatan Hewan (`pages/kesehatan_hewan.html`)
Halaman layanan kesehatan untuk hewan peliharaan, dengan hero section dan daftar layanan terkait.
 
### 🧭 Layanan (`pages/layanan.html`)
Halaman daftar "Layanan Favorit" dalam bentuk grid ikon (Chat Dokter, Toko Kesehatan, Lab & Vaksin, dll.).
 
### 🧩 Komponen Bottom Navigation (`pages/components/bottom_nav.html`)
Navigasi bawah (Beranda, Riwayat, Chat, Profil, Pengaturan) yang di-load secara dinamis ke tiap halaman lewat `js/components/bottom_nav.js`, dengan path yang otomatis menyesuaikan apakah halaman ada di root atau di dalam folder `pages/`.


