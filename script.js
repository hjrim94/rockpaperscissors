function getComputerChoice () {
    if (Math.random()<= (1/3)) {
        return 'rock'
    } else if (Math.random() <= (2/3)) {
        return 'paper'
    } else {return 'scissors'} 
}; // randomly returns either rock, paper or scissors

let computerSelection = getComputerChoice();
let userInput = prompt('Do you want to choose rock, paper, or scissors?');
let playerSelection = userInput.toLowerCase(); //to ensure case sameness

function playGame (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'You tied!';
    } else if  (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
        return `You win! ${playerSelection} beats ${computerSelection}!`; //win scenario
    } else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock') {
        return `You lose! ${computerSelection} beats ${playerSelection}`; //lose scenario
    };
}

console.log(playGame(playerSelection, computerSelection))