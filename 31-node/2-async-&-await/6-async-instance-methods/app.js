// async function getStarWarsFilms() {
//     const res = await axios.get('https://swapi.dev/api/films/')
//     console.log(res)
// }

// getStarWarsFilms()

async function getUser(user) {
    try {
        let url = `https://api.github.com/users/${user}`;
        let response = await axios.get(url);
        console.log(`${response.data.name}: ${response.data.bio}`);
    } catch(e) {
        console.log("User does not exist!");
    }
}

function getUser(user) {
    let url = `https://api.github.com/users/${user}`;
    axios.get(url)
        .then(response => {
            console.log(`${response.data.name}: ${response.data.bio}`);
        })
        .catch(e => {
            console.log("User does not exist!", e);
        })
}

getUser('lawrencedovin');
getUser('lawrencedovin123');