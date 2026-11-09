"use client";
import { LegacyEffects } from "@/components/LegacyEffects";
import { handleLegacyAction } from "@/lib/legacy-actions";

export default function KesehatanKulitHtmlPage() {
  return (
    <>
    <h1 className="page-title">
      Kesehatan Kulit
    </h1>
    <section className="skin-hero">
      <div className="skin-hero-text">
        <h2>
          Jaga Kesehatan Kulitmu
        </h2>
        <p>
          Temukan informasi dan layanan untuk membantu
                merawat kesehatan kulitmu.
        </p>
        <button type="button" onClick={() => handleLegacyAction("goToSection('doctors')")}>
          Konsultasi Sekarang
        </button>
      </div>
    </section>
    <section className="skin-services" id="services">
      <h2>
        Layanan Kesehatan Kulit
      </h2>
      <div className="service-list">
        <div className="service-card">
          <div className="service-icon">
            🩺
          </div>
          <h3>
            Konsultasi Dokter
          </h3>
          <p>
            Konsultasikan masalah kulit dengan dokter.
          </p>
          <button type="button" onClick={() => handleLegacyAction("goToSection('doctors')")}>
            Konsultasi
          </button>
        </div>
        <div className="service-card">
          <div className="service-icon">
            🔍
          </div>
          <h3>
            Cek Masalah Kulit
          </h3>
          <p>
            Kenali masalah kulit yang sering terjadi.
          </p>
          <button type="button" onClick={() => handleLegacyAction("goToInformation()")}>
            Lihat Informasi
          </button>
        </div>
        <div className="service-card">
          <div className="service-icon">
            💊
          </div>
          <h3>
            Produk Perawatan
          </h3>
          <p>
            Temukan produk untuk membantu merawat kulit.
          </p>
          <button type="button" onClick={() => handleLegacyAction("goToShop()")}>
            Lihat Produk
          </button>
        </div>
      </div>
    </section>
    <section className="skin-problems" id="problems">
      <h2>
        Masalah Kulit yang Sering Dialami
      </h2>
      <div className="problem-list">
        <div className="problem-card" onClick={() => handleLegacyAction("showProblem('Jerawat')")}>
          <div className="problem-icon">
            😊
          </div>
          <h3>
            Jerawat
          </h3>
          <p>
            Informasi dan penanganan masalah jerawat.
          </p>
        </div>
        <div className="problem-card" onClick={() => handleLegacyAction("showProblem('Komedo')")}>
          <div className="problem-icon">
            🔴
          </div>
          <h3>
            Komedo
          </h3>
          <p>
            Kenali penyebab dan cara merawat komedo.
          </p>
        </div>
        <div className="problem-card" onClick={() => handleLegacyAction("showProblem('Flek Hitam')")}>
          <div className="problem-icon">
            ✨
          </div>
          <h3>
            Flek Hitam
          </h3>
          <p>
            Informasi mengenai noda dan flek pada kulit.
          </p>
        </div>
        <div className="problem-card" onClick={() => handleLegacyAction("showProblem('Kulit Kering')")}>
          <div className="problem-icon">
            💧
          </div>
          <h3>
            Kulit Kering
          </h3>
          <p>
            Tips menjaga kulit tetap lembap dan sehat.
          </p>
        </div>
      </div>
    </section>
    <section className="skin-doctors" id="doctors">
      <h2>
        Dokter Kulit
      </h2>
      <div className="doctor-list">
        <div className="doctor-card">
          <img className="doctor-image" src="/assets/images/doctors/andini.jpg" alt="dr. Andini Putri" />
          <div className="doctor-info">
            <h3>
              dr. Andini Putri
            </h3>
            <p>
              Dokter Kulit
            </p>
            <p className="doctor-rating">
              ⭐ 4.9
            </p>
            <button type="button" onClick={() => handleLegacyAction("openChat('dr. Andini Putri')")}>
              Konsultasi
            </button>
          </div>
        </div>
        <div className="doctor-card">
          <img className="doctor-image" src="/assets/images/doctors/raka.jpg" alt="dr. Raka Pratama" />
          <div className="doctor-info">
            <h3>
              dr. Raka Pratama
            </h3>
            <p>
              Dokter Kulit
            </p>
            <p className="doctor-rating">
              ⭐ 4.8
            </p>
            <button type="button" onClick={() => handleLegacyAction("openChat('dr. Raka Pratama')")}>
              Konsultasi
            </button>
          </div>
        </div>
        <div className="doctor-card">
          <img className="doctor-image" src="/assets/images/doctors/citra.jpg" alt="dr. Citra Lestari" />
          <div className="doctor-info">
            <h3>
              dr. Citra Lestari
            </h3>
            <p>
              Dokter Kulit
            </p>
            <p className="doctor-rating">
              ⭐ 4.9
            </p>
            <button type="button" onClick={() => handleLegacyAction("openChat('dr. Citra Lestari')")}>
              Konsultasi
            </button>
          </div>
        </div>
      </div>
    </section>
      <LegacyEffects scripts={["js/kesehatan_kulit.js"]} />
    </>
  );
}
