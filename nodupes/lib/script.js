// numbers = [];

// function calculateAverage(numbers) {
//     // Write your code here
//     let total = 0;
    
//     for(let i = 0; i < numbers.length; i++){
//         total += numbers[i];
//     }
    
//     return numbers.length != 0 ? total / numbers.length : 0;

// }

// console.log(calculateAverage(numbers));

// function countUniqueValues(arr){
//     let i = 0;
//     let j = 0;
//     let tempArr = []

//     arr.sort();

//     for(j = 0; j < arr.length; j++) {
//         if(arr[i] != arr[j]){
//             tempArr.push(arr[i]);
//             i++;
//             arr[i]=arr[j];
//         } 
//     }

//     tempArr.push(arr[arr.length-1]);
    
//     return tempArr;
// }

// console.log(countUniqueValues([1,1,1,2,6,4,2,3,4,5,2,3]));

function dedupe(numbers) {
    let x = (numbers) => numbers.filter((v,i) => numbers.indexOf(v) === i)
    return x(numbers);
}

console.log(dedupe([1,1,1,2,6,4,2,3,4,5,2,3]));