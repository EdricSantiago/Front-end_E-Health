"use client";
import { LegacyEffects } from "@/components/LegacyEffects";

export default function DetailDokterHtmlPage() {
  return (
    <>
    <main className="dd-wrapper">
      <a href="daftar_dokterpage" className="dd-kembali">
        ← Kembali ke Daftar Dokter
      </a>
      <section className="dd-card" id="dd-card">
        <div className="dd-foto">
          Foto Dokter
        </div>
        <div className="dd-info">
          <h1 id="dd-nama"></h1>
          <p id="dd-spesialis"></p>
          <p className="dd-rating" id="dd-rating"></p>
          <div className="dd-tombol">
            <button type="button" id="btn-chat">
              Konsultasi
            </button>
            <button type="button" className="dd-outline" id="btn-jadwal">
              Lihat Jadwal
            </button>
          </div>
        </div>
      </section>
      <section className="dd-box" id="dd-detail">
        <h2>
          Tentang Dokter
        </h2>
        <p id="dd-tentang"></p>
        <h2>
          Informasi
        </h2>
        <ul>
          <li>
            Pengalaman :
            <span id="dd-pengalaman"></span>
          </li>
          <li>
            Biaya konsultasi :
            <span id="dd-biaya"></span>
          </li>
        </ul>
      </section>
      <p className="dd-tidak-ada" id="dd-tidak-ada">
        Data dokter tidak ditemukan.
      </p>
    </main>
      <LegacyEffects scripts={["js/data/dokter.js", "js/detail_dokter.js"]} />
    </>
  );
}
