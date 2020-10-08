const firstNameInput = document.querySelector("#firstNameInput");
const lastNameInput = document.querySelector("#lastNameInput");
const getJokeBtn = document.querySelector("#getJokeBtn");
const jokeText = document.querySelector("#jokeText");

async function getChuckNorrisJokes() {
  try {
    const url = `http://api.icndb.com/jokes/random`;
    const res = await axios.get(url, {
      params: {
        firstName: `${firstNameInput.value}`,
        lastName: `${lastNameInput.value}`,
      },
    });
    const { joke } = res.data.value;
    jokeText.innerText = joke;
  } catch (e) {
    alert(`Eror: ${e}`);
  }
}

getJokeBtn.addEventListener("click", getChuckNorrisJokes);
