const color = 'teal';

const obj = {};
obj.color = '#3273FF'; // color: #3273FF
obj[color] = '#3273FF'; // teal: #3273FF

for(let [key,value] of Object.entries(obj)){
  console.log(key, value);
}