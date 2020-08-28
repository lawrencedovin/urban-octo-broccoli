/*
 * Complete the 'isPangram' function below.
 *
 * The function is expected to return a boolean.
 * The function accepts string called str as a parameter.
 */

// function isPangram(str) {
//     let alphabet = /([a-z])(?!.*\1)/g;
//     return (str.match(alphabet) || []).length === 26;
// }

function isPangram(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let lowercase = str.toLowerCase();
   
    for(let i = 0; i < alphabet.length; i++){
     if(lowercase.indexOf(alphabet[i]) === -1){
        // iterates through the alphabet and checks if it exists in the lower case string
       return "not pangram";
     }
    }
   
   return "pangram";
 }
 
 console.log(isPangram("ab?>?>cdzefghijklmn pqrstu  vwxy"));