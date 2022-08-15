
let computerChoice = ["rock", "paper", "scissors"]
let playerChoice = prompt("What's your choice? rock, paper or scissors");

// Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!

function getComputerChoice(computerSelection) {
  computerSelection = computerChoice[Math.floor(Math.random() * computerChoice.length)];

  return computerSelection;

};

// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

function playRound(playerSelection, computerSelection){
  
    if (playerSelection === computerSelection){
      return "It's a Draw!"
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
      return "You Lose! Paper beats Rock";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
      return "You Lose! Scissors beats Paper";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
      return "You Lose! Rock beats Scissors";
    }
    else {
      return "You Win!";
    }

};

// Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

function game() {
  //Play game 5 times
  for (let i = 0; i < 5; i++){
    // Call playRound function, passing in newly returned values
    // from the playerSelection and computerSelecion functions and log to console
    console.log(playRound(playerSelection(), computerSelection()));
  }

}


const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));