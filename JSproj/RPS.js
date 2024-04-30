computerChoice = () => {
    const randomizer = Math.random();
    if (randomizer >= 0 && randomizer < 1/3) {
        cChoice = "rock"
    }
    else if (randomizer >= 1/3 && randomizer < 2/3) {
        cChoice = "paper"
    }
    else if (randomizer >= 2/3 && randomizer < 1) {
        cChoice = "scissors"
    };
    return cChoice;
};


playerChoice = (pChoice) => {
    if (pChoice === "rock") {
        pChoice = "rock"
    } else if (pChoice === "paper") {
        pChoice = "paper"
    } else if (pChoice === "scissors") {
        pChoice = "scissors"
    };
    return pChoice;
};

playGame = () => {
    let result = "";
    if (computerChoice() === playerChoice()) {
        result = "tie"
        console.log("tie");
    }
    return result
};

pickRock = () => {
    playerChoice("rock");
    playGame();
    console.log(computerChoice());
    console.log(playerChoice("rock"));
    console.log(playGame());
};
pickRock();

pickPaper = () => {
    playerChoice("paper");
    playGame();
    console.log(computerChoice());
    console.log(playerChoice("paper"));
    console.log(playGame());
};
pickPaper();

pickScissors = () => {
    playerChoice("scissors");
    playGame();
    console.log(computerChoice());
    console.log(playerChoice("scissors"));
    console.log(playGame());
};
pickScissors();