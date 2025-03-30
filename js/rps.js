function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  const choices = ["rock", "paper", "scissors"];
  let humanChoice = prompt("Enter rock, paper, or scissors:");

  return humanChoice
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return "You win!";
  } else {
    computerScore++;
    return "You lose!";
  }
}

//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();
//console.log("Human choice:", humanSelection);
//console.log("Computer choice:", computerSelection);
//playRound(humanSelection, computerSelection);
//console.log("Round result:", playRound(humanSelection, computerSelection));

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log("Human choice:", humanSelection);
    console.log("Computer choice:", computerSelection);
    console.log("Round result:\n", playRound(humanSelection, computerSelection));
  }

  if (humanScore > computerScore) {
    console.log("\nYou win the game!");
  } else if (computerScore > humanScore) {
    console.log("\nComputer wins the game!");
  } else {
    console.log("\nThe game is a tie!");
  }
}
playGame();