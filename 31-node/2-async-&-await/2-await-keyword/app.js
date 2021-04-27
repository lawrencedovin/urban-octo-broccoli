async function getStarWarsFilms() {
    const res = await axios.get('https://swapi.dev/api/films');
    console.log(res.data);
}

getStarWarsFilms();