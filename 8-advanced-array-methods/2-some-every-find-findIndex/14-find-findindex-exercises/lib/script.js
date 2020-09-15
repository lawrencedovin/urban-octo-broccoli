// findUserByUsername
function findUserByUsername(usersArray, findUsername) {
  return usersArray.find((user) => {
    return user.username === findUsername;
  })
}

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

console.log(findUserByUsername(users, 'akagen')); // {username: 'mlewis'}
console.log(findUserByUsername(users, 'taco')); // undefined

// removeUser
function removeUser(usersArray, username) {
  let foundIndex = usersArray.findIndex(function(user){
    return user.username === username;
  })
  if(foundIndex === -1) return;

  return usersArray.splice(foundIndex,1)[0];
}