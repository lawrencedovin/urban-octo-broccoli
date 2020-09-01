function countDown(seconds) {
  seconds--;
  let timer = setInterval(() => {
    if(seconds === 0) {
      clearInterval(timer);
      console.log('DONE!');
    }
    else console.log(seconds), seconds--;
  }, 1000);
}

countDown(5);