playGame();

function getComputerChoice() {
    const val = Math.floor(Math.random() * 3) + 1;

    switch (val) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function getHumanChoice() {
    const userInput = window.prompt("Pick Rock, Paper or Scissors!");

    return userInput.trim().toLowerCase();
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    for (let i = 0; i < 5; i++) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();

        playRound(computerChoice, humanChoice);
    }

    console.log(`Final Score:\nPlayer: ${humanScore}\nComputer: ${computerScore}`);

    function playRound(computerChoice, humanChoice) {
        switch (computerChoice) {
            case "rock":
                if (humanChoice === "paper") {
                    console.log("You win! Paper beats Rock.")
                    humanScore++;
                }
                else if (humanChoice === "scissors") {
                    console.log("You lose! Rock beats Scissors.")
                    computerScore++;
                }
                else {
                    console.log("That's a tie! You both picked rock.")
                }
                break;
            case "paper":
                if (humanChoice === "rock") {
                    console.log("You lose! Paper beats Rock.")
                    computerScore++;
                }
                else if (humanChoice === "scissors") {
                    console.log("You win! Scissors beat Paper.")
                    humanScore++;
                }
                else {
                    console.log("That's a tie! You both picked paper.")
                }
                break;
            case "scissors":
                if (humanChoice === "rock") {
                    console.log("You win! Rock beats Scissors.")
                    humanScore++;
                }
                else if (humanChoice === "paper") {
                    console.log("You lose! Scissors beat Paper.")
                    computerScore++;
                }
                else {
                    console.log("That's a tie! You both picked scissors.")
                }
                break;
        }
    }
}