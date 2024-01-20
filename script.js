function game() {
    let numOfWins = 0;
    let numOfLosses = 0;
    let numOfTies = 0;

    for (let i = 0; i < 5; i++) {
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

        function playRound (playerSelection, computerSelection) {
            if (playerSelection === computerSelection) {
                console.log('You tied!');
                numOfTies++;
            } else if  (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
                console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
                numOfWins++; //win scenario
            } else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock') {
                console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
                numOfLosses++; //lose scenario
            } else {console.log('You need to input a correct choice!')};
        }

        playRound(playerSelection, computerSelection);
    };

}

game()