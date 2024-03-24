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
    return compChoice;
};

playerMove = (pChoice) => {
    if (compChoice === "Scissors" && pChoice === "Scissors" || compChoice === "Paper" && pChoice === "Paper" || compChoice === "Rock" && pChoice === "Rock") {
        result = console.log(`Computer chose ${compChoice} - It's a tie`);
    }
    
    else if (compChoice === "Scissors" && pChoice === "Rock" || compChoice === "Rock" && pChoice === "Paper" || compChoice === "Paper" && pChoice === "Scissors") {
        result = console.log(`Computer chose ${compChoice} - ${pChoice} beats ${compChoice}, you win!`);
    }
    
    else if (compChoice === "Paper" && pChoice === "Rock" || compChoice === "Rock" && pChoice === "Scissors" || compChoice === "Scissors" && pChoice === "Paper") {
        result = console.log(`Computer chose ${compChoice} - ${compChoice} beats ${pChoice}, you lose!`);
    };

    return result;
};

pickRock = () => {
    computerMove();
    playerMove("Rock");
};

pickPaper = () => {
    computerMove();
    playerMove("Paper");
};

pickScissors = () => {
    computerMove();
    playerMove("Scissors");
};