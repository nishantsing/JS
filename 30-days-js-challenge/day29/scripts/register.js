// scripts/register.js

document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("register-form");

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const confirmPassword =
            document.getElementById("confirm-password").value;

        // Simple validation
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        if (username && password) {
            // Store the user in localStorage (for demo purposes, use a real backend in production)
            let users = JSON.parse(localStorage.getItem("users")) || [];
            if (users.some((user) => user.username === username)) {
                alert("Username already exists.");
                return;
            }

            users.push({ username, password });
            localStorage.setItem("users", JSON.stringify(users));

            alert("Registration successful! You can now log in.");
            window.location.href = "login.html"; // Redirect to login page
        } else {
            alert("Please fill in all fields.");
        }
    });
});
