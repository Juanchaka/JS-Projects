rollDice = () => {
    const numberODice = document.querySelector("#inputText").value;
    const result = document.querySelector("#results");
    const diceImages = document.querySelector("#diceImages");
    const values = [];
    const images = [];

    for (i = 0; i < numberODice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="DiceImages/${value}.png" alt="Dice: ${value}">`);
    };
    result.innerHTML = `Dice: ${values.join(", ")}`;
    diceImages.innerHTML = images.join("");
};