const colorsSection = document.querySelector("#colors");

colorsSection.addEventListener('click', (e) => {
  document.body.style.backgroundColor = e.target.dataset.hex;
});