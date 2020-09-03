const form = document.querySelector("#add-friend");
const input = document.querySelector("#first-name");
const friendList = document.querySelector("#friend-list");

friendList.addEventListener('click', (e) => {
  if(e.target.tagName === "BUTTON") e.target.parentElement.remove();
  else if (e.target.tagName === "LI") {
    e.target.classList.toggle("best-friend");
    const heart = document.createElement('span');
    heart.innerHTML = "&hearts;";
    e.target.prepend(heart);
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const newFriend = document.createElement('li');
  const removeBtn = document.createElement('button');

  removeBtn.innerText = 'Unfriend';
  newFriend.innerText = input.value;
  
  newFriend.appendChild(removeBtn);
  friendList.appendChild(newFriend);
  
  input.value = '';
});