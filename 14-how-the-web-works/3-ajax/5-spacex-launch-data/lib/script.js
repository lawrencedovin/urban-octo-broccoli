const button = document.querySelector("#getRockets");

async function getRockets() {
  const response = await axios.get("https://api.spacexdata.com/v3/rockets");
  const {data} = response;
  renderRockets(data);
}

function renderRockets(rockets) {
  const rocketList = document.querySelector("#rockets");
  for(let i = 0; i < rockets.length; i++) {
    rocketList.append(makeRocketLI(rockets[i]));
  }
}

function makeRocketLI(rockets) {
  const rocket = document.createElement('li');
  const rocketText = document.createElement('b');
  rocketText.innerText = `${rockets.rocket_name}`;
  rocket.append(rocketText);
  rocket.innerHTML += ` - $${rockets.cost_per_launch}/launch`;
  return rocket;
}

button.addEventListener('click', getRockets);