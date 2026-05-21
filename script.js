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

