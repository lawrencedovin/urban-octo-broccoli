// // CALL BACK
// let baseUrl = "https://pokeapi.co/api/v2/pokemon/";

// $.getJSON(`${baseUrl}/1/`, p1 => {
//     console.log(`The first pokemon is ${p1.name}`);
//     $.getJSON(`${baseUrl}/2/`, p2 => {
//         console.log(`The second pokemon is ${p2.name}`);
//         $.getJSON(`${baseUrl}/3/`, p3 => {
//             console.log(`The third pokemon is ${p3.name}`);
//         });
//     });
// });

// // PROMISES
// function getThreePokemon() {
//     let baseUrl = "https://pokeapi.co/api/v2/pokemon";
//     axios.get(`${baseUrl}/1`)
//         .then(({data}) => {
//             console.log(`The first pokemon is ${data.name}`);
//             return axios.get(`${baseUrl}/2`)
//         })
//         .then(({data}) => {
//             console.log(`The second pokemon is ${data.name}`);
//             return axios.get(`${baseUrl}/3`)
//         })
//         .then(({data}) => {
//             console.log(`The third pokemon is ${data.name}`);
//         })
//         .catch((e) => {
//             console.log(e);
//         })
// }

// // ASYNC FUNCTION
// async function getThreePokemonAsync() {
//     let baseUrl = "https://pokeapi.co/api/v2/pokemon";
//     let {data: p1} = await axios.get(`${baseUrl}/1`);
//     console.log(p1.name);
//     let {data: p2} = await axios.get(`${baseUrl}/2`);
//     console.log(p2.name);
//     let {data: p3} = await axios.get(`${baseUrl}/3`);
//     console.log(p3.name);
// }

// let users = ['elie', 'joelburton', 'mmmaaatttttt'];

// async function getUser(user) {
//     try {
//         let url = `https://api.github.com/users/${user}`;
//         let response = await axios.get(url);
//         console.log(`${response.data.name}: ${response.data.bio}`);
//     }
//     catch(e) {
//         console.log("User does not exist!");
//     }
// }

// async function getUser(user) {
//     try {
//         let url = `https://api.github.com/users/elie`;
//         let response = await axios.get(url);
//         console.log(`${response.data.name}: ${response.data.bio}`);
//     }
//     catch(e) {
//         console.log("User does not exist!");
//     }
// }

// getUser('elie');

// for (let user of users) {
//     getUser(user);
// }

// let users = ['elie', 'joelburton', 'mmmaaatttttt'];
// let usersPromises = [];

// for (let user of users) {
//     usersPromises.push(`https://api.github.com/users/${user}`);
// }

// Promise.all(usersPromises)
//     .then(userArr => (
//         userArr.forEach(user => console.log(user))
//     ))
//     .catch(err => console.log(err));

// async function getUsers() {
//     let url = 'https://api.github.com/users';
//     let user1 = await axios.get(`${url}/elie/`);
//     let user2 = await axios.get(`${url}/joelburton/`);

//     console.log(`First user is ${user1.data}`);
//     console.log(`Second user is ${user2.data}`);
// }

// getUsers();