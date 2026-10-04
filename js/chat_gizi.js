const chatForm = document.getElementById("chatForm");
const messageInput = document.getElementById("messageInput");
const chatBox = document.getElementById("chatBox");

const urlParams = new URLSearchParams(window.location.search);
const doctorName = urlParams.get("doctor");

document.getElementById("doctorName").textContent = doctorName;

chatForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const message = messageInput.value;

    if (message === "") {
        return;
    }

    const userMessage = document.createElement("div");

    userMessage.className = "user-message";
    userMessage.textContent = message;

    chatBox.appendChild(userMessage);

    messageInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
});