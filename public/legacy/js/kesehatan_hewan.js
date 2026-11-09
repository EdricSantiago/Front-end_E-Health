function openAnimalChat(doctorName) {
    if (!doctorName) {
        doctorName = "Dokter Hewan";
    }

    window.location.href = "chat_hewan.html?doctor=" + encodeURIComponent(doctorName);
}

function openAnimalInfo() {
    window.location.href = "informasi_hewan.html";
}

function openAnimalProduct() {
    window.location.href = "toko.html";
}