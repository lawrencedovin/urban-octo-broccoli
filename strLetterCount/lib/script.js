function strLetterCount(word) {
    let charObject = {};
    let charCount = [];

    for(let i=0; i < word.length; i++){

        let char = word[i].toLowerCase();
        if (charObject[char] > 0) {
            charObject[char]++;   
        } 

        else {
            charObject[char] = 1;
        }

    }

    for (let key in charObject) {
        charCount.push(key, charObject[key]);
    }
    return charCount.join("");
}