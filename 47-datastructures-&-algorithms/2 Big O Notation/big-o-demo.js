/**
 * Reverse a string
 */

let reverse = (str) => {
    let result = '';
    for(let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

let reverse2 = (str) => {
    return str.split('').reverse().join('');
}