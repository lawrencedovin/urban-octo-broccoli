async function getData() {
  const response = await axios.get("https://swapi.dev/api/planets/");
  const { next, results } = response.data;
  // next = response.data.next and results = response.data.results
  console.log(next);
  for (let planet of results) {
    console.log(planet.name);
  }

  const responsePg2 = await axios.get(next);
  const resultsPg2 = responsePg2.data.results;
  for (let planet of resultsPg2) {
    console.log(planet.name);
  }
}

getData();
