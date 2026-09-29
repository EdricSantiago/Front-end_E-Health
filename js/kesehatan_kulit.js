function showProblem(problem) {
    alert("Kamu memilih masalah kulit: " + problem);
}

function goToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
    });
}

function goToShop() {
    window.location.href = "toko.html";
}

function goToInformation() {
    window.location.href = "informasi_kulit.html";
}

function openChat(doctorName) {
    window.location.href = "chat_dokter.html?doctor=" + encodeURIComponent(doctorName);
}