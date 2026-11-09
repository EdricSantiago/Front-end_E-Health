"use client";
import { LegacyEffects } from "@/components/LegacyEffects";

export default function BookingHtmlPage() {
  return (
    <>
    <main className="bk-wrapper">
      <section className="bk-kosong" id="bk-invalid" hidden={true}>
        <h1>
          Jadwal tidak ditemukan
        </h1>
        <p>
          Link booking ini tidak lengkap atau jadwalnya sudah lewat. Pilih jadwal dokter lagi ya.
        </p>
        <a href="/dokter" className="bk-tombol">
          Lihat daftar dokter
        </a>
      </section>
      <section id="bk-form-view" hidden={true}>
        <a href="#" className="bk-kembali" id="bk-ubah">
          ← Ubah jadwal
        </a>
        <h1 className="bk-judul">
          Booking Konsultasi
        </h1>
        <div className="bk-ringkasan">
          <div className="bk-avatar" id="bk-avatar" aria-hidden="true"></div>
          <div className="bk-ringkasan-isi">
            <p className="bk-dokter" id="bk-dokter"></p>
            <p className="bk-spesialis" id="bk-spesialis"></p>
            <p className="bk-waktu" id="bk-waktu"></p>
          </div>
        </div>
        <p className="bk-slot-error" id="bk-slot-error" role="alert" hidden={true}>
          Jadwal ini baru saja dipesan.
          <a href="#" id="bk-pilih-lain">
            Pilih jadwal lain
          </a>
        </p>
        <form id="bk-form" noValidate={true}>
          <div className="bk-kartu">
            <h2>
              Data pasien
            </h2>
            <div className="bk-grup">
              <label htmlFor="bk-nama">
                Nama lengkap
              </label>
              <input type="text" id="bk-nama" autoComplete="name" placeholder="Nama sesuai KTP" />
              <p className="bk-err" id="err-nama" role="alert"></p>
            </div>
            <div className="bk-grup bk-grup-kecil">
              <label htmlFor="bk-usia">
                Usia (tahun)
              </label>
              <input type="number" id="bk-usia" min="1" max="120" inputMode="numeric" placeholder="Contoh: 20" />
              <p className="bk-err" id="err-usia" role="alert"></p>
            </div>
            <div className="bk-grup">
              <label htmlFor="bk-keluhan">
                Keluhan
              </label>
              <textarea id="bk-keluhan" rows={4} maxLength={300} placeholder="Ceritakan keluhanmu, misalnya sudah berapa lama dan apa yang dirasakan"></textarea>
              <div className="bk-baris-info">
                <p className="bk-err" id="err-keluhan" role="alert"></p>
                <span className="bk-hitung" id="bk-hitung">
                  0/300
                </span>
              </div>
            </div>
          </div>
          <div className="bk-kartu">
            <h2>
              Cara konsultasi
            </h2>
            <div className="bk-opsi-grid">
              <label className="bk-opsi">
                <input type="radio" name="metode" defaultValue="chat" defaultChecked={true} />
                <span className="bk-opsi-isi">
                  <strong>
                    Chat
                  </strong>
                  <small>
                    Tanya jawab lewat pesan
                  </small>
                </span>
              </label>
              <label className="bk-opsi">
                <input type="radio" name="metode" defaultValue="video" />
                <span className="bk-opsi-isi">
                  <strong>
                    Video call
                  </strong>
                  <small>
                    Tatap muka, +Rp15.000
                  </small>
                </span>
              </label>
            </div>
          </div>
          <div className="bk-kartu">
            <h2>
              Pembayaran
            </h2>
            <div className="bk-opsi-grid bk-tiga">
              <label className="bk-opsi">
                <input type="radio" name="bayar" defaultValue="Transfer Bank" />
                <span className="bk-opsi-isi">
                  <strong>
                    Transfer Bank
                  </strong>
                </span>
              </label>
              <label className="bk-opsi">
                <input type="radio" name="bayar" defaultValue="E-Wallet" />
                <span className="bk-opsi-isi">
                  <strong>
                    E-Wallet
                  </strong>
                </span>
              </label>
              <label className="bk-opsi">
                <input type="radio" name="bayar" defaultValue="QRIS" />
                <span className="bk-opsi-isi">
                  <strong>
                    QRIS
                  </strong>
                </span>
              </label>
            </div>
            <p className="bk-err" id="err-bayar" role="alert"></p>
            <dl className="bk-rincian">
              <div>
                <dt>
                  Biaya konsultasi
                </dt>
                <dd id="rc-konsultasi"></dd>
              </div>
              <div id="rc-video-baris" hidden={true}>
                <dt>
                  Tambahan video call
                </dt>
                <dd id="rc-video"></dd>
              </div>
              <div>
                <dt>
                  Biaya layanan
                </dt>
                <dd id="rc-layanan"></dd>
              </div>
              <div className="bk-total">
                <dt>
                  Total
                </dt>
                <dd id="rc-total"></dd>
              </div>
            </dl>
          </div>
          <button type="submit" className="bk-tombol bk-penuh" id="bk-submit">
            Konfirmasi booking
          </button>
        </form>
      </section>
      <section id="bk-sukses-view" hidden={true}>
        <div className="bk-sukses-kepala">
          <div className="bk-centang" aria-hidden="true">
            ✓
          </div>
          <h1 className="bk-judul">
            Booking berhasil
          </h1>
          <p className="bk-sub" id="sk-sub"></p>
        </div>
        <article className="bk-tiket" id="bk-tiket">
          <div className="bk-tiket-atas">
            <p className="bk-label">
              Kode booking
            </p>
            <p className="bk-kode" id="sk-kode"></p>
            <span className="bk-status" id="sk-status">
              Terjadwal
            </span>
          </div>
          <div className="bk-tiket-garis" aria-hidden="true"></div>
          <dl className="bk-tiket-bawah">
            <div>
              <dt>
                Dokter
              </dt>
              <dd id="sk-dokter"></dd>
            </div>
            <div>
              <dt>
                Waktu
              </dt>
              <dd id="sk-waktu"></dd>
            </div>
            <div>
              <dt>
                Pasien
              </dt>
              <dd id="sk-pasien"></dd>
            </div>
            <div>
              <dt>
                Cara konsultasi
              </dt>
              <dd id="sk-metode"></dd>
            </div>
            <div>
              <dt>
                Pembayaran
              </dt>
              <dd id="sk-bayar"></dd>
            </div>
            <div>
              <dt>
                Total
              </dt>
              <dd id="sk-total"></dd>
            </div>
          </dl>
        </article>
        <p className="bk-info" id="sk-info" role="status" hidden={true}></p>
        <div className="bk-aksi">
          <button type="button" className="bk-tombol" id="sk-kalender">
            Simpan ke kalender
          </button>
          <a href="/riwayat" className="bk-tombol bk-garis">
            Lihat riwayat
          </a>
          <a href="/" className="bk-tombol bk-garis">
            Kembali ke Home
          </a>
        </div>
        <div className="bk-batal">
          <button type="button" className="bk-link-bahaya" id="sk-batal">
            Batalkan janji
          </button>
          <div className="bk-konfirmasi" id="sk-konfirmasi" hidden={true}>
            <p>
              Yakin mau membatalkan janji ini?
            </p>
            <button type="button" className="bk-tombol bk-bahaya" id="sk-ya">
              Ya, batalkan
            </button>
            <button type="button" className="bk-tombol bk-garis" id="sk-tidak">
              Tidak jadi
            </button>
          </div>
        </div>
      </section>
    </main>
      <LegacyEffects scripts={["js/data/dokter.js", "js/riwayat_helper.js", "js/data/janji.js", "js/booking.js"]} />
    </>
  );
}
