console.log("Before");
const user = getUser(1);
console.log(user)
console.log("After")


function getUser(id) {
    setTimeout(
        () => {
            console.log("Reading data from database ....");
            return { id: id, gitUser: 'codewithz' }
        }
        , 2000);

}

// Callback
// Promises
// Async Await