const greeter = {
  msg: 'I like chickenz',
  sayHi: () => {
    alert(this.msg);
    // Gets this as a Window function
  },
  waitAndGreet: (delay) => {
     setTimeout(() => {
      alert(this.msg);
    }, delay);
  } 
 };