"use client";
import { LegacyEffects } from "@/components/LegacyEffects";

export default function ChatDokterHtmlPage() {
  return (
    <>
    <main className="chat-page">
      <div className="chat-header">
        <a href="kesehatan_kulit.html">
          ←
        </a>
        <div>
          <h1 id="doctorName"></h1>
          <p id="doctorSpecialist"></p>
        </div>
      </div>
      <div className="chat-box" id="chatBox">
        <div className="doctor-message">
          Halo, ada yang bisa saya bantu?
        </div>
      </div>
      <form className="chat-form" id="chatForm">
        <input type="text" id="messageInput" placeholder="Ketik pesan..." />
        <button type="submit">
          Kirim
        </button>
      </form>
    </main>
      <LegacyEffects scripts={["js/chat_dokter.js"]} />
    </>
  );
}
