function showProblem(problem) {
    alert("Kamu memilih masalah kulit: " + problem);
}

function goToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
    });
}

function goToShop() {
    window.location.href = "/toko";
}

function goToInformation() {
    window.location.href = "/layanan/kulit/info";
}

function openChat(doctorName) {
    window.location.href = "/dokter/chat?doctor=" + encodeURIComponent(doctorName);
}