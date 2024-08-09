document.addEventListener("DOMContentLoaded", checkLoginStatus);

function checkLoginStatus() {
    const authButton = document.getElementById("authButton");
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");

    if (username && email) {
        authButton.textContent = "Logout";
        authButton.onclick = logout;
    } else {
        authButton.textContent = "Login";
        authButton.onclick = toggleAuth;
    }
}
function toggleAuth() {
    const authForm = document.getElementById("authForm");
    authForm.style.display = authForm.style.display === "block" ? "none" : "block";
}
function login(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    localStorage.setItem("username", username);
    localStorage.setItem("email", email);

    alert("Logged in successfully!");

    checkLoginStatus();
    toggleAuth();
}

function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("email");

    alert("Logged out successfully!");

    checkLoginStatus();
}