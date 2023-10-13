// Generate a Random Number
let y = Math.floor (Math.random() * 10 +1 );

// counting the number of guesses
// made for correct guess
let guess = 1;

document.getElementById("submitguess").onclick = function () {
 
    // Number guessed by user    
    let x = document.getElementById("guessField").value;

    if (x == y) {
        alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
            + guess + " GUESS ");
    }

    /* If guessed number is greater than actual number*/
    else if (x > y) {
        guess++;
        alert("OOPS SORRY!! TRY A SMALLER NUMBER");
    }
    else {
        guess++;
        alert("OOPS SORRY!! TRY A GREATER NUMBER")