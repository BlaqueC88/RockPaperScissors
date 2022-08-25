const playerChoiceDisplay = document.getElementById("player");
const computerChoiceDisplay = document.getElementById("computer");
const resultsDisplay = document.getElementById("results");
const possibleChoices = document.querySelectorAll("button");

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (e) => {
  playerSelection = e.target.id;
  playerChoiceDisplay.innerHTML = playerSelection;
  getComputerChoice();
  playRound();
}));

let computerChoice;

function getComputerChoice(computerSelection) {
  computerSelection = Math.floor(Math.random() * possibleChoices.length) + 1

  if (computerSelection === 1){
    computerChoice = "rock";
  }
  else if (computerSelection === 2){
    computerChoice = "paper";
  }
  else if (computerSelection === 3){
    computerChoice = "scissors";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
};

let playerSelection;
let results;

function playRound(playerSelection, computerSelection){
  
    if (playerSelection === computerSelection){
      results = "It's a Draw!";
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
      results = "You Lose! Paper beats Rock";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
      results = "You Lose! Scissors beats Paper";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
      results = "You Lose! Rock beats Scissors";
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
      results = "You Win! Paper beats Rock";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
      results = "You Win! Scissors beats Paper";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
      results = "You Win! Rock beats Scissors";
    }
    resultsDisplay.innerHTML = results;
};

// Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

// function game() {
  //Play game 5 times
  // for (let i = 0; i < 5; i++){
    // Call playRound function, passing in newly returned values
    // from the playerSelection and computerSelecion functions and log to console
    // console.log(playRound(playerSelection(), computerSelection()));
  // }

// }


