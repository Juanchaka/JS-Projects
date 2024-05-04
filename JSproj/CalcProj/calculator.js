let calculation = localStorage.getItem("calculation") || "";

printResults = () => {
    const display = document.querySelector(".showResults");
    display.innerHTML = calculation;
};

printResults();

updateCalculation = (input) => {
    calculation += input;

    printResults();
    localStorage.setItem("calculation", calculation);
};

calculate = () => {
    calculation = eval(calculation);
    printResults();
    localStorage.setItem("calculation", calculation);
};

reset = () => {
    calculation = "";
    printResults();
    localStorage.setItem("calculation", calculation);
};
