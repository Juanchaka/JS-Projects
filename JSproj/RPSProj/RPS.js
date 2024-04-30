computerMove = () => {
    const randomizer = Math.random();
    let compChoice = "";
    if (randomizer >= 0 && randomizer < 1/3) {
        compChoice = "Rock";
    }
    else if (randomizer >= 1/3 && randomizer < 2/3) {
        compChoice = "Paper";
    }
    else if (randomizer >= 2/3 && randomizer < 1) {
        compChoice = "Scissors";
    };
    return compChoice;
};

playGame = (playerMove) => {
    const compChoice = computerMove();
    let result = "";

    if (playerMove === "Rock") {
        if (compChoice === "Rock") {
            result = ("Tie");
        } else if (compChoice === "Scissors") {
            result = ("You win");
        } else if (compChoice === "Paper") {
            result = ("You lose");
        };

    } else if (playerMove === "Paper") {
        if (compChoice === "Rock") {
            result = ("You win");
        } else if (compChoice === "Scissors") {
            result = ("You lose");
        } else if (compChoice === "Paper") {
            result = ("Tie");
        };

    } else if (playerMove === "Scissors") {
        if (compChoice === "Rock") {
            result = ("You lose");
        } else if (compChoice === "Scissors") {
            result = ("Tie");
        } else if (compChoice === "Paper") {
            result = ("You win");
        };
    };
    
    console.log(`You picked ${playerMove}. The computer picked ${compChoice}. ${result}`);
};

pickRock = () => {
    playGame("Rock");
};

pickPaper = () => {
    playGame("Paper");
};

pickScissors = () => {
    playGame("Scissors");
};