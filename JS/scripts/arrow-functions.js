function sayHello() {
    console.log("Hello World!!")
}

let v1 = () => {
    console.log("Hello World!!")
}

sayHello()
v1()
// --------------------------------------------------------------
function squareMe(number) {
    return number * number;
}

let square1 = (number) => {
    return number * number;
}

console.log(squareMe(2))
console.log(square1(3))

// Zero Parameters --> () - compulsory
// One Parameter -() - optional [you can get rid of it]
// More than one parameter - () - compulsory

let square2 = number => {
    return number * number;
}

console.log(square2(4))

// Single Statement --> you can get rid of {} and also return keyword
// You cannot skip one and use other

// If a function have a single statement
// console.log(something) - Executable statement -- in this case the
// statmement will be executed

// number*number -- value -- in this caseit will be returned

// If you are returning something
// no {} -- no return keyword is needed
// {} -- return keyword is compulsory

let square3 = number => number * number;

console.log(square3(5))


// Task 

function add(a, b, c) {
    return a + b + c;
}

let add1 = (a, b, c) => a + b + c;


// Task 

function calculation(a, b, c) {
    let d = a + b + c;
    let e = a - b - c;
    return d * e;
}


let calc = (a, b, c) => {
    let d = a + b + c;
    let e = a - b - c;
    return d * e;
}

console.log("--------------- Usage of Arrow Functions ----")

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let evenNumbers = numbers.filter(function (item, index) {
    return (item % 2 == 0)
});

console.log("Even Numbers:", evenNumbers)

let oddNumbers = numbers.filter(number => number % 2 == 1)

console.log("Odd Numbers:", oddNumbers)


let squaredNumbers = numbers.map(function (item) {
    return item * item;
})

console.log("Squared:", squaredNumbers)

let cubedNumbers = numbers.map(number => number * number * number)

console.log("Cubed:", cubedNumbers)
