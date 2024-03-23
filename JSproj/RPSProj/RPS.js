computerMove = () => {
    const randomizer = Math.random();
    if (randomizer >= 0 && randomizer < 1/3) {
        compChoice = "Rock"
    }
    else if (randomizer >= 1/3 && randomizer < 2/3) {
        compChoice = "Paper"
    }
    else if (randomizer >= 2/3 && randomizer < 1) {
        compChoice = "Scissors"
    };
};




pickRock = () => {
    const userChoice ="Rock"
    computerMove();

    if (compChoice === "Scissors") {
        result = "Rock beats scissors, you win!";
    } else if (compChoice === "Paper") {
        result = "Paper beats Rock, you lose!";
    } else if (compChoice === "Rock") {
        result = "It's a tie";
    };

    alert(`The computer chose ${compChoice} - ${result}`);
};

pickPaper = () => {
    const userChoice ="Paper"
    computerMove();

    if (compChoice === "Scissors") {
        result =  "Scissors beat Paper, You lose!";
    } else if (compChoice === "Paper") {
        result = "It's a tie";
    } else if (compChoice === "Rock") {
        result = "Paper beats Rock, you win!";
    };

    alert(`The computer chose ${compChoice} - ${result}`);
};

pickScissors = () => {
    const userChoice = "Scissors"
    computerMove();

    if (compChoice === "Scissors") {
        result = "It's a tie";
    } else if (compChoice === "Paper") {
        result = "Scissors beat Paper, you win!";
    } else if (compChoice === "Rock") {
        result = "Rock beats Scissors, you lose!";
    };

    alert(`The computer chose ${compChoice} - ${result}`);
};
