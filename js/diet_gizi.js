function openDietChat(doctorName) {
    if (!doctorName) {
        doctorName = "Ahli Gizi";
    }

    window.location.href = "chat_gizi.html?doctor=" + encodeURIComponent(doctorName);
}

function openDietInfo() {
    window.location.href = "informasi_gizi.html";
}