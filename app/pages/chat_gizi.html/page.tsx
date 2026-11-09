"use client";
import { LegacyEffects } from "@/components/LegacyEffects";

export default function ChatGiziHtmlPage() {
  return (
    <>
    <main className="diet-chat">
      <h1 id="doctorName"></h1>
      <p>
        Ahli Gizi
      </p>
      <div id="chatBox" className="diet-chat-box">
        <div className="doctor-message">
          Halo, ada yang bisa saya bantu mengenai
                pola makan dan kebutuhan nutrisi?
        </div>
      </div>
      <form id="chatForm" className="diet-chat-form">
        <input type="text" id="messageInput" placeholder="Tulis pesan..." />
        <button type="submit">
          Kirim
        </button>
      </form>
    </main>
      <LegacyEffects scripts={["js/chat_gizi.js"]} />
    </>
  );
}
