const p = new Promise((resolve, reject) => {

    // Kick off some async task here 

    setTimeout(() => {
        console.log("Some Async Task Here ....")
        // If this async call is successful
        // resolve(someValue);

        // resolve(1);

        // If this async call is unsuccessful
        // reject(someValue)

        reject(new Error("some error"));

    }, 3000);


});

p
    .then((result) => {
        console.log(result)
    })
    .catch((result) => {
        console.log(result)
    })