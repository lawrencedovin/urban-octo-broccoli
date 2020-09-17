let z = 5;
z = 25;
let z = 10;
// SyntaxError: identifier 'z' has already been declared

function danceType() {
  let danceType = "Tango";
  console.log(danceType);
}

var i = "hello";
for(var i = 0; i <= 3; i++) {
  console.log(i);
}
console.log(i); // 4

// New values exists outside of scope

let i = "hello";
for(let i = 0; i <= 3; i++) {
  console.log(i);
}
console.log(i); // hello

let mood = 'fantastic';
function getMood(num) {
  let mood = 'meh';
  if(num < 3) let mood = 'bad :(';
  return mood;
}

getMood(2); // meh


