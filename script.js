function runGame () {
    let guessString = '';
    let guessNumber = 0;
    let correct = false;
    let numTries = 0;
    const target = Math.floor(Math.random() * 100) + 1;


    do {
        guessString = prompt ('I am thinking of a number in the range 1 to 100. \n\nWhat is the number?');
        guessNumber = +guessString;
        numTries += 1;

        correct = checkGuess(guessNumber, target);


    } while(!correct);

    alert ('You got it! the Number was' + target + '.\n\nIt Took you ' + numTries + ' tries to guess Correctly!' );
}

function checkGuess(guessNumber, target) {
    let correct = false;

    if (isNaN(guessNumber)) {
        alert ( 'You have not entered a number. \n\nPlease enter a number in the 1-100 range');

    } else if ((guessNumber < 1 || (guessNumber > 100) )) {
        alert ('Please enter an integer in the 1-100 range.');
    } else if (guessNumber > target) {
        alert('Your number is too Large');
    } else if (guessNumber < target) {
        alert( 'Your number is too Small')
    } else {
        correct = true;
    }
    return correct;
}