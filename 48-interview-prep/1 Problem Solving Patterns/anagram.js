// Determines if the second string is an anagram of the first
// Anagram is where all the letters of the first can be used in the second
// If freq of first matches freq of second

/***EXAMPLES***/
// validateAnagram("", ""); // true
// validateAnagram("aaz", "zza"); // false
// validateAnagram("anagram", "nagaram"); // false
// validateAnagram("rat", "car"); // false
// validateAnagram("qwerty", "qeywrt"); // true

function makeFreqCounter(str) {
    const freqCounter = {}
    for(char of str) {
        freqCounter[char] = freqCounter[char] + 1 || 1;
    }
    return freqCounter;
}

function validateAnagram(str1, str2) {
    // Check if length is same
    if(str1.length !== str2.length) return false;
    // Create frequency counters of char
    const str1FreqCounter = makeFreqCounter(str1);
    const str2FreqCounter = makeFreqCounter(str2);

    // loop over each char/key of str1 freq counter
    for(key in str1FreqCounter) {
        // check if char exist as a key in str2 if it doesn't throw error
        if(!str2FreqCounter[key]) return false;
        // checks if the value of the found key,value pairs matches 
        // in both str1 and str2 if it doesn't throw error.
        if(str1FreqCounter[key] !== str2FreqCounter[key]) return false;
    }
    // if looped over with no errors then returns true
    return true;
}