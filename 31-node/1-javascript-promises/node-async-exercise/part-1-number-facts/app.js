let url = "http://numbersapi.com/";
let multipleNumbersPromises = [];
let multipleNumbers = [93, 7, 1];
let favoriteNumbersPromises = [];
let favoriteNumber = 7;

for (number of multipleNumbers) {
    multipleNumbersPromises.push(
        axios.get(`${url}${number}?json`)
    );
}

Promise.all(multipleNumbersPromises)
    .then(numberArr => {
        numberArr.forEach(number => console.log(number.data));
    })
    .catch(err => console.log(err));


for(let i = 1; i < 5; i++) {
    favoriteNumbersPromises.push(
        axios.get(`${url}${favoriteNumber}?json`)
    );
}

Promise.all(favoriteNumbersPromises)
    .then(numberArr => {
        numberArr.forEach(number => console.log(number.data.text));
    })
    .catch(err => console.log(err));