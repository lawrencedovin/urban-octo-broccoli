function greet() {
  console.log("HELLOO");
}

function diss() {
  console.log("You not good looking");
}

greet();
setTimeout(greet, 3000);
setTimeout(diss, 3000);

const id = setInterval(diss, 3000);
clearInterval(id);