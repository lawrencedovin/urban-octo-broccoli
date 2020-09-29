const blue = {
  name: 'Blue',
  breed: 'Garfield',
  dance(dance) {
    console.log(`This is: ${this}`);
    console.log(`Meow, I am ${this.name} and I like to ${dance}`);
  },
  play(...toys){
    for(toy of toys){
      console.log(`${this.name} plays with ${toy}`);
    }
  },
  greet(){
    alert(`${this.name} SAYS MEOW`);
  }
};

const btn1 = document.querySelector('#btn1');
btn1.addEventListener("click", blue.greet.bind(blue));

const btnA = document.querySelector('#a');
const btnB = document.querySelector('#b');
const btnC = document.querySelector('#c');

function popUp(msg) {
  alert(`Secret message is ${msg}`);
}

btnA.addEventListener("click", popUp.bind(null, 'BUTTON A!!!! SAYS HELLLOOOO!!!!'));
btnB.addEventListener("click", popUp.bind(null, 'BUTTON B!!!! SAYS HELLLOOOO!!!!'));
btnC.addEventListener("click", popUp.bind(null, 'BUTTON C!!!! SAYS HELLLOOOO!!!!'));


