async function getData() {
    const response = await axios.get('https://swapi.dev/api/planets/');
    for(let planet of response.data.results) console.log(planet.name);
}

getData();

