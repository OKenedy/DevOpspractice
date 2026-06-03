// random-number.js

function generateRandomNumber() {
    return Math.floor(Math.random() * 51);
}

module.exports = generateRandomNumber;
console.log(generateRandomNumber());