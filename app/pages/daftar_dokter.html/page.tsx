"use client";
import { LegacyEffects } from "@/components/LegacyEffects";

export default function DaftarDokterHtmlPage() {
  return (
    <>
    <h1 className="dokter-title">
      Daftar Dokter
    </h1>
    <section className="dokter-filter">
      <input type="text" id="cari-dokter" placeholder="Cari nama dokter..." />
      <select id="filter-spesialis">
        <option value="">
          Semua Spesialis
        </option>
        <option value="Dokter Kulit">
          Dokter Kulit
        </option>
        <option value="Dokter Hewan">
          Dokter Hewan
        </option>
      </select>
    </section>
    <section className="dl-list" id="dl-list"></section>
    <p className="dl-kosong" id="dl-kosong">
      Dokter tidak ditemukan.
    </p>
      <LegacyEffects scripts={["js/data/dokter.js", "js/daftar_dokter.js"]} />
    </>
  );
}
