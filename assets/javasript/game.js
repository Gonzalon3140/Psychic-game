var letters = "abcdefghijklmnopqrstuvwxyz".split("");
var computerguess = letters[Math.floor(Math.random() * 26)];
var guessesRemaining = 10;
var wins = 0;
var losses = 0;
console.log(letters)
document.onkeydown = function (e) {

    var userguess = e.key
    console.log(userguess, computerguess)
    if (userguess !== computerguess) {
        guessesRemaining--
        checkGameStatus();
        console.log(guessesRemaining)
    } else {
        wins++;
        document.getElementById("wins").innerHTML = wins;
        alert('You are Pyschic !!')
        resetGame();
    }
}

function checkGameStatus() {
    if (guessesRemaining == 0) {
        alert('game over')
        resetGame();
        losses++;
        document.getElementById("losses").innerHTML = losses;
    }
}
// have to keep track of an array of letters index of
function resetGame() {
    guessesRemaining = 10
    computerguess = letters[Math.floor(Math.random() * 26)];
}