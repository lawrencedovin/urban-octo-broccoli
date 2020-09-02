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

const ul = document.querySelector("ul");
const newTodo = document.createElement("li");

const boldText = document.createElement('b');
boldText.textContent = "Don't forget to lock the coop!";
newTodo.classList.add("todo");
newTodo.append(boldText);

const secondTodo = document.createElement("li");
secondTodo.textContent = "Chicken nuggets";
secondTodo.classList.add("todo");

ul.append(newTodo, secondTodo);

const thirdTodo = document.createElement("li");
thirdTodo.textContent = "NUMBERRRR 1!";

ul.prepend(thirdTodo);

const newImg = document.createElement('img');
newImg.classList.add('thumbnail');
newImg.setAttribute('src', 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1320&q=80');

document.body.prepend(newImg);