const choicesArray = ["rock", "paper", "scissors"];
let userChoice = "";
let playerScore = 0;
let computerScore = 0;
let roundResult;

const choices = document.querySelectorAll(".choices");
const playerScoreDOM = document.querySelector(".player-score");
const playerChoiceDOM = document.querySelector(".player-choice");
const computerScoreDOM = document.querySelector(".computer-score");
const computerChoiceDOM = document.querySelector(".computer-choice");
const scores = document.querySelector(".scores");
const result = document.querySelector(".result");


function renderDOM (e) {
  userChoice = choicesArray[choicesArray.indexOf( e.target.innerText.toLowerCase())];
  initialize();
  roundResult = playRound(playerChoice, computerChoice);
  console.log(roundResult);
  playerScoreDOM.textContent = playerScore;
  computerScoreDOM.textContent = computerScore;
  playerChoiceDOM.textContent = playerChoice;
  computerChoiceDOM.textContent = computerChoice;
  result.textContent = roundResult;
  console.log(e.target.innerText)
  compareScore(playerScore,computerScore);
}


choices.forEach((choice, index) => {
  choice.addEventListener("click", renderDOM);
});

function computerSelection() {
  const computerChoice =
    choicesArray[Math.floor(Math.random() * choices.length)];
  console.log(`Computerul a ales ${computerChoice}`);
  return computerChoice;
}

function playRound(player, computer) {
  if (player == computer) {
    return `It's a tie`;
  } else if (player == "rock" && computer == "scissors") {
    playerScore += 1;
    return `Player won`;
  } else if (player == "paper" && computer == "rock") {
    playerScore += 1;
    return `Player won`;
  } else if (player == "scissors" && computer == "paper") {
    playerScore += 1;
    return `Player won`;
  } else {
    computerScore += 1;
    return `Computer won`;
  }
}

// function playerSelection() {
//   console.log(`Playerul a ales ${userChoice}`);

//   return userChoice;
// }

let playerChoice;

let computerChoice;

function initialize() {
  playerChoice = userChoice;
  computerChoice = computerSelection();
}

// while (playerScore != 5 && computerScore != 5) {
//   initialize();
//   console.log(playRound(playerChoice, computerChoice));
// }
// if (playerScore !== 5 && computerScore !==5) {
//   console.log(`Player won with ${playerScore} against ${computerScore}`);
// } else {
//   console.log(`Computer won with ${computerScore} against ${playerScore}`);
// }

function compareScore(playerScore, computerScore) {
  if (playerScore == 5) {
    scores.textContent = `Player won with ${playerScore} vs ${computerScore}`;
    stopPlaying();
  }
  if (computerScore == 5) {
    scores.textContent = `Computer won with ${computerScore} vs ${playerScore}`;
    stopPlaying();
  }
}

function stopPlaying() {
  choices.forEach((choice) => {
    choice.removeEventListener("click", renderDOM);
  });
}
