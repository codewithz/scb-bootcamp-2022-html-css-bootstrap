const underscore = require("underscore");

const numbers = [1, 2, 3, 4, 5];

console.log("Array:", numbers)

const result1 = underscore.contains(numbers, 3)
console.log("Is 3 in array:", result1)


const result2 = underscore.contains(numbers, 6)
console.log("Is 6 in array:", result2)

