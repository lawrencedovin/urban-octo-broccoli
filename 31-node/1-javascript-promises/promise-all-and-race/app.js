// let fourPokemonPromises = [];

// for (let i = 1; i < 5; i++) {
//     fourPokemonPromises.push(
//         axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
//     );
// }

// Promise.all(fourPokemonPromises)
//     .then(pokemonArr => {
//         for (pokemon of pokemonArr) {
//             console.log(pokemon.data.name);
//         }
//         // pokemonArr.forEach(p => console.log(p.data.name))
//         // console.log(pokemonArr)
//     })
//     .catch(err => console.log(err));

let fourPokemonPromises = [];

for (let i = 1; i < 5; i++) {
    fourPokemonPromises.push(
        axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    );
}

Promise.race(fourPokemonRace)
    .then(res => {
        console.log(`${res.data.name} won the race!`)
    })
    .catch(err => console.log(err))