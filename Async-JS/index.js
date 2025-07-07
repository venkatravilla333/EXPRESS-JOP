console.log('hi');

// var user = getUser(1)
// console.log(user)
// var repos = getGitHubRepos(user)
// console.log(repos)
// var commits = getCommits(repos)
// console.log(commits)

// getUser(1, (user) => {
//   console.log(user);
//   getGitHubRepos(user, (repos) => {
//     console.log(repos);
//     getCommits(repos, (commits) => {
//       console.log(commits);
//     });
//   });
// });

console.log('bye');

// function getUser(id, callback) {
//   setTimeout(() => {
//     // return {id: id, userName: 'sachin'}
//     callback({ id: id, userName: 'sachin' });
//   }, 2000);
// }
// function getGitHubRepos(user, callback) {
//   setTimeout(() => {
//     // return ['repo-1', 'repo-2', 'repo-3']
//     callback(['repo-1', 'repo-2', 'repo-3']);
//   }, 2000);
// }
// function getCommits(repos, callback) {
//   setTimeout(() => {
//     // return ['commit-1', 'commit-2', 'commit-3']
//     callback(['commit-1', 'commit-2', 'commit-3']);
//   }, 2000);
// }

// getUser(1).then((user) => {
//   console.log(user)
//  return getGitHubRepos(user)
// }).then((repos) => {
//   console.log(repos)
//   return getCommits(repos)
// }).then((commits) => {
//   console.log(commits)
// }).catch((err) => {
//   console.log(err)
// })

//async wait

async function getDetails() {
var user = await getUser(1)
console.log(user)
var repos = await getGitHubRepos(user)
console.log(repos)
var commits = await getCommits(repos)
console.log(commits)
}

getDetails()




function getUser(id) {
 return new Promise((res, rej) => {
    setTimeout(() => {
      // return {id: id, userName: 'sachin'}
      res({ id: id, userName: 'sachin' });
    }, 2000);
 })
  
}
  

function getGitHubRepos(user,) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      // return ['repo-1', 'repo-2', 'repo-3']
      res(['repo-1', 'repo-2', 'repo-3']);
    }, 2000);
    })
  }
function getCommits(repos, callback) {
  return new Promise((res, rej) => {
      
    setTimeout(() => {
      // return ['commit-1', 'commit-2', 'commit-3']
      res(['commit-1', 'commit-2', 'commit-3']);
    }, 2000);
    })
  }
