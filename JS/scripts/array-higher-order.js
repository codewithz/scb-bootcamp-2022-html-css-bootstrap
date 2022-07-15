let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("Original:", numbers)
let evenNumbers = []

for (let number of numbers) {

    if (number % 2 == 0) {
        evenNumbers.push(number)
    }

}

console.log("After Even Check:", evenNumbers)

// ---------------------------------------------

let squareNumbers = []

for (let number of numbers) {
    let sqaure = number * number;
    squareNumbers.push(sqaure)
}

console.log("After Square:", squareNumbers)

console.log("---------------------- Higher Order Functions-----------")

numbers.forEach(function (item, index) {
    console.log(item, " is at index:", index)
})

function display(item, index) {
    console.log(item, "is at index:", index)
}

numbers.forEach(display)

console.log("----------------- filter ---------------------")

const oddNumbers = numbers.filter(function (item, index) {
    return item % 2 == 1;
})

console.log("Odd Numbers:", oddNumbers)

console.log("-------------------- map ----------------")

const cubedArray = numbers.map(function (item, index) {
    return item * item * item
})

console.log(cubedArray)