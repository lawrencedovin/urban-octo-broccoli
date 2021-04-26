let url = "https://pokeapi.co/api/v2/pokemon";

axios
    .get(`${url}/1/`)
    .then(pokemon1 => {
        console.log(`The first pokemon is ${pokemon1.data.name}`);
        return axios.get(`${url}/2/`);
    })
    .then(pokemon2 => {
        console.log(`The second pokemon is ${pokemon2.data.name}`);
        return axios.get(`${url}/3/`);
    })
    .then(pokemon3 => {
        console.log(`The third pokemon is ${pokemon3.data.name}`);
    })
    .catch(err => {
        console.log(`Oops, there was a problem :( ${err}`);
    });