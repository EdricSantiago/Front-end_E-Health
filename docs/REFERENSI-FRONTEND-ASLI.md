# HeiDoc — Front-end E-Health

Aplikasi front-end bertema kesehatan (E-Health) yang dibangun menggunakan **HTML, CSS, dan JavaScript**, terinspirasi dari aplikasi kesehatan Halodoc.

## Teknologi

- HTML5
- CSS (struktur folder modular: `base`, `layout`, `components`, `pages`)
- JavaScript 

## Progres Fitur (per halaman)

### 🔐 Login (`pages/loginpage`)
Halaman pertama aplikasi. Form login dengan username & password, fitur tampilkan/sembunyikan password, menyimpan sesi, dan mengarahkan ke beranda setelah berhasil masuk. Logika ada di `js/login.js`, guard halaman di `js/auth.js`.

### 🏠 Beranda (`indexpage`)
Landing page utama (hanya bisa diakses setelah login): navbar, banner carousel, pencarian layanan, layanan kesehatan, daftar dokter rekomendasi, dan artikel kesehatan.

### 🛒 Toko Kesehatan (`pages/tokopage`)
List produk obat dengan filter kategori Obat, Vitamin, dan lainnya

### ⚖️ Kalkulator BMI (`pages/bmipage` + `pages/bmi_faqpage`)
Kalkulator Body Mass Index dengan pemilihan gender, serta halaman FAQ terpisah yang menjelaskan apa itu BMI dan cara membacanya

### 🩺 Daftar Dokter (`pages/daftar_dokterpage`)
Halaman daftar lengkap semua dokter yang dapat pindah ke bagian page lain seperti kesehatan kulit, chat dokter dan lain lain. Data dokter dipusatkan di `js/data/dokter.js`.

### 🧑‍⚕️ Detail Dokter (`pages/detail_dokterpage`)
Profil lengkap dokter: tentang dokter, rating, pengalaman, dan biaya konsultasi, dengan tombol menuju jadwal dokter.

### 📅 Jadwal Dokter (`pages/jadwal_dokterpage`)
Pilih tanggal dan jam praktik dokter. Slot yang sudah dipesan ditandai penuh, lalu pengguna lanjut ke halaman booking.

### 📝 Booking Konsultasi (`pages/bookingpage`)
Form booking konsultasi: data pasien (nama & usia terisi otomatis dari Profil), pilihan cara konsultasi (chat atau video), rincian biaya, dan pembayaran. Setelah berhasil, janji tersimpan dengan kode booking dan tercatat di Riwayat.

### 💬 Chat Dokter (`pages/chat_dokterpage`)
Tampilan chat sederhana dengan dokter, nama & spesialisasi dokter diambil dari parameter URL, lengkap dengan form kirim pesan

### 🩹 Kesehatan Kulit (`pages/kesehatan_kulitpage`)
Halaman layanan kesehatan kulit: hero section, daftar layanan (konsultasi, dll.), dan tombol yang mengarahkan ke bagian dokter/chat, serta navbar atas yang sama dengan beranda

### 📖 Informasi Kulit (`pages/informasi_kulitpage`)
Kumpulan artikel singkat seputar masalah kulit umum (jerawat, komedo, dll.) beserta tips perawatannya

### 🐾 Kesehatan Hewan (`pages/kesehatan_hewanpage`)
Halaman layanan kesehatan untuk hewan peliharaan, daftar masalah kesehatan hewan, dan daftar dokter hewan, serta navbar atas yang sama dengan beranda

### 🐶 Chat Dokter Hewan (`pages/chat_hewanpage`) & Informasi Hewan (`pages/informasi_hewanpage`)
Chat dengan dokter hewan, serta artikel singkat seputar penyakit kulit, gangguan pencernaan, infeksi mata, dan masalah gigi pada hewan

### 🥗 Diet & Gizi (`pages/diet_gizipage`)
Halaman layanan diet dan gizi: konsultasi ahli gizi, tips pola makan, kebutuhan nutrisi, masalah diet umum, dan daftar ahli gizi

### 🍎 Chat Ahli Gizi (`pages/chat_gizipage`) & Informasi Gizi (`pages/informasi_gizipage`)
Chat dengan ahli gizi (nama diambil dari parameter URL), serta artikel singkat seputar pola makan seimbang, nutrisi, kebutuhan cairan, dan porsi makan

### 🛡️ Asuransi (`pages/asuransipage`)
Halaman asuransi kesehatan dengan tema yang sama: hero, penjelasan perlindungan (rawat jalan, rawat inap, keluarga), tiga paket (Basic, Plus, Premium), form pendaftaran dengan hitung total premi otomatis (nama & usia terisi dari Profil, validasi usia 1-65 dan 1-6 peserta), cara klaim, dan FAQ. Polis tersimpan di `localStorage` (`asuransi_user`) dan tercatat di Riwayat dengan tab filter Asuransi. Dapat dibuka dari beranda (menu layanan & navbar atas), halaman Layanan, dan navbar halaman lain. Harga dan manfaat hanya contoh.

### 🧭 Layanan (`pages/layananpage`)
Halaman daftar "Layanan Favorit" dalam bentuk grid ikon dan daftar layanan (Chat Dokter, Toko Kesehatan, Kalkulator BMI, Asuransi Kesehatan, dll.)

### 👤 Profil (`pages/profilepage`)
Halaman profil pengguna yang menampilkan nama, jenis kelamin, dan umur, dengan form edit profil.

### 🕘 Riwayat (`pages/riwayatpage`)
Daftar aktivitas pengguna dimana pengguna dapat melihat kembali semua aktivitas yang dilakukan baik dari konsultasi maupun perhitungan BMI

### ⚙️ Pengaturan (`pages/pengaturanpage`)
Halaman pengaturan dimana pengguna dapat mematikan dan menyalakan suara dan notifikasi, mengubah bahasa Indonesia menjadi bahasa Inggris, serta keluar (logout) dari akun

### 🧩 Komponen Bottom Navigation (`pages/components/bottom_nav.html`)
Navigasi bawah (Beranda, Riwayat, Chat, Profil, Pengaturan) yang di-load secara dinamis ke tiap halaman lewat `js/components/bottom_nav.js`, dengan path yang otomatis menyesuaikan apakah halaman ada di root atau di dalam folder `pages/`