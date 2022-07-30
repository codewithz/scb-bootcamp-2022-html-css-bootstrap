console.log("Before");

getUser(1, (user) => {
    console.log("User", user)

    //Get REPOS

    getGitRepos(user.gitUser, (repos) => {
        console.log(repos)

        //Get Repo Files
        getFilesInRepo(repos[0], (fileNames) => {
            console.log(fileNames);
        })
    })




});


console.log("After")


function getUser(id, callback) {
    setTimeout(
        () => {
            console.log("Reading data from database ....");
            callback({ id: id, gitUser: 'codewithz' });
        }
        , 2000);


}

function getGitRepos(username, callback) {

    setTimeout(() => {
        console.log("Calling GITHUB API for user [" + username + "] ...");
        const repos = ['repo1', 'repo2', 'repo3'];
        callback(repos);
    }, 3000)
}

function getFilesInRepo(repoName, callback) {
    setTimeout(
        () => {
            console.log("Calling Github API for Repo :", repoName);
            const fileNames = ['A.java', 'b.css'];
            callback(fileNames);
        }
        , 3000)
}