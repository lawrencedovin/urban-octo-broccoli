const cat = "monty";
cat = "rip monty :(";

// Can't redeclare or reassign
// Can Mutate

const myCats = [];
myCats.push('monty');
myCats[1] = 'rocket';
myCats[0] = 'bobo';

console.log(myCats[0]);

// Changes the content but doesn't reassign
// Pointing still at the same array since it is a reference type
// Can't change content of primitive types