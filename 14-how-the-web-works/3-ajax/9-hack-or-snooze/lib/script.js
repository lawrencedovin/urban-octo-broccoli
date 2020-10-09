// async function getUsers() {
//   const res = await axios.get(
//     "https://hack-or-snooze-v3.herokuapp.com/users?skip=0&limit=10"
//   );
//   console.log(res);
// }

// async function getUsers() {
//   const res = await axios.get(
//     "https://hack-or-snooze-v3.herokuapp.com/signup"
//   );
//   console.log(res);
// }

// getUsers();

// async function signUp(name, username, password) {
//   const res = await axios.post("https://hack-or-snooze-v3.herokuapp.com/signup", 
//   {
//     user: { name, username, password }
//   });
//   console.log(res);
// }

async function signUp(username, password, name) {
  const res = await axios.post("https://hack-or-snooze-v3.herokuapp.com/signup", { user: {
    name, username, password }})
  console.log(res);
}


// signUp('butters', 'chickenbutter', '12312');
signUp('butterschicken', '238197sadhj', 'butters the chicken');