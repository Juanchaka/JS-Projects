let cartQuantity = 0;

showQuantity = () => {
    console.log(`Cart quantitiy: ${cartQuantity}`);
};

addToCart = () => {
    console.log(`Cart quantitiy: ${cartQuantity += 1}`);
};

add2ToCart = () => {
    console.log(`Cart quantitiy: ${cartQuantity += 2}`);
};

add3ToCart = () => {
    console.log(`Cart quantitiy: ${cartQuantity += 3}`);
};

removeFromCart = () => {
    if (cartQuantity === 0) {
        console.log(`Cart quantity is ${cartQuantity}! Nothing to remove from cart.`);
    }else {
        console.log(`Cart quantity: ${cartQuantity -= 1 }`);
    }
};

resetCart = () => {
    if (cartQuantity === 0) {
        console.log(`Cart quantity is ${cartQuantity}! Cart reset successful`);
    } else {
    console.log('Cart was reset!');
    console.log(`Cart quantitiy: ${cartQuantity = 0}`);
    }
};

const cost = 2 * 3 + 5 + 9;
const tax = cost * .1;
const totalCost = cost + tax;

console.log(`Cost of food: $${cost}`);
console.log(`Cost of tax: $${tax}`);
console.log(`total cost: $${totalCost}`);