const pwordLength = 12;
const lowerCaseChars = true;
const upperCaseChars = true;
const numChars = true;
const symbolChars = true;


generatePword = (length, lowerCaseChars, upperCaseChars, numChars, symbolChars) => {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";
    const syms = "!@#$%^&*()_+~`;:,./<>?[]{}";

    let requiredChars = "";
    let gpwrd = "";
    
    requiredChars += lowerCaseChars ? lower : "";
    requiredChars += upperCaseChars ? upper : "";
    requiredChars += numChars ? nums : "";
    requiredChars += symbolChars ? syms : "";

    if (length <= 0) {
        return `password length must be at least 1 character.`;
    };
    if (requiredChars.length === 0) {
        return `password must have at least one character type selected.`;
    };
    for (i = 0; i < length; i++) {
        const randoindex = Math.floor(Math.random() * requiredChars.length);
        gpwrd += requiredChars[randoindex];
    };
    return gpwrd;
};


const pword = generatePword(pwordLength, lowerCaseChars, upperCaseChars, numChars, symbolChars);

console.log(`Generated pword: ${pword}`);