const form = document.querySelector("form");
const friendList = document.querySelector("#friend-list");

const buttons = document.querySelectorAll("li button");

for (let button of buttons) {
  button.addEventListener("click", function(event) {
    event.target.parentElement.remove();
  });
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const newFriendInput = document.querySelector("#first-name");
  const newLi = document.createElement("li");
  const newButton = document.createElement("button");
  newLi.innerText = newFriendInput.value;
  newButton.innerText = "Remove";

  friendList.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
      event.target.parentElement.remove();
    }
  }); 

  newLi.append(newButton);
  friendList.append(newLi);
  form.reset();
});

