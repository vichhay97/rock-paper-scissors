function getComputerChoice() {
    const val = Math.floor(Math.random() * 3) + 1;

    switch (val) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}