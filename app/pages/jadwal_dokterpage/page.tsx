"use client";
import { LegacyEffects } from "@/components/LegacyEffects";

export default function JadwalDokterHtmlPage() {
  return (
    <>
    <main className="jd-wrapper">
      <a href="daftar_dokterpage" className="jd-kembali">
        ← Kembali ke Daftar Dokter
      </a>
      <h1 className="jd-judul">
        Jadwal Dokter
      </h1>
      <p className="jd-nama" id="jd-nama"></p>
      <section id="jd-isi">
        <p className="jd-catatan">
          Pilih tanggal dan jam. Jam yang dicoret sudah dipesan pasien lain.
        </p>
        <div id="jd-list"></div>
        <div className="jd-pilihan" id="jd-pilihan">
          Belum ada jadwal yang dipilih.
        </div>
        <button type="button" className="jd-pesan" id="jd-pesan" disabled={true}>
          Lanjut ke Booking
        </button>
      </section>
      <p className="jd-tidak-ada" id="jd-tidak-ada">
        Data dokter tidak ditemukan.
      </p>
    </main>
      <LegacyEffects scripts={["js/data/dokter.js", "js/data/janji.js", "js/jadwal_dokter.js"]} />
    </>
  );
}
