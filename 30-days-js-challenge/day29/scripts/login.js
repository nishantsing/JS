// scripts/login.js

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        // const password = document.getElementById("password").value;

        // Simple validation (no real authentication)
        if (username) {
            sessionStorage.setItem("loggedInUser", username);
            window.location.href = "../index.html"; // Redirect to main dashboard
        } else {
            alert("Please enter both username.");
        }
    });
});
