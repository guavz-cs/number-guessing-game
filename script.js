const max = 100;

function generateSecretNumber() {
    return Math.floor(Math.random() * max) + 1;
}

let secretNumber = generateSecretNumber();
let userGuess;

console.log(secretNumber);

const input = document.getElementById("userGuess");
const guessBtn = document.getElementById("submitGuess");
const output = document.getElementById("message");
const replayBtn = document.getElementById("replay");

function resetGame() {
    guessBtn.disabled = false;
    replayBtn.disabled = true;
    input.value = "";
    output.textContent = "";
    secretNumber = generateSecretNumber();
    console.log(secretNumber);
}

replayBtn.addEventListener("click", resetGame);

function validateGuess(guess) {
    if (Number.isNaN(guess) || guess < 1 || guess > max) {
        return { valid: false, reason: "invalid" };
    }
    return { valid: true };
}

function checkGuess(guess) {
    if (guess === secretNumber) return "correct";
    if (guess > secretNumber) return "high";
    return "low";
}

function displayMessage(result, guess) {
    switch (result) {
        case "invalid":
            output.textContent = `Please enter a number between 1 and ${max}`;
            break;
        case "correct":
            output.textContent = "Correct!";
            break;
        case "high":
            output.textContent = `${guess} is Too High!`;
            break;
        case "low":
            output.textContent = `${guess} is Too Low!`;
            break;
    }
}

function guessButtonClicked() {
    const userGuess = Number(input.value);
    const validation = validateGuess(userGuess);

    if (!validation.valid) {
        displayMessage(validation.reason);
        input.value = "";
        return;
    }

    const result = checkGuess(userGuess);
    displayMessage(result, userGuess);

    if (result === "correct") {
        endGame();
    } else {
        input.value = "";
    }
}

guessBtn.addEventListener("click", guessButtonClicked);