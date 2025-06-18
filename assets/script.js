// script.js

// Greet in console
console.log("Welcome to Muskan's Portfolio!");

// Optional: Basic form validation (non-blocking demo)
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (e) {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                e.preventDefault();
                alert("Please fill in all the fields before submitting.");
            }
        });
    }
});