const choices = ["rock", "paper", "scissors"];
let userChoice = "";
let playerScore = 0;
let computerScore = 0;
function computerSelection() {
  const choice = choices[Math.floor(Math.random() * choices.length)];
  console.log(`Computerul a ales ${choice}`);
  return choice;
}

function playRound(player, computer) {
  if (player == computer) {
    return `It's a tie on ${player}`;
  } else if (player == "rock" && computer == "scissors") {
    playerScore += 1;
    return `Player won. ${player} beats ${computer}`;
  } else if (player == "paper" && computer == "rock") {
    playerScore += 1;
    return `Player won. ${player} beats ${computer}`;
  } else if (player == "scissors" && computer == "paper") {
    playerScore += 1;
    return `Player won. ${player} beats ${computer}`;
  } else {
    computerScore += 1;
    return `Computer won. ${computer} beats ${player}`;
  }
}

function playerSelection() {
  userChoice = prompt("Rock, paper or scissors?").toLowerCase();
  while (
    userChoice != "rock" &&
    userChoice != "paper" &&
    userChoice != "scissors"
  ) {
    alert("Wrong input. Please enter 'rock', 'paper' or 'scissors' ");
    userChoice = prompt("Rock, paper or scissors?").toLowerCase();
  }
  console.log(`Playerul a ales ${userChoice}`);
  return userChoice;
}

let playerChoice;

let computerChoice;

function initialize() {
  playerChoice = playerSelection();
  computerChoice = computerSelection();
}

while (playerScore != 5 && computerScore != 5) {
  initialize();
  console.log(playRound(playerChoice, computerChoice));
}
if (playerScore == 5) {
  console.log(`Player won with ${playerScore} against ${computerScore}`);
} else {
    console.log(`Computer won with ${computerScore} against ${playerScore}`);
}
