const secretNumber = Math.floor(Math.random() * 100) + 1;
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
const btn = document.getElementById("submitGuess");
const output = document.getElementById("message");

btn.addEventListener("click", () => {
    userGuess = Number(document.getElementById("userGuess").value);

    if(userGuess < 1 || userGuess > 100 || Number.isNaN(userGuess)) {
        output.textContent = "Please enter a number between 1 and 100";
    } else {
        if(userGuess === secretNumber){
            output.textContent = "Correct!";
        } else if(userGuess > secretNumber) {
            output.textContent = "Too High!";
        } else if(userGuess < secretNumber){
            output.textContent = "Too Low!"
        }
    }
});