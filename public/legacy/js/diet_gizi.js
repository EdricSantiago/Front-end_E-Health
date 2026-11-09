function openDietChat(doctorName) {
    if (!doctorName) {
        doctorName = "Ahli Gizi";
    }

    window.location.href = "/layanan/gizi/chat?doctor=" + encodeURIComponent(doctorName);
}

function openDietInfo() {
    window.location.href = "/layanan/gizi/info";
}