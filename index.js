// RANDOM PASSWORD GENERATOR

function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowercaseChars : "";
    allowedChars += includeUpperCase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if (length <= 0) {
        return "Password length must be at least 1"; // Return error message
    }
    if (allowedChars.length === 0) {
        return "At least one set of characters needs to be selected"; // Return error message
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password; // Return the generated password
}

document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const length = parseInt(document.getElementById("passwordLength").value);
    const includeLowerCase = document.getElementById("includeLowerCase").checked;
    const includeUpperCase = document.getElementById("includeUpperCase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;

    const password = generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);
    const warningMessage = document.getElementById("warningMessage");

    if (password.startsWith("At least") || password.startsWith("Password length")) {
        warningMessage.textContent = password; // Show the error message
        warningMessage.classList.remove("hidden"); // Make it visible
        document.getElementById("generatedPassword").value = ""; // Clear password input
    } else {
        warningMessage.classList.add("hidden"); // Hide warning message
        document.getElementById("generatedPassword").value = password; // Show generated password
    }
});
