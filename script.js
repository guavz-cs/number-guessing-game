const secretNumber = Math.floor(Math.random() * 100) + 1;
let userGuess;

do {
    userGuess = Number(prompt("Enter your guess: " + secretNumber));

    if(userGuess > secretNumber) {
        console.log("Too High!");
    } else if(userGuess < secretNumber) {
        console.log("Too Low!")
    } else if(userGuess === secretNumber){
        console.log("Correct!")
    } else {
        console.log("Invalid input!");
    }
} while(userGuess !== secretNumber);

