# Pemeriksaan versi frontend tanpa Prisma

## Berhasil diperiksa di lingkungan pembuatan

- Total **23** halaman utama hasil pemindahan HTML menjadi React TSX: 22 di `app/pages/*.html/page.tsx` dan Beranda di `app/page.tsx`.
- Semua `class` HTML pada **22 halaman selain login** dipertahankan sebagai `className`, tanpa perbedaan jumlah per halaman. Halaman login ditulis ulang memakai class CSS asli dengan alur autentikasi React.
- Semua referensi gambar yang ada dalam HTML asli ditemukan pada aset yang disalin.
- Seluruh `@import` CSS menunjuk file yang ada.
- Pemeriksaan syntax parser TypeScript terhadap `.ts`/`.tsx`: **0 parse error**.
- Smoke test modul autentikasi lokal dengan browser storage tiruan: sukses demo login, register, password salah, logout, dan isolasi LocalStorage saat mengganti akun.

## Belum dapat diverifikasi pada lingkungan pembuatan

- `npm install` tidak menyelesaikan pengunduhan dependency, sehingga `npm run build`, `npm run typecheck`, dan pengujian browser terhadap aplikasi Next.js **belum berjalan**. Syntax parser tidak menggantikan pemeriksaan TypeScript semantik/build.
- Beberapa script asli berjalan lewat adapter `LegacyEffects`. Alur booking, riwayat, pembayaran **simulasi**, dan halaman lain perlu diuji manual di browser setelah `npm install` berhasil pada komputer anggota.

## Checklist setelah ekstrak dan npm install

- [ ] `npm run typecheck`
- [ ] `npm run build`
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
