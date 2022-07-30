console.log("Before");

// ------------------------------------------
//      CALL BACK APPROACH
// ------------------------------------------

// getUser(1, (user) => {
//     console.log("User", user)

//     //Get REPOS

//     getGitRepos(user.gitUser, (repos) => {
//         console.log(repos)

//         //Get Repo Files
//         getFilesInRepo(repos[0], (fileNames) => {
//             console.log(fileNames);
//         })
//     })


// });

const promise = getUser(1);

promise
    .then((user) => {
        console.log(user)
        return getGitRepos(user.gitUser)
    })

    .then((repos) => console.log(repos))
    .catch((error) => console.log(error))



console.log("After")


function getUser(id) {

    const p = new Promise((resolve, reject) => {

        setTimeout(
            () => {
                console.log("Reading data from database ....");
                resolve({ id: id, gitUser: 'codewithz' });
            }
            , 2000);
    });

    return p;


}

function getGitRepos(username) {

    const p = new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("Calling GITHUB API for user [" + username + "] ...");
            const repos = ['repo1', 'repo2', 'repo3'];
            // resolve(repos);
            reject(new Error("User not found"))
        }, 3000)
    })

    return p;

}

