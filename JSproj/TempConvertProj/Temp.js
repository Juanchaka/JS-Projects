const textBox = document.querySelector("#textBox");
const toF = document.querySelector("#toF");
const toC  = document.querySelector("#toC");
const conversion = document.querySelector("#conversion");
let temp;

convert = () => {
    if(toF.checked) {
        temp = Number(textBox.value);
        console.log(temp);
        temp = temp * (9/5) + 32;
        conversion.textContent = `${temp.toFixed(1)}°F`;
    } else if (toC.checked) {
        temp = Number(textBox.value);
        temp = 5/9 * (temp - 32);
        conversion.textContent = `${temp.toFixed(1)}°C`;
    } else {
        conversion.textContent = `Please select a unit first!`;
    };
};