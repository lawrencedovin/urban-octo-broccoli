function countDown(seconds) {
  seconds--;
  setInterval(() => {
    if(seconds === 0) clearInterval(1), console.log('DONE!');
    else console.log(seconds), seconds--;
  }, 1000);
}

countDown(5);

function randomGame(){
  let counter = 1;
  setInterval(() => {
    let number = Math.random();
    if(number > .75) clearInterval(1), console.log(`It took ${counter} amount of tries`);
    counter++;
  }, 1000);
}

randomGame();