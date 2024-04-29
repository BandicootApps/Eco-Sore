// Page1.js

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Find the "Start Now" button by its ID
    const startButton = document.getElementById("startButton");

    // Add a click event listener to the button
    startButton.addEventListener("click", function () {
        // Redirect to formP2.html when the button is clicked
        window.location.href = "Main.html";
    });
});
