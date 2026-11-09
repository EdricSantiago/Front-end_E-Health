"use client";
import { LegacyEffects } from "@/components/LegacyEffects";
import { handleLegacyAction } from "@/lib/legacy-actions";

export default function DietGiziHtmlPage() {
  return (
    <>
    <main>
      <section className="diet-hero">
        <div className="diet-hero-text">
          <h1>
            Jaga Pola Makan dan Kesehatanmu
          </h1>
          <p>
            Dapatkan informasi seputar pola makan,
                    nutrisi, dan tips menjaga kesehatan
                    melalui pola hidup yang lebih sehat.
          </p>
          <a href="#services">
            Mulai Sekarang
          </a>
        </div>
      </section>
      <section className="diet-services" id="services">
        <h2>
          Layanan Diet &amp; Gizi
        </h2>
        <p className="diet-services-text">
          Temukan layanan yang dapat membantu menjaga pola
                makan dan memenuhi kebutuhan nutrisi tubuh.
        </p>
        <div className="diet-service-list">
          <div className="diet-service-card">
            <div className="diet-service-icon">
              🥗
            </div>
            <h3>
              Konsultasi Ahli Gizi
            </h3>
            <p>
              Konsultasikan pola makan dan kebutuhan
                        nutrisi dengan ahli gizi.
            </p>
            <button type="button" onClick={() => handleLegacyAction("openDietChat()")}>
              Konsultasi
            </button>
          </div>
          <div className="diet-service-card">
            <div className="diet-service-icon">
              🍎
            </div>
            <h3>
              Tips Pola Makan
            </h3>
            <p>
              Dapatkan informasi dan tips untuk membantu
                        membangun pola makan yang lebih sehat.
            </p>
            <button type="button" onClick={() => handleLegacyAction("openDietInfo()")}>
              Lihat Informasi
            </button>
          </div>
          <div className="diet-service-card">
            <div className="diet-service-icon">
              📊
            </div>
            <h3>
              Kebutuhan Nutrisi
            </h3>
            <p>
              Kenali kebutuhan nutrisi dan pentingnya
                        menjaga keseimbangan asupan harian.
            </p>
            <button type="button" onClick={() => handleLegacyAction("openDietInfo()")}>
              Lihat Informasi
            </button>
          </div>
        </div>
      </section>
      <section className="diet-problems">
        <h2>
          Masalah Diet dan Gizi
        </h2>
        <p className="diet-problems-text">
          Kenali beberapa masalah yang dapat terjadi akibat
                pola makan dan asupan nutrisi yang tidak seimbang.
        </p>
        <div className="diet-problem-list">
          <div className="diet-problem-card">
            <div className="diet-problem-icon">
              ⚖️
            </div>
            <h3>
              Berat Badan Berlebih
            </h3>
            <p>
              Kondisi berat badan yang melebihi kebutuhan
                        tubuh dan dapat dipengaruhi oleh pola makan
                        serta aktivitas sehari-hari.
            </p>
          </div>
          <div className="diet-problem-card">
            <div className="diet-problem-icon">
              🥦
            </div>
            <h3>
              Kekurangan Nutrisi
            </h3>
            <p>
              Kondisi ketika tubuh tidak mendapatkan
                        cukup vitamin, mineral, protein, atau
                        nutrisi penting lainnya.
            </p>
          </div>
          <div className="diet-problem-card">
            <div className="diet-problem-icon">
              🍔
            </div>
            <h3>
              Pola Makan Tidak Seimbang
            </h3>
            <p>
              Kebiasaan mengonsumsi makanan tertentu
                        secara berlebihan tanpa memperhatikan
                        kebutuhan nutrisi tubuh.
            </p>
          </div>
          <div className="diet-problem-card">
            <div className="diet-problem-icon">
              💧
            </div>
            <h3>
              Kurang Minum
            </h3>
            <p>
              Kekurangan cairan dapat membuat tubuh
                        mudah lelah dan mengganggu aktivitas
                        sehari-hari.
            </p>
          </div>
        </div>
      </section>
      <section className="diet-doctors">
        <h2>
          Ahli Gizi
        </h2>
        <p className="diet-doctors-text">
          Konsultasikan kebutuhan nutrisi dan pola makanmu
                dengan ahli gizi.
        </p>
        <div className="diet-doctor-list">
          <div className="diet-doctor-card">
            <div className="diet-doctor-icon">
              👩‍⚕️
            </div>
            <h3>
              dr. Anisa Putri
            </h3>
            <p>
              Ahli Gizi
            </p>
            <span>
              ⭐ 4.9
            </span>
            <button type="button" onClick={() => handleLegacyAction("openDietChat('dr. Anisa Putri')")}>
              Konsultasi
            </button>
          </div>
          <div className="diet-doctor-card">
            <div className="diet-doctor-icon">
              👨‍⚕️
            </div>
            <h3>
              dr. Rizky Pratama
            </h3>
            <p>
              Ahli Gizi
            </p>
            <span>
              ⭐ 4.8
            </span>
            <button type="button" onClick={() => handleLegacyAction("openDietChat('dr. Rizky Pratama')")}>
              Konsultasi
            </button>
          </div>
          <div className="diet-doctor-card">
            <div className="diet-doctor-icon">
              👩‍⚕️
            </div>
            <h3>
              dr. Sinta Maharani
            </h3>
            <p>
              Ahli Gizi
            </p>
            <span>
              ⭐ 4.9
            </span>
            <button type="button" onClick={() => handleLegacyAction("openDietChat('dr. Sinta Maharani')")}>
              Konsultasi
            </button>
          </div>
        </div>
      </section>
    </main>
      <LegacyEffects scripts={["js/diet_gizi.js"]} />
    </>
  );
}
