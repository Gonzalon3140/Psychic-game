// letters to choose from
var letters = "abcdefghijklmnopqrstuvwxyz".split("");
var computerguess = letters[Math.floor(Math.random() * 26)];
var guessesRemaining = 10;
var guessesSoFar = [];
var wins = 0;
var losses = 0;

console.log(letters)
document.onkeydown = function (e) {
    if (!letters.includes(e.key)) {
        return
    }
    document.getElementById("wrongKeyAudio").play();
    guessesSoFar.push(e.key)
    document.getElementById("soFar").innerHTML = "Guess so far: " + guessesSoFar;
    var userguess = e.key
    console.log(userguess, computerguess)
    if (userguess !== computerguess) {
        guessesRemaining--
        document.getElementById("guessesLeft").innerHTML = "Remaining Guesses: " + guessesRemaining;
        checkGameStatus();
        console.log(guessesRemaining)
    } else {
        wins++;
        document.getElementById("wins").innerHTML = "wins: " + wins;
        document.getElementById("successAudio").play();
        alert('You are gifted !!')
        resetGame();
    }
}
// this function is if the user runs out of guesses game over 
function checkGameStatus() {
    if (guessesRemaining == 0) {
        document.getElementById("failureAudio").play();
        alert('Not so gifted after all ')
        resetGame();
        losses++;
        document.getElementById("losses").innerHTML = "losses: " + losses;
        document.getElementById("soFar").innnerHTML = "soFar" + guessesSoFar;

    }
}
// resets the game 
function resetGame() {
    guessesRemaining = 10
    computerguess = letters[Math.floor(Math.random() * 26)];
    guessesSoFar = [];
}