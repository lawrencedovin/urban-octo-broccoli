let fourPokemonPromises = [];

for (let i = 1; i < 5; i++) {
    fourPokemonPromises.push(
        axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    );
}

Promise.all(fourPokemonPromises)
    .then(pokemonArr => (
        for (let response of pokemonArr) {
            console.log(response.data.name);
        }
        // pokemonArr.forEach(p => console.log(p.data.name))
        // console.log(pokemonArr)
    ))
    .catch(err => console.log(err));