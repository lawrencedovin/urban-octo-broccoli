///////Passing Array//////////
const bandData = [
  [3, "3 Doors Down"],
  ["three", "Three Dog Night"],
  ["nine", "Nine Inch Nails"],
  ["four", "The Four Seasons"],
  [41, "Sum 41"],
];

const bandMap = new Map(bandData);
[...bandMap] 
// returns to bandData format

bandMap.set(182, "Blink 182").set("twenty", "Matchbox Twenty");

for([key, value] of bandMap) {
    console.log(key, value);
}