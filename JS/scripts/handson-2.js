const names = ["sTandaRd", "ChaRteRed", "baNK"]

console.log("Original:", names)

let transformedNames = names.map(function (item, index) {
    const upperCased = item.toUpperCase();
    return upperCased;
})

console.log(transformedNames)