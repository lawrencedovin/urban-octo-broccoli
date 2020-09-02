const todo = document.querySelector('li');

// for(item of todo){
//   item.addEventListener('click', () => {
//     item.classList.toggle("completed");
//   });
// }

todo.addEventListener('click', () => {
  todo.classList.toggle("completed");
  // If completed is already on there remove it. Else add it
});
// todo.classList.add("completed");
// todo.classList.remove("completed");

const h1 = document.querySelector("h1");

setInterval(() => {
  h1.classList.contains('big') ? h1.innerText = "SAD" : h1.innerText = "HAPPY";
  h1.classList.toggle('big');
  h1.classList.toggle('small');
}, 1000);

