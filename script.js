console.log('rock, paper, scissors')

const gameForm = document.getElementById('game-form');
const resultSection = document.getElementById('result')
const scoreBoard = document.querySelector('#score-board');
const winsElement = document.getElementById('wins');
const lossesElement = document.getElementById('losses');
const tiesElement = document.getElementById('ties');

let roundCount = 0;
const maxRounds = 3;

gameForm.addEventListener('submit', (event) => {
    const playerChoiceInput = document.querySelector('input[name="choice"]:checked');

    gameForm.addEventListener('submit', (event) => {
        event.preventDefault()
    })
    if (!playerChoiceInput) {
        alert('Please select either Rock, Paper, or Scissors.');
        return;
    }

    const playerChoice = playerChoiceInput.value;
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    updateResult(result);
    updateScore(result);

    roundCount++;

    if (roundCount >= maxRounds) {
        //Determine winner based on the scores
        const wins = parseInt(winsElement.textContent);
        const losses = parseInt(lossesElement.textContent);
        if (wins > losses) {
            updateResult('You won best of 3!');
        } else if (losses > wins) {
            updateResult('You lost best of 3!');
        } else {
            updateResult("It'a a tie!");
        }
        disableButtons();
    }
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    window.alert("The computer Chose: " + computerChoice);
    return computerChoice;

}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper") ) {
            return "You win!";z
        } else {
            return "You lose!";
        }
}

function updateResult(result) {
    resultSection.textContent = result;
    if (result === 'Win') {
        window.alert("Congratulations! You Won!")
    } else if (result === 'Lose') {
        window.alert("Sorry, you lost. Try again!");
    }
}

function updateScore(result) {
    if (result === 'Win') {
        winsElement.textContent = parseInt(winsElement.textContent) + 1;
    } else if (result === 'Lose') {
        lossesElement.textContent = parseInt(lossesElement.textContent) + 1;
    } else {
        tiesElement.textContent = parseInt(tiesElement.textContent) + 1;
    }
}

