// document.addEventListener("keypress", (e) => {
//   console.log(e.key);
// });

// document.addEventListener("keydown", (e) => {
//   console.log(e.key);
// });

// document.addEventListener("keyup", (e) => {
//   console.log(e.key);
// });

document.querySelector('input[type="text"]').addEventListener('keypress', (e) => {
  console.log("Key Press: ", e.key);
});