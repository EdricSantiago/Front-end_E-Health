# Pemeriksaan versi frontend tanpa Prisma

## Berhasil diperiksa di lingkungan pembuatan

- Total **23** halaman utama hasil pemindahan HTML menjadi React TSX, kini menggunakan rute App Router per modul di `app/` (termasuk group `(auth)`); Beranda berada di `app/page.tsx`.
- Semua `class` HTML pada **22 halaman selain login** dipertahankan sebagai `className`, tanpa perbedaan jumlah per halaman. Halaman login ditulis ulang memakai class CSS asli dengan alur autentikasi React.
- Semua referensi gambar yang ada dalam HTML asli ditemukan pada aset yang disalin.
- Seluruh `@import` CSS menunjuk file yang ada di `styles/`.
- Pemeriksaan syntax parser TypeScript terhadap `.ts`/`.tsx`: **0 parse error**.
- Smoke test modul autentikasi lokal dengan browser storage tiruan: sukses demo login, register, password salah, logout, dan isolasi LocalStorage saat mengganti akun.

## Hasil validasi migrasi rute

- `npm run typecheck`, `npm run lint`, dan `npm run build` berhasil dijalankan.
- Semua rute yang diminta merespons HTTP 200 pada server produksi lokal, termasuk `/dokter/1` dan subrute layanan.
- CSS hasil build tersaji dengan HTTP 200.
- Alur interaksi browser dengan script `LegacyEffects`, booking, riwayat, dan pembayaran simulasi masih perlu diuji manual.

## Checklist setelah ekstrak dan npm install

- [x] `npm run typecheck`
- [x] `npm run build`
- [x] Smoke test HTTP seluruh rute dan CSS
- [x] `npm run lint` (berhasil; terdapat warning nonfatal)
- [ ] Login akun `demo` / `demo123`
- [ ] Password salah ditolak
- [ ] Buat akun sendiri, logout, login lagi
- [ ] Refresh tetap login; logout lalu akses `/` dialihkan ke login
- [ ] Beranda: carousel, pencarian, navigasi dan gambar
- [ ] Daftar dokter → detail → jadwal → booking dummy → riwayat
- [ ] Toko: kategori, tambah/kurangi keranjang, checkout dummy
- [ ] BMI: hitung dan lihat riwayat
- [ ] Profil: edit data lalu refresh
- [ ] Pengaturan: bahasa, toggle, dan logout
- [ ] Tampilan desktop dan mobile dibandingkan ZIP asli
- [ ] Tes deploy ke Vercel (login tetap hanya per-browser)

## Batasan penting

Ini **frontend prototype**. Login demo tidak diverifikasi server, password hash tidak berarti keamanan produksi, dan data browser bisa hilang bila storage dihapus. Tidak ada sinkronisasi database, API, autentikasi sungguhan, transaksi obat, dokter nyata, atau pembayaran sungguhan. Hindari data kesehatan pengguna asli.
