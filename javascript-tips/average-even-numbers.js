// [1, 2, 4, 5] => 6 / 2 => 3
// [1, 2, 4, 8] => 14 / 3 => 4.66667

const getAverageOfEvenNumbers = (array) => {
    // loop through array
    // filter to get even numbers
    // sum even numbers
    // count how many even numbers
    // average = sum / count

    const sum = array.filter(number => number % 2 === 0)
                   .reduce((accumalator, currentNumber) => accumalator + currentNumber);
    const count = array.filter(number => number % 2 === 0)
                     .reduce((accumalator) => accumalator + 1, 0);
    const average = sum / count;
    return average;
}

console.log(getAverageOfEvenNumbers([1, 2, 4, 5]));
console.log(getAverageOfEvenNumbers([1, 2, 4, 8]));