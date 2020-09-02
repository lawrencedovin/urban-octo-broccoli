const form = document.querySelector("form");
const friendList = document.querySelector("#friend-list");
const buttons = document.querySelectorAll("li button");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newFriendInput = document.querySelector("#first-name");
  const newLi = document.createElement("li");
  const newButton = document.createElement("button");
  newLi.innerText = newFriendInput.value;
  newButton.innerText = "Remove";

  friendList.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      event.target.parentElement.remove();
    }
  }); 

  newLi.append(newButton);
  friendList.append(newLi);
  form.reset();
});

