const max = 100;

let secretNumber = Math.floor(Math.random() * max) + 1;
let userGuess;

const input = document.getElementById("userGuess");
const guessBtn = document.getElementById("submitGuess");
const output = document.getElementById("message");
const replayBtn = document.getElementById("replay");

replayBtn.addEventListener("click", () => {
    guessBtn.disabled = false;
    replayBtn.disabled = true;
    input.value ="";
    output.textContent = "";
    secretNumber = Math.floor(Math.random() * max) + 1;
});

guessBtn.addEventListener("click", () => {
    userGuess = Number(input.value);

    if(userGuess < 1 || userGuess > max || Number.isNaN(userGuess)) {
        output.textContent = "Please enter a number between 1 and 100";
        input.value ="";
    } else {
        if(userGuess === secretNumber){
            output.textContent = "Correct!";
            guessBtn.disabled = true;
            replayBtn.disabled = false;
            userGuess.value = "";
        } else if(userGuess > secretNumber) {
            output.textContent = `${userGuess} is Too High!`;
            input.value ="";
        } else if(userGuess < secretNumber){
            output.textContent = `${userGuess} is Too Low!`;
            input.value ="";
        }
    }
});