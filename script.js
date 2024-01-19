function getComputerChoice () {
    if (Math.random()<= (1/3)) {
        return 'Rock'
    } else if (Math.random() <= (2/3)) {
        return 'Paper'
    } else {return 'Scissors'} 
} // randomly returns either rock, paper or scissors

let playerSelection = prompt("Do you want to choose Rock, Paper, or Scissors?")

