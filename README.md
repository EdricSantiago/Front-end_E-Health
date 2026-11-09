# HeiDoc — Next.js + React (tanpa Prisma)

Versi HeiDoc dari **Front-end_E-Health(2).zip** yang dirender melalui komponen React/TSX dan Next.js App Router. **Desain asli dipertahankan** dengan menyalin CSS modular dan gambar dari project HTML asli, bukan memakai template UI baru. Integrasi Prisma dan database sengaja **tidak** dimasukkan.

## Menjalankan project

Prasyarat Node.js **20.9 atau lebih baru**.

```bash
npm install
npm run dev
```

Buka `http://localhost:3000` → jika belum login, diarahkan ke `/login`.

**Akun demo:** username **`demo`**, password **`demo123`**. Anda juga bisa klik **Daftar di sini** untuk membuat akun demo sendiri, lalu login kembali. Gunakan login, bukan browser console, untuk pengujian.

### Fitur login

- Login **bukan sekadar tombol visual**: username/password diperiksa, pesan kesalahan ditampilkan, setelah berhasil masuk pengguna diarahkan ke Beranda.
- Registrasi akun lokal dengan konfirmasi password dan validasi input.
- Password akun yang didaftarkan dicatat sebagai *salted SHA-256 digest*, bukan teks biasa; ini **tetap bukan sistem autentikasi aman untuk produksi** karena verifikasi dan sesi dilakukan seluruhnya di browser.
- Sesi bertahan setelah refresh, halaman internal meminta login, ada logout lewat navbar dan pengaturan.
- Simulasi data pengguna di LocalStorage dipisahkan per akun pada proses login/logout.
- **Tidak ada API login, server authentication, Prisma, database, atau integrasi pembayaran.** Jangan isi informasi medis/akun sungguhan. Gunakan data dummy.

## Layout dan URL

Halaman utama: `/`. Route group `(auth)` mengelompokkan halaman autentikasi tanpa menambahkan segmen URL.

| Halaman | URL | File React |
|---|---|---|
| Beranda | `/` | `app/page.tsx` |
| Login & register | `/login` | `app/(auth)/login/page.tsx` |
| Profil, pengaturan, riwayat | `/profile`, `/pengaturan`, `/riwayat` | `app/(auth)/{profile,pengaturan,riwayat}/page.tsx` |
| Daftar dokter | `/dokter` | `app/dokter/page.tsx` |
| Detail dokter | `/dokter/1` | `app/dokter/[id]/page.tsx` |
| Jadwal & booking | `/dokter/jadwal?id=1`, `/dokter/booking?id=1&tanggal=YYYY-MM-DD&jam=09%3A00` | `app/dokter/{jadwal,booking}/page.tsx` |
| Chat dokter | `/dokter/chat` | `app/dokter/chat/page.tsx` |
| Toko kesehatan | `/toko` | `app/toko/page.tsx` |
| Menu layanan | `/layanan` | `app/layanan/page.tsx` |
| BMI & FAQ | `/layanan/bmi`, `/layanan/bmi/faq` | `app/layanan/bmi/.../page.tsx` |
| Kulit, hewan, gizi, asuransi | `/layanan/kulit`, `/layanan/hewan`, `/layanan/gizi`, `/layanan/asuransi` dan subrute info/chat | `app/layanan/.../page.tsx` |

## Struktur

```
app/
  (auth)/                  # Login, profil, pengaturan, riwayat
  dokter/                  # Daftar, detail dinamis, jadwal, booking, chat
  layanan/                 # Menu, BMI, kulit, hewan, gizi, asuransi
  toko/page.tsx
  layout.tsx               # React global layout + CSS original
  globals.css
  page.tsx                 # Beranda hasil migrasi HTML→TSX
styles/                    # Salinan CSS asli HeiDoc, seluruh class tetap sama
components/
  SiteChrome.tsx           # Navigasi atas dan route guard React
  BottomNav.tsx            # Navigasi bawah mobile
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
