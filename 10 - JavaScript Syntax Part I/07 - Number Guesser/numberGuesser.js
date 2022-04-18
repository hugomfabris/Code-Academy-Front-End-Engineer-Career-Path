let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => Math.floor((Math.random()) * 9);

let computerGuess = generateTarget();
let secretTarget = generateTarget();
let winner = '';

function compareGuesses(userGuess) {
    if (Math.abs(userGuess - secretTarget) <= Math.abs(computerGuess - secretTarget)) {
        winner = 'human';
        updateScore(winner);
        advanceRound();
        return true
    }
    else {
        winner = 'computer';
        updateScore(winner);
        advanceRound();
        return false
    }
}

const updateScore = winner => {
    if (winner == 'human') {
        humanScore += 1;
    }
    else if (winner == 'computer') {
        computerScore += 1;
    }
    else {
        console.log('Please insert a valid number')
    }   
}

const advanceRound = currentRoundNumber => currentRoundNumber += 1;

console.log(compareGuesses(5));
console.log(currentRoundNumber);