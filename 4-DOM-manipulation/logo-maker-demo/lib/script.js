const form = document.querySelector("#logoform");
const brandInput = document.querySelector('input[name="brandname"]');
const colorInput = document.querySelector('input[name="color"]');
const fontSizeInput = document.querySelector('input[name="fontsize"]');
const logos = document.querySelector("#logos");

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newLogo = makeLogo(brandInput.value, colorInput.value, fontSizeInput.value);
  logos.appendChild(newLogo);
});

function makeLogo(text, color, size) {
  const logo = document.createElement('h2');
  logo.innerText = text;
  logo.style.color = color;
  logo.style.fontSize = size + "px";
  return logo;
}