const giphySearchInput = document.querySelector("#giphySearchInput");
const giphySearchBtn = document.querySelector("#giphySearchBtn");
const giphyRemoveBtn = document.querySelector("#giphyRemoveBtn");
const giphyImagesContainer = document.querySelector("#giphyImagesContainer");

async function generateRandomGiphy(tag) {
  if (tag) {
    const apiKey = "WgK8bdF6rEUX7lE9MZYtdULCgzul7XKo";
    const res = await axios.get(`http://api.giphy.com/v1/gifs/random`, {
      params: { tag, api_key: apiKey },
    });
    const { image_url } = res.data.data;
    addImage(image_url);
  } else {
    alert("Please enter a tag 🥳");
  }
}

function addImage(url) {
  const img = document.createElement("img");
  img.src = url;
  img.classList.add("col-md-4", "my-3");
  giphyImagesContainer.append(img);
}

giphySearchBtn.addEventListener("click", () => {
  generateRandomGiphy(giphySearchInput.value);
  giphySearchInput.value = "";
});

giphyRemoveBtn.addEventListener("click", () => {
  giphyImagesContainer.innerHTML = '';
});
