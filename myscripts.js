// This is to say from what range you want the number to be guessed
const randomNumber = Math.floor(Math.random() * 25) + 1;
// This is to have the elements from html in javascript to modify them style or replace them
const guessField = document.getElementById("guessField");
const guessSubmit = document.getElementById("guessSubmit");
const message = document.querySelector(".message");

let attempts = 0;
let previousGuesses = [];

guessSubmit.addEventListener("click", checkGuess);

function checkGuess() {
    const userGuess = parseInt(guessField.value);
    previousGuesses.push(userGuess);
    attempts++;
// This are to change the text to guess correct right or wrong or if you are close and how many attempts you get 
    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the correct number (${randomNumber}) in ${attempts} attempts.`;
        message.style.backgroundColor = "green";
    } else if (attempts === 5) {
        message.textContent = `Game over! The correct number was ${randomNumber}.`;
        message.style.backgroundColor = "red";
    } else {
        let messageText = `Wrong guess! Try again. (Attempts: ${attempts})`;

        if (userGuess > randomNumber) {
            messageText += " Your guess is too high.";
        } else {
            messageText += " Your guess is too low.";
        }
    // here is we are styling the element with the id of message to change the background to yellow
        message.textContent = messageText;
        message.style.backgroundColor = "yellow";
    }

    guessField.value = "";
    guessField.focus();
}