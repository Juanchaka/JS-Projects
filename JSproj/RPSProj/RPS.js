const countScore = {
    Wins: 0,
    Losses: 0,
    Ties: 0
};

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
    let compChoice = computerMove();
    if (compChoice === pChoice) {
        countScore.Ties += 1;
        result = console.log(`Computer chose ${compChoice} - It's a tie!\n${score()}`);
    } else if (compChoice === "Scissors" && pChoice === "Rock" || compChoice === "Rock" && pChoice === "Paper" || compChoice === "Paper" && pChoice === "Scissors") {
        countScore.Wins += 1;
        result = console.log(`Computer chose ${compChoice} - ${pChoice} beats ${compChoice}, you win!\n${score()}`);
    } else if (compChoice === "Paper" && pChoice === "Rock" || compChoice === "Rock" && pChoice === "Scissors" || compChoice === "Scissors" && pChoice === "Paper") {
        countScore.Losses += 1;
        result = console.log(`Computer chose ${compChoice} - ${compChoice} beats ${pChoice}, you lose!\n${score()}`);
    };
    return result;
};

score = () => {
    return (`Wins: ${countScore.Wins}, Losses: ${countScore.Losses}, Ties: ${countScore.Ties}`)
};

resetScore = () => {
    countScore.Wins = 0; countScore.Losses = 0; countScore.Ties = 0;
    console.log(score());
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