let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

computerMove = () => {
    const randomizer = Math.random();
    let compChoice = "";
    if (randomizer >= 0 && randomizer < 1/3) {
        compChoice = "ROCK";
    }
    else if (randomizer >= 1/3 && randomizer < 2/3) {
        compChoice = "PAPER";
    }
    else if (randomizer >= 2/3 && randomizer < 1) {
        compChoice = "SCISSORS";
    };
    return compChoice;
};

playGame = (playerMove) => {
    const compChoice = computerMove();
    let result = "";

    if (playerMove === "ROCK") {
        if (compChoice === "ROCK") {
            result = ("It's a tie!");
        } else if (compChoice === "SCISSORS") {
            result = ("You win!");
        } else if (compChoice === "PAPER") {
            result = ("You lose!");
        };

    } else if (playerMove === "PAPER") {
        if (compChoice === "ROCK") {
            result = ("You win!");
        } else if (compChoice === "SCISSORS") {
            result = ("You lose!");
        } else if (compChoice === "PAPER") {
            result = ("It's a tie!");
        };

    } else if (playerMove === "SCISSORS") {
        if (compChoice === "ROCK") {
            result = ("You lose!");
        } else if (compChoice === "SCISSORS") {
            result = ("It's a tie!");
        } else if (compChoice === "PAPER") {
            result = ("You win!");
        };
    };

    if (result === "You win!") {
        score.wins ++;
    } else if (result === "You lose!") {
        score.losses ++;
    } else if (result === "It's a tie!") {
        score.ties ++;
    };

    localStorage.setItem("score", JSON.stringify(score));

    console.log(`You picked ${playerMove}. The computer picked ${compChoice}. ${result}\nWins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
};

pickRock = () => {
    playGame("ROCK");
};

pickPaper = () => {
    playGame("PAPER");
};

pickScissors = () => {
    playGame("SCISSORS");
};

resetScore = () => {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
};