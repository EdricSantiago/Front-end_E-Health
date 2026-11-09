"use client";

export default function InformasiGiziHtmlPage() {
  return (
    <>
    <main className="diet-info">
      <h1>
        Informasi Diet &amp; Gizi
      </h1>
      <p className="diet-info-text">
        Kenali informasi dasar mengenai pola makan
            dan kebutuhan nutrisi tubuh.
      </p>
      <div className="diet-info-list">
        <div className="diet-info-card">
          <h2>
            🥗 Pola Makan Seimbang
          </h2>
          <p>
            Pola makan seimbang berarti mengonsumsi
                    berbagai jenis makanan dengan jumlah yang
                    sesuai kebutuhan tubuh. Makanan seperti
                    sayur, buah, protein, dan sumber karbohidrat
                    dapat menjadi bagian dari pola makan sehari-hari.
          </p>
        </div>
        <div className="diet-info-card">
          <h2>
            🍎 Pentingnya Nutrisi
          </h2>
          <p>
            Nutrisi membantu tubuh mendapatkan energi
                    dan mendukung berbagai fungsi tubuh. Asupan
                    protein, vitamin, mineral, karbohidrat, dan
                    lemak tetap perlu diperhatikan.
          </p>
        </div>
        <div className="diet-info-card">
          <h2>
            💧 Kebutuhan Cairan
          </h2>
          <p>
            Cairan dibutuhkan tubuh untuk membantu
                    menjaga fungsi tubuh tetap berjalan dengan baik.
                    Biasakan minum air secara cukup dan teratur
                    sepanjang hari.
          </p>
        </div>
        <div className="diet-info-card">
          <h2>
            🍽️ Atur Porsi Makan
          </h2>
          <p>
            Memperhatikan porsi makan dapat membantu
                    menjaga keseimbangan asupan energi dan nutrisi.
                    Kebutuhan setiap orang dapat berbeda tergantung
                    kondisi dan aktivitas masing-masing.
          </p>
        </div>
      </div>
      <a href="diet_gizi.html" className="diet-back">
        Kembali ke Diet &amp; Gizi
      </a>
    </main>
    </>
  );
}
