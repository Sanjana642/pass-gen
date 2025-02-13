const passwordField = document.getElementById("password");
const lengthField = document.getElementById("length");
const uppercaseCheck = document.getElementById("uppercase");
const lowercaseCheck = document.getElementById("lowercase");
const numbersCheck = document.getElementById("numbers");
const symbolsCheck = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

function generatePassword() {
    let length = parseInt(lengthField.value);
    let allowedChars = "";

    if (uppercaseCheck.checked) allowedChars += uppercaseChars;
    if (lowercaseCheck.checked) allowedChars += lowercaseChars;
    if (numbersCheck.checked) allowedChars += numberChars;
    if (symbolsCheck.checked) allowedChars += symbolChars;

    if (allowedChars === "") {
        passwordField.value = "Select at least one option!";
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        password += allowedChars[Math.floor(Math.random() * allowedChars.length)];
    }

    passwordField.value = password;
}

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
});
