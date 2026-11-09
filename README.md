# HeiDoc — Next.js + React (tanpa Prisma)

Versi HeiDoc dari **Front-end_E-Health(2).zip** yang dirender melalui komponen React/TSX dan Next.js App Router. **Desain asli dipertahankan** dengan menyalin CSS modular dan gambar dari project HTML asli, bukan memakai template UI baru. Integrasi Prisma dan database sengaja **tidak** dimasukkan.

## Menjalankan project

Prasyarat Node.js **20.9 atau lebih baru**.

```bash
npm install
npm run dev
```

Buka `http://localhost:3000` → jika belum login, diarahkan ke `/pages/login.html`.

**Akun demo:** username **`demo`**, password **`demo123`**. Anda juga bisa klik **Daftar di sini** untuk membuat akun demo sendiri, lalu login kembali. Gunakan login, bukan browser console, untuk pengujian.

### Fitur login

- Login **bukan sekadar tombol visual**: username/password diperiksa, pesan kesalahan ditampilkan, setelah berhasil masuk pengguna diarahkan ke Beranda.
- Registrasi akun lokal dengan konfirmasi password dan validasi input.
- Password akun yang didaftarkan dicatat sebagai *salted SHA-256 digest*, bukan teks biasa; ini **tetap bukan sistem autentikasi aman untuk produksi** karena verifikasi dan sesi dilakukan seluruhnya di browser.
- Sesi bertahan setelah refresh, halaman internal meminta login, ada logout lewat navbar dan pengaturan.
- Simulasi data pengguna di LocalStorage dipisahkan per akun pada proses login/logout.
- **Tidak ada API login, server authentication, Prisma, database, atau integrasi pembayaran.** Jangan isi informasi medis/akun sungguhan. Gunakan data dummy.

## Layout dan URL

Halaman utama: `/`.

Sesuai ZIP asli, setiap halaman selain beranda tersedia di `/pages/nama_halaman.html`, **walaupun sekarang file implementasinya `page.tsx` di App Router**. Ini untuk menjaga tautan antarkomponen dan interaksi asli tetap bekerja pada masa migrasi.

| Halaman | URL | File React |
|---|---|---|
| Login & register | `/pages/login.html` | `app/pages/login.html/page.tsx` |
| Beranda | `/` | `app/page.tsx` |
| Daftar dokter | `/pages/daftar_dokter.html` | `app/pages/daftar_dokter.html/page.tsx` |
| Detail dokter | `/pages/detail_dokter.html?id=1` | `app/pages/detail_dokter.html/page.tsx` |
| Jadwal dokter | `/pages/jadwal_dokter.html?id=1` | `app/pages/jadwal_dokter.html/page.tsx` |
| Booking | `/pages/booking.html?id=1&tanggal=YYYY-MM-DD&jam=09%3A00` | `app/pages/booking.html/page.tsx` |
| Toko kesehatan | `/pages/toko.html` | `app/pages/toko.html/page.tsx` |
| Profil | `/pages/profile.html` | `app/pages/profile.html/page.tsx` |
| Riwayat | `/pages/riwayat.html` | `app/pages/riwayat.html/page.tsx` |
| BMI | `/pages/bmi.html` | `app/pages/bmi.html/page.tsx` |
| Layanan lain | `/pages/layanan.html`, `/pages/asuransi.html`, `/pages/kesehatan_kulit.html`, `/pages/kesehatan_hewan.html`, `/pages/diet_gizi.html`, dan lainnya | `app/pages/.../page.tsx` |

## Struktur

```
app/
  layout.tsx               # React global layout + CSS original
  page.tsx                 # Beranda hasil migrasi HTML→TSX
  pages/
    login.html/page.tsx    # Native React state/form login & daftar
    toko.html/page.tsx     # UI toko asli dalam JSX
    ...                    # Halaman asli lainnya (JSX)
  styles/                  # Salinan CSS asli HeiDoc, seluruh class tetap sama
components/
  SiteChrome.tsx           # Navigasi atas, bawah, dan route guard React
  HomeEffects.tsx          # Carousel dan search di lifecycle React
  LegacyEffects.tsx        # Bridge sementara JS asli, agar fitur lama tetap aktif
lib/
  browser-auth.ts          # Auth demo/registrasi/session localStorage
  legacy-actions.ts        # Tindakan link dan tombol lama yang dipetakan eksplisit
public/
  assets/images/           # Gambar original dari ZIP
  legacy/js/               # Interaksi lama selama migrasi bertahap
```

## Progres migrasi (penting untuk 5 anggota)

Semua halaman HTML dari ZIP sudah dibuat sebagai **JSX/TSX dalam Next.js**. Login, navbar, bottom navigation dan home carousel/search sudah ditangani oleh React. Sementara ini beberapa fitur lama—misalnya jadwal, booking, kalkulator BMI, keranjang, profil, asuransi, riwayat, chat—masih memanfaatkan **JavaScript asli melalui `LegacyEffects.tsx`**, sehingga UI dan alur lama dapat tetap digunakan tanpa database. **Ini tahap transisi; belum semua event handler dipindahkan menjadi state React idiomatis.**

Untuk tahap tugas kelompok, pindahkan per halaman dari `public/legacy/js/` ke event handler/hooks React. Dengan begitu hasil akhir tidak perlu lagi `LegacyEffects.tsx` dan bisa dihubungkan dengan API Prisma nanti **tanpa mendesain ulang CSS**.

Lihat `docs/PEMBAGIAN_5_ORANG.md` untuk daftar tugas per orang.

## Pengujian yang disarankan

```bash
npm run typecheck
npm run build
npm run dev
```

Alur manual: buka root tanpa login → redirect login → salah password tidak bisa masuk → login `demo/demo123` → Beranda tampil → klik Dokter → jadwal → booking menggunakan data **dummy** → riwayat tercatat → buka Toko, BMI, Profil → logout → tidak bisa langsung membuka Beranda tanpa login → login kembali. Pada browser berbeda, akun dan riwayat lokal tidak terbagi.

**Batasan deployment:** Aplikasi statis/client-side dapat dideploy ke Vercel tanpa Prisma. Namun **akun dan riwayat hanya berada di browser pengguna**, tidak tersinkron antar perangkat. Untuk project final yang diwajibkan menyimpan ke database, kelak sambungkan ke API Next.js + Prisma / database hosted.
