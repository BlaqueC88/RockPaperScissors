const playerChoiceDisplay = document.getElementById("player");
const computerChoiceDisplay = document.getElementById("computer");
const resultsDisplay = document.getElementById("results");
const possibleChoices = document.querySelectorAll("button");

let playerSelection; // Global defining of playerSelection
let computerSelection;
let results;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
  playerSelection = e.target.id;
  playerChoiceDisplay.innerHTML = playerSelection;
  getComputerChoice();
  playRound();
}));

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * possibleChoices.length) + 1;
  
  if (randomChoice === 1){
    computerSelection = "rock";
  }
  else if (randomChoice === 2){
    computerSelection = "paper";
  }
  else if (randomChoice === 3){
    computerSelection = "scissors";
  }
  computerChoiceDisplay.innerHTML = computerSelection;
};

function playRound(){

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