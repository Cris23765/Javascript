const randomNumber = Math.floor(Math.random() * 10) + 1;

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

    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the correct number (${randomNumber}) in ${attempts} attempts.`;
        message.style.backgroundColor = "green";
    } else if (attempts === 10) {
        message.textContent = `Game over! The correct number was ${randomNumber}.`;
        message.style.backgroundColor = "red";
    } else {
        let messageText = `Wrong guess! Try again. (Attempts: ${attempts})`;

        if (userGuess > randomNumber) {
            messageText += " Your guess is too high.";
        } else {
            messageText += " Your guess is too low.";
        }

        message.textContent = messageText;
        message.style.backgroundColor = "yellow";
    }

    guessField.value = "";
    guessField.focus();
}