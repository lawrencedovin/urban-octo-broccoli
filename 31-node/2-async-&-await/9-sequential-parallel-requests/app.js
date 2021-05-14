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

// SEQUENTIAL PARALLEL REQUESTS
// async function catchSomeOfEmParallel() {
//     let baseUrl = "https://pokeapi.co/api/v2/pokemon";
//     let p1Promise = axios.get(`${baseUrl}/1`);
//     let p2Promise = axios.get(`${baseUrl}/2`);
//     let p3Promise = axios.get(`${baseUrl}/3`);

//     let p1 = await p1Promise;
//     let p2 = await p2Promise;
//     let p3 = await p3Promise;

//     console.log(`The first pokemon is ${p1.data.name}`);
//     console.log(`The second pokemon is ${p2.data.name}`);
//     console.log(`The third pokemon is ${p3.data.name}`);
// }

// async function catchSomeOfEmParallel2() {
//     let baseUrl = "https://pokeapi.co/api/v2/pokemon";
//     let pokemon = await Promise.all([
//         axios.get(`${baseUrl}/1/`),
//         axios.get(`${baseUrl}/2/`),
//         axios.get(`${baseUrl}/3/`)
//     ]);

//     console.log(`The first pokemon is ${pokemon[0].data.name}`);
//     console.log(`The second pokemon is ${pokemon[1].data.name}`);
//     console.log(`The third pokemon is ${pokemon[2].data.name}`);
// }

// catchSomeOfEmParallel2();

// async function catchSomeOfEmParallel2() {
//     try {
//         let baseUrl = "https://pokeapi.co/api/v2/pokemon";
//         let pokemon = await Promise.all([
//             axios.get(`${baseUrl}/1/`),
//             axios.get(`${baseUrl}/2/`),
//             axios.get(`${baseUrl}/3/`)
//         ]);

//         console.log(`The first pokemon is ${pokemon[0].data.name}`);
//         console.log(`The second pokemon is ${pokemon[1].data.name}`);
//         console.log(`The third pokemon is ${pokemon[2].data.name}`);
//     } 
//     catch(e) {
//         console.log(e);
//     }
// }

// catchSomeOfEmParallel2();

// let users = ['elie', 'joelburton', 'mmmaaatttttt'];

async function getUsers(user) {
    try {
        let usersPromises = [];
        let baseUrl = "https://api.github.com/users";

        let userPromise = axios.get(`${baseUrl}/${user}`);
        let userData = await userPromise;

        console.log(`${userData.data.name}`);
    }
    catch(e) {
        console.log(e);
    }
}

let users = ['elie', 'joelburton', 'mmmaaatttttt'];
for(user of users) {
    getUsers(user);
}