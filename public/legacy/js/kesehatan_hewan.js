function openAnimalChat(doctorName) {
    if (!doctorName) {
        doctorName = "Dokter Hewan";
    }

    window.location.href = "chat_hewanpage?doctor=" + encodeURIComponent(doctorName);
}

function openAnimalInfo() {
    window.location.href = "informasi_hewanpage";
}

function openAnimalProduct() {
    window.location.href = "tokopage";
}