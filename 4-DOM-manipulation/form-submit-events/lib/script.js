const form = document.querySelector("#doggyform");
form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log("YOU SUBMITTED THE FORM");
});