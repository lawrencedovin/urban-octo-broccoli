// function sayHi() {
//     return new Promise((resolve, reject) => {
//         resolve("HELLO!!");
//     })
// }

// function sayHi() {
//     return Promise.resolve("HELLO");
// }

async function sayHi() {
    return "HELLO!";
}

async function oops() {
    throw "BAD IDEA!"
}

sayHi().then((msg) => console.log(msg))

oops()
.then(msg => console.log(msg))
.catch(err => console.log("INSIDE CATCH: ", err))