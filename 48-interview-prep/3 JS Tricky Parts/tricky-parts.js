for(var i=0; i<5; i++) {
    console.log('i is:', i);
    setTimeout(function() {
        console.log(i);
    }, 1000);
}
// Logs 5 instances of 5. var keyword makes i global which can be 
// accessed outside of the loop.

// When timeout runs after 1 second i is set to 5 already.
// console.log('After loop i:', i);

// If we use 'let' keyword 'i' would be scoped to the for loop.
// 'i' would not be global. 'let' is block scoped. for loop makes 
// a new scope everytime it runs.

for(let i=0; i<5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}