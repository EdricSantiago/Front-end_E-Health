"use client";

export default function InformasiKulitHtmlPage() {
  return (
    <>
    <main className="skin-info">
      <h1>
        Informasi Masalah Kulit
      </h1>
      <p className="skin-info-intro">
        Kenali beberapa masalah kulit yang sering terjadi
            dan cara sederhana untuk merawatnya.
      </p>
      <div className="info-list">
        <div className="info-card">
          <h2>
            Jerawat
          </h2>
          <p>
            Jerawat merupakan masalah kulit yang umum terjadi.
                    Perawatan kulit yang tepat dapat membantu menjaga
                    kulit tetap bersih dan sehat.
          </p>
        </div>
        <div className="info-card">
          <h2>
            Komedo
          </h2>
          <p>
            Komedo terjadi ketika pori-pori kulit tersumbat.
                    Membersihkan wajah secara teratur dapat membantu
                    menjaga kebersihan kulit.
          </p>
        </div>
        <div className="info-card">
          <h2>
            Flek Hitam
          </h2>
          <p>
            Flek hitam merupakan perubahan warna pada kulit.
                    Penggunaan sunscreen dapat membantu melindungi
                    kulit dari paparan sinar matahari.
          </p>
        </div>
        <div className="info-card">
          <h2>
            Kulit Kering
          </h2>
          <p>
            Kulit kering dapat membuat kulit terasa kasar
                    atau tidak nyaman. Menjaga kelembapan kulit
                    dapat membantu mengatasinya.
          </p>
        </div>
      </div>
    </main>
    </>
  );
}
