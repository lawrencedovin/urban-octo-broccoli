// CALL BACK
let baseUrl = "https://pokeapi.co/api/v2/pokemon/";

$.getJSON(`${baseUrl}/1/`, p1 => {
    console.log(`The first pokemon is ${p1.name}`);
    $.getJSON(`${baseUrl}/2/`, p2 => {
        console.log(`The second pokemon is ${p2.name}`);
        $.getJSON(`${baseUrl}/3/`, p3 => {
            console.log(`The third pokemon is ${p3.name}`);
        });
    });
});

// PROMISES
function getThreePokemon() {
    let baseUrl = "https://pokeapi.co/api/v2/pokemon";
    axios.get(`${baseUrl}/1`)
        .then(({data}) => {
            console.log(`The first pokemon is ${data.name}`);
            return axios.get(`${baseUrl}/2`)
        })
        .then(({data}) => {
            console.log(`The second pokemon is ${data.name}`);
            return axios.get(`${baseUrl}/3`)
        })
        .then(({data}) => {
            console.log(`The third pokemon is ${data.name}`);
        })
        .catch((e) => {
            console.log(e);
        })
}

// ASYNC FUNCTION
async function getThreePokemonAsync() {
    let baseUrl = "https://pokeapi.co/api/v2/pokemon";
    let {data: p1} = await axios.get(`${baseUrl}/1`);
    console.log(p1.name);
    let {data: p2} = await axios.get(`${baseUrl}/2`);
    console.log(p2.name);
    let {data: p3} = await axios.get(`${baseUrl}/3`);
    console.log(p3.name);
}