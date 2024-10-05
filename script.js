console.log('rock, paper, scissors')

const gameForm = document.getElementById('game-form');
const resultSection = document.getElementById('result')
const scoreBoard = document.querySelector('#score-board');
const winsElement = document.getElementById('wins');
const lossesElement = document.getElementById('losses');
const tiesElement = document.getElementById('ties');


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
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];

}

function determineWinner(playerChoice, computerChoice) {
    // logic to determine winner
}

function updateResult(result) {
    resultSection.textContent = result;
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