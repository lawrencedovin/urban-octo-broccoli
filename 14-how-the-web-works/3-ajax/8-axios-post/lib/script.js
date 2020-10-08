async function getUsers() {
  const res = await axios.get("https://reqres.in/api/users");
  console.log(res);
}

async function postUsers() {
  const res = await axios.post("https://reqres.in/api/users", {
    username: "ButtersDaChickenNugget",
    email: "butters@gmail.com",
    age: 1
  });
  console.log(res);
}

getUsers();
postUsers();
