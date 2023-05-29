let userScore = 0;
let ComputerScore = 0;

function ComputerChoice() {
    let gameMoves = ['Rock', 'Paper', 'Scissors'];
    return gameMoves[Math.floor(Math.random() * gameMoves.length)]
}

function getPlayerChoice() {
    let playerSelection = prompt("Rock, Paper, Scissors!");
    // THE LINE BELOW IS FOR TESTS PURPORSE ONLY
    // let playerSelection = "Rock";
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}

function getComputerChoice() {
    let computerSelection = ComputerChoice();
    computerSelection = computerSelection.toLowerCase();
    return computerSelection;
}


function playRound(player, computer) {
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    let drawPrompt = "Draw! Try again!";

    if (player === computer) {
        return drawPrompt;
    } else if (player == 'rock' && computer === 'scissors') {
        userScore = ++userScore;
        return "You Win! Rock beats Scissors";
    } else if (player === 'rock' && computer === 'paper') {
        ComputerScore = ++ComputerScore;
        return "You Lose! Paper beats Rock";
    } else if (player === 'paper' && computer === 'rock') {
        userScore = ++userScore;
        return "You Win! Paper beats Rock";
    } else if (player === 'paper' && computer === 'scissors') {
        ComputerScore = ++ComputerScore;
        return "You Lose! Scissors beats Paper";
    } else if (player === 'scissors' && computer === 'rock') {
        ComputerScore = ++ComputerScore;
        return "You Lose! Rock beats Scissors";
    } else if (player === 'scissors' && computer === 'paper') {
        userScore = ++userScore;
        return "You Win! Scissors beats Paper";
    }

}

function game() {
    for (let i = 1; i <= 5; i++) {
        result = playRound(getPlayerChoice(), getComputerChoice());
        console.log(result);
    }
    console.log(`Your Score: ${userScore}`);
    console.log(`Computer Score: ${ComputerScore}`);
}

game();
