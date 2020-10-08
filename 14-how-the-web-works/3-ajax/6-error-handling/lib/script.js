const randomDogeButton = document.querySelector("#getRandomDoge");
const dogeByBreedButton = document.querySelector("#getDogeByBreed");
const dogePic = document.querySelector("img");
const dogeInput = document.querySelector("#dogeInput");

async function getRandomDoge() {
  const res = await axios.get('https://dog.ceo/api/breeds/image/random');
  const {message} = res.data;
  dogePic.src = message;
}

async function getDogeByBreed() {
  try {
    const url = `https://dog.ceo/api/breed/${dogeInput.value}/images/random`;
    const res = await axios.get(url);
    const { message } = res.data;
    dogePic.src = message;
  } catch (e) {
    alert("RUFF RUFF!");
  }
}

randomDogeButton.addEventListener("click", getRandomDoge);
dogeByBreedButton.addEventListener("click", getDogeByBreed);
