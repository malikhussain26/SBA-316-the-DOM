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

    if (!playerChoiceInput) {
        alert('Please select either Rock, Paper, or Scissors.');
        return;
    }

    const playerChoice = playerChoiceInput.value;
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    updateResult(result);
    updateScore(result);

    if (roundCount < maxRounds) {
        roundCount++;
    }

    if (roundCount >= maxRounds) {
        //Determine the score based on best of 3.
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
            return "You win!";
        } else {
            return "You lose!r";
        }
}

function updateResult(result) {
    resultSection.textContent = result;
    if (result === 'You Win') {
        resultSection.style.color = 'green';
        resultSection.innerHTML = `<h2>Congrats, You Won!</h2><img src="https://media0.giphy.com/media/uRAhwxlVBP6ied6EgB/giphy.gif?cid=6c09b9528ta6gwv0w3asahszz3ur4kuh8k8c8ik0c4jsn1gw&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g">`;
    } else if (result === 'You Lose') {
        resultSection.style.color = 'red'
        resultSection.innerHTML = `<h2>Sorry, You Lost. Play again!</h2><img src="https://media.baamboozle.com/uploads/images/142775/1633674782_2028546_url.gif">`;
    }
}

function updateScore(result) {
    if (result === 'You Win!') {
        winsElement.textContent = parseInt(winsElement.textContent) + 1;
    } else if (result === 'You Lose!') {
        lossesElement.textContent = parseInt(lossesElement.textContent) + 1;
    } else {
        tiesElement.textContent = parseInt(tiesElement.textContent) + 1;
    }
}

function disableButtons() {
    const rockButton = document.getElementById('rock');
    const paperButton = document.getElementById('paper');
    const scissorsButton = document.getElementById('scissors');

    rockButton.setAttribute('disabled', true);
    paperButton.setAttribute('disabled', true);
    scissorsButton.setAttribute('disabled', true);
}
