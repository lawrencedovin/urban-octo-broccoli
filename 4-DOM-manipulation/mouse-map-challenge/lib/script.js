function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

const letters = document.querySelectorAll(".letter");

setInterval(() => {
  for (letter of letters) {
    letter.style.color = randomRGB();
  }
}, 2000);


// document.addEventListener
const body = document.querySelector("body");

// window.innerWidth
let width = window.innerWidth;
// window.innerHeight
let height = window.innerHeight;

// rgb(0,0,0) -> rgb(255,255,255)
document.addEventListener("mousemove", (event) => {
  console.log(event.pageX, event.pageY);
  let r = Math.round(event.pageX * 255 / width);
  let g = 0;
  let b = Math.round(event.pageY * 255 / height);
  body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

// e.pageX       x
// _______     ______
// innerW        255
