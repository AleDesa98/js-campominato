function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function isInArray (element, array) {
    for (var i = 0; i < array.length; i++) {
        if (element == array[i]) {
            return true;
        }
    }
    return false;
}

var difficulty = 0;

do {
    var level = parseInt(prompt("Indicare la difficoltà desiderata inserendo 0 -> facile, 1 -> medio o 2 -> difficile"));
    if (level == 0) {
        difficulty = 100;
    } else if (level == 1) {
        difficulty = 80;
    } else if (level == 2) {
        difficulty = 50;
    }
} while (level != 0 && level != 1 && level !=2);

var bombs = [];
var attempts = [];
var maxAttempts = difficulty - 16;

while (bombs.length < 16) {
    var randomNumber = getRandomNumber(1, difficulty);
    if (!isInArray(randomNumber, bombs)) {
        bombs.push(randomNumber);
    }
}
console.log("BOMBE", bombs);


var gameOver = false;
while (attempts.length < maxAttempts && gameOver == false) {
    var userNumber;
    do {
        userNumber = parseInt(prompt("Inserisci un numero compreso tra 1 e " + difficulty));
    } while (isNaN(userNumber) || userNumber < 1 || userNumber > 100);

    if (isInArray(userNumber, bombs)) {
        gameOver = true;
        alert("Game Over\nIl tuo punteggio è: " + attempts.length);
    } else if (!isInArray(userNumber, attempts)) {
        attempts.push(userNumber);
    }
    console.log(userNumber, attempts.length);
}

if (attempts.length == maxAttempts) {
    alert("Complimenti!\nIl tuo punteggio è: " + attempts.length);
}
console.log(attempts);