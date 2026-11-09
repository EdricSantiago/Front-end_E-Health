# Rencana cicilan 5 orang — HeiDoc Next.js tanpa Prisma

## Aturan bersama

- **Jangan buat project Next.js berbeda per orang.** Semuanya berangkat dari repository ini.
- Gunakan branch `feature/nama-fitur`, Pull Request (PR), review, baru merge ke `main`.
- CSS asli disimpan di `styles`, aset gambar di `public/assets`. **Pertahankan className** supaya desain tetap sama.
- Untuk sementara tidak ada database. Fitur yang menyimpan data memakai data dummy / LocalStorage. Jangan unggah data kesehatan nyata.
- `app/layout.tsx`, `components/SiteChrome.tsx`, `app/globals.css`, dan `lib/browser-auth.ts` dimiliki tim layout/auth dan hanya diedit setelah koordinasi agar tidak sering konflik merge.
- Setiap PR harus berisi screenshot sebelum/sesudah, halaman yang diuji, dan commit yang sesuai.

| Anggota | File yang dimiliki | Cicilan pertama | Cicilan kedua | Cicilan ketiga | Cicilan keempat |
|---|---|---|---|---|---|
| 1: Beranda + UI | `app/page.tsx`, `components/{HomeEffects,SiteChrome,BottomNav}.tsx`, `styles/pages/home.css`, `styles/components/bottom_nav.css` | Periksa hero, topnav, bottomnav dan gambar asli | Carousel/search UI | Responsif mobile | Review style lintas halaman |
| 2: Dokter + Booking | `app/dokter/{page.tsx,[id],jadwal,booking,chat}`; terkait `public/legacy/js/{daftar_dokter,detail_dokter,jadwal_dokter,booking,chat_dokter}.js` | Daftar + search/filter dokter | Detail dokter | Jadwal + waktu | Booking + chat + riwayat dummy |
| 3: Toko | `app/toko/page.tsx`, `styles/pages/toko_kesehatan.css`, `public/legacy/js/toko.js` | Grid foto produk | Kategori & search | Keranjang + jumlah + total | Checkout dummy & riwayat |
| 4: Login, Profil, Pengaturan | `app/(auth)/{login,profile,pengaturan,riwayat}/page.tsx`, `lib/browser-auth.ts` | Login dan register lokal | Guard route dan logout | Profil ubah dan validasi | Riwayat/pengaturan tersimpan lokal |
| 5: Layanan lainnya | `app/layanan/{bmi,kulit,hewan,gizi,asuransi}/.../page.tsx` | BMI + FAQ | Kulit dan hewan | Diet & gizi | Asuransi + halaman info, audit aksesibilitas |

## Mengubah JavaScript lama menjadi React tanpa mengubah UI

Per halaman:

1. Buka halaman yang sesuai di `app/` untuk melihat markup JSX dan class asli.
2. Baca `public/legacy/js/NAMA.js` untuk memahami event handler dan sumber data.
3. Pindahkan variabel UI ke `useState`, inisialisasi LocalStorage dalam `useEffect`, dan pindahkan click ke `onClick`, form ke `onSubmit`.
4. Jangan gunakan `document.querySelector()` atau `.innerHTML` setelah fitur sudah dimigrasi (kecuali integrasi library pihak ketiga yang memang perlu DOM).
5. Hapus script yang sudah dipindah dari array `scripts` pada `<LegacyEffects>` halaman terkait. Jika array kosong, hapus komponen tersebut.
6. Jalankan `npm run typecheck` dan `npm run build`, lalu test manual screenshot tampilan terhadap ZIP asli.

### Alur Git untuk setiap cicilan

```bash
git checkout main
git pull origin main
git checkout -b feature/nama-fitur
# edit file milik Anda
git add app/ components/ styles/
git commit -m "feat: tambah interaksi halaman nama"
git push -u origin feature/nama-fitur
```

Buat Pull Request ke `main` melalui GitHub. Kalau mau mulai cicilan kedua, ambil `main` yang terbaru setelah PR pertama di-merge dan buat branch kedua.

## Siap Prisma nanti (bukan sekarang)

Pastikan komponen React mengambil data melalui fungsi/data modular, bukan menanam query database ke HTML. Saat backend Prisma dibuat, tim cukup mengganti *data source* dan operasi LocalStorage pada tiap fitur. **Session/login frontend saat ini tidak aman untuk produksi** dan harus diganti auth server saat tahap database.
