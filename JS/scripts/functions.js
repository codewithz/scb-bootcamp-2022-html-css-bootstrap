function greetUser(name) {
    alert("Hi " + name);
}

greetUser("Zartab")
greetUser("Tom")

console.log("----------------------------------------------")

function square(num) {
    let x1 = num + 5;
    let x2 = x1 * 3;
    let x = x2 * x2;
    return x;

}

let sq = square(4);
console.log('Square of 4 is', sq);

console.log("---------------- Function Expressions-----------")

const cube = function (num) {
    return num * num * num;
}

console.log("Cube of 3 is", cube(3))