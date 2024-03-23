

pickRock = () => {
    const userChoice ="Rock"
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
    console.log(`The computer chose ${compChoice}`);

    if (userChoice === "Rock" && compChoice === "Scissors") {
        console.log("Rock beats scissors");
    } else if (userChoice === "Rock" && compChoice === "Paper") {
        console.log("Paper beats Rock");
    } else if (userChoice === "Rock" && compChoice === "Rock") {
        console.log("It's a tie");
    };
};

pickPaper = () => {
    const userChoice ="Paper"
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
    console.log(`The computer chose ${compChoice}`);

    if (userChoice === "Paper" && compChoice === "Scissors") {
        console.log("Scissors beat Paper");
    } else if (userChoice === "Paper" && compChoice === "Paper") {
        console.log("It's a tie");
    } else if (userChoice === "Paper" && compChoice === "Rock") {
        console.log("Paper beats Rock");
    };
};

pickScissors = () => {
    const userChoice = "Scissors"
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
    console.log(`The computer chose ${compChoice}`);

    if (userChoice === "Scissors" && compChoice === "Scissors") {
        console.log("It's a tie");
    } else if (userChoice === "Scissors" && compChoice === "Paper") {
        console.log("Scissors beat Paper");
    } else if (userChoice === "Scissors" && compChoice === "Rock") {
        console.log("Rock beats Scissors");
    };
};