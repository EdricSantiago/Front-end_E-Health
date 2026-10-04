# HeiDoc — Front-end E-Health

Aplikasi front-end bertema kesehatan (E-Health) yang dibangun menggunakan **HTML, CSS, dan JavaScript**, terinspirasi dari aplikasi kesehatan Halodoc.

## Teknologi

- HTML5
- CSS (struktur folder modular: `base`, `layout`, `components`, `pages`)
- JavaScript 

## Progres Fitur (per halaman)

### 🏠 Beranda (`index.html`)
Landing page utama: navbar, layanan kesehatan, daftar dokter rekomendasi, dan artikel kesehatan.
 
### 🔐 Login (`pages/login.html`)
Form login dengan username & password, termasuk fitur tampilkan/sembunyikan password yang sudah berfungsi menggunakan javascript
 
### 🛒 Toko Kesehatan (`pages/toko.html`)
List produk obat dengan filter kategori Obat, Vitamin, dan lainnya
 
### ⚖️ Kalkulator BMI (`pages/bmi.html` + `pages/bmi_faq.html`)
Kalkulator Body Mass Index dengan pemilihan gender, serta halaman FAQ terpisah yang menjelaskan apa itu BMI dan cara membacanya
 
### 💬 Chat Dokter (`pages/chat_dokter.html`)
Tampilan chat sederhana dengan dokter, nama & spesialisasi dokter diambil dari parameter URL, lengkap dengan form kirim pesan
 
### 🩹 Kesehatan Kulit (`pages/kesehatan_kulit.html`)
Halaman layanan kesehatan kulit: hero section, daftar layanan (konsultasi, dll.), dan tombol yang mengarahkan ke bagian dokter/chat, serta navbar atas yang sama dengan beranda
 
### 📖 Informasi Kulit (`pages/informasi_kulit.html`)
Kumpulan artikel singkat seputar masalah kulit umum (jerawat, komedo, dll.) beserta tips perawatannya
 
### 🐾 Kesehatan Hewan (`pages/kesehatan_hewan.html`)
Halaman layanan kesehatan untuk hewan peliharaan, dan daftar layanan terkait, serta navbar atas yang sama dengan beranda
 
### 🧭 Layanan (`pages/layanan.html`)
Halaman daftar "Layanan Favorit" dalam bentuk grid ikon (Chat Dokter, Toko Kesehatan, Lab & Vaksin, dll.)
 
### 🧩 Komponen Bottom Navigation (`pages/components/bottom_nav.html`)
Navigasi bawah (Beranda, Riwayat, Chat, Profil, Pengaturan) yang di-load secara dinamis ke tiap halaman lewat `js/components/bottom_nav.js`, dengan path yang otomatis menyesuaikan apakah halaman ada di root atau di dalam folder `pages/`


### 🩺 Daftar Dokter (`pages/daftar_dokter.html`)
Halaman daftar lengkap semua dokter yang dapat pindah ke bagian page lain seperti kesehatan kulit, chat dokter dan lain lain
 
### 👤 Profil (`pages/profile.html`)
Halaman profil pengguna yang menampilkan nama, jenis kelamin, dan umur.
 
### 🕘 Riwayat (`pages/riwayat.html`)
Daftar aktivitas pengguna dimana pengguna dapat melihat kembali semua aktivitas yang dilakukan baik dari konsultasi maupun perhitungan BMI
 
### ⚙️ Pengaturan (`pages/pengaturan.html`)
Halaman pengaturan dimana pengguna dapat mematikan dan menyalakan suara dan notifikasi serta dapat merubah bahasa indonesia menjadi bahasa inggris