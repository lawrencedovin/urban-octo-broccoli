var musician = "Elton John";
musician = "Britney Spears";
musician = 57;
var musician = true;
// Redeclares and Reassigns

function song() {
  var song1 = "Goodbye Yellow Brick Road";
  console.log(song1);
}

// console.log(song1);

// Uncaught ReferenceError: song1 is not defined
// cannot access variable declared inside the function, outside the block

var song2 = "Hello";
function songing() {
  console.log(song2);
}

song();

// can access property declared outside the block, inside the function