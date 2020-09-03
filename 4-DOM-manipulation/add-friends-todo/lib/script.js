const removeButtons = document.querySelectorAll("li>button");

for(btn of removeButtons) {
  btn.addEventListener('click', (e) => {
    console.log("You clicked remove");
    e.target.parentElement.remove();
  });
}