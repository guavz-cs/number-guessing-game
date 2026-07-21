let secretNumber = Math.floor(Math.random() * 100) + 1;
let userGuess;

console.log(secretNumber);

/** Console **/
// do {
//     userGuess = Number(prompt("Enter your guess: " + secretNumber));

//     if(userGuess > secretNumber) {
//         console.log("Too High!");
//     } else if(userGuess < secretNumber) {
//         console.log("Too Low!")
//     } else if(userGuess === secretNumber){
//         console.log("Correct!")
//     } else {
//         console.log("Invalid input!");
//     }
// } while(userGuess !== secretNumber);

/** DOM **/
const input = document.getElementById("userGuess");
const guessBtn = document.getElementById("submitGuess");
const output = document.getElementById("message");
const replayBtn = document.getElementById("replay");

replayBtn.addEventListener("click", () => {
    guessBtn.disabled = false;
    replayBtn.disabled = true;
    input.value ="";
    output.textContent = "";
    secretNumber = Math.floor(Math.random() * 100) + 1;
    console.log(secretNumber);
});

guessBtn.addEventListener("click", () => {
    userGuess = Number(input.value);

    if(userGuess < 1 || userGuess > 100 || Number.isNaN(userGuess)) {
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