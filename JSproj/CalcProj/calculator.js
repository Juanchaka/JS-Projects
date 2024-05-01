// let calculation = "";

// putOne = () => {
//     console.log(`${calculation += 1}`);
// };

// putTwo = () => {
//     console.log(`${calculation += 2}`);
// };

// putThree = () => {
//     console.log(`${calculation += 3}`);
// };

// putFour = () => {
//     console.log(`${calculation += 4}`);
// };

// putFive = () => {
//     console.log(`${calculation += 5}`);
// };

// putSix = () => {
//     console.log(`${calculation += 6}`);
// };

// putSeven = () => {
//     console.log(`${calculation += 7}`);
// };

// putEight = () => {
//     console.log(`${calculation += 8}`);
// };

// putNine = () => {
//     console.log(`${calculation += 9}`);
// };

// putZero = () => {
//     console.log(`${calculation += 0}`);
// };

// addSymbol = () => {
//     console.log(`${calculation += " + "}`);
// };

// addDecimal = () => {
//     console.log(`${calculation += "."}`);
// };

// subtractSymbol = () => {
//     console.log(`${calculation += " - "}`);
// };

// multiplySymbol = () => {
//     console.log(`${calculation += " * "}`);
// };

// divideSymbol = () => {
//     console.log(`${calculation += " / "}`);
// };

// calculate = () => {
//     calculation = eval(calculation);
//     console.log(calculation);
//     calculation = "";
// };

let calculation = localStorage.getItem("calculation") || "";
console.log(calculation);

putNumber = (number) => {
    console.log(`${calculation += number}`);
    localStorage.setItem("calculation", calculation);
};

putSymbol = (symbol) => {
    if (!calculation) {
        calculation = 0
    }
    console.log(`${calculation += symbol}`);
    localStorage.setItem("calculation", calculation);
};

calculate = () => {
    calculation = eval(calculation);
    console.log(calculation);
    localStorage.setItem("calculation", calculation);
};

reset = () => {
    calculation = "";
    console.log(calculation);
    localStorage.setItem("calculation", calculation);
};
