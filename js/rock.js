const choices = document.querySelectorAll(".choice");
const resultText = document.getElementById("resultText");
const scoreText = document.getElementById("score");
let playerScore = 0;
let computerScore = 0;

choices.forEach((choice) => {
  choice.addEventListener("click", playGame);
});

function playGame(event) {
  const playerChoice = event.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showResult(winner, playerChoice, computerChoice);
  updateScore(winner);
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function getWinner(player, computer) {
  if (player === computer) {
    return "draw";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

function showResult(winner, playerChoice, computerChoice) {
  if (winner === "draw") {
    resultText.textContent = `It's a draw! You both chose ${playerChoice}.`;
  } else if (winner === "player") {
    resultText.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
  } else {
    resultText.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
  }
}

function updateScore(winner) {
  if (winner === "player") {
    playerScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
  scoreText.textContent = `Score: Player ${playerScore} - ${computerScore} Computer`;
}
