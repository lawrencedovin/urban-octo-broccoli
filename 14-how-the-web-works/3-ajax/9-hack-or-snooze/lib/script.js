async function getUsers(token) {
  const res = await axios.get("https://hack-or-snooze-v3.herokuapp.com/users", {
    params: { token },
  });
  // takes the token and adds it as a part of the query string
  // console.log(res);
}

async function signUp(name, username, password) {
  const res = await axios.post(
    "https://hack-or-snooze-v3.herokuapp.com/signup",
    {
      user: { name, username, password },
    }
  );
  console.log(res);
}

async function login(username, password) {
  const res = await axios.post(
    "https://hack-or-snooze-v3.herokuapp.com/login",
    {
      user: { username, password },
    }
  );
  console.log(res);
  // logs user with details
  return res.data.token;
  // returns the unique token
}

async function getUsersWithAuth() {
  const token = await login("pokemonmaster1993", "123abc");
  // Logging in with these credentials and gives back a token
  getUsers(token);
  // getUsers returns that user using the unique
  // token that is returned from the login function
}
async function createStory() {
  const token = await login("pokemonmaster1993", "123abc");
  const newStory = {
    token,
    story: {
      author: 'Lawrence',
      title: 'Puberty, the horror',
      url: 'http://puberty.com'
    }
  }
  const res = await axios.post("https://hack-or-snooze-v3.herokuapp.com/stories",  newStory);
  console.log(res);
}

// signUp('Lawrence Dovin', 'pokemonmaster1993', '123abc');
//login("pokemonmaster1993", "123abc");
// getUsersWithAuth();
// createStory();