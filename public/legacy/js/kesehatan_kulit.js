function showProblem(problem) {
    alert("Kamu memilih masalah kulit: " + problem);
}

function goToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
    });
}

function goToShop() {
    window.location.href = "tokopage";
}

function goToInformation() {
    window.location.href = "informasi_kulitpage";
}

function openChat(doctorName) {
    window.location.href = "chat_dokterpage?doctor=" + encodeURIComponent(doctorName);
}