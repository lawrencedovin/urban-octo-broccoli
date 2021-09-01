function charCount(str) {
    // create empty object to hold char counts
    const count = {};
    // Loop over each char in str
        for(char of str) {
            // If char is letter or number - lowercase first.
            if(/[A-Z0-9]/i.test(char)) {
                char = char.toLowerCase();
                // if char is in object, add 1 to count.
                // otherwise, add to object and set count to 1.
                count[char] = (count[char] !== undefined) ? count[char] + 1 : 1;
            }
        }
    // return object with character counts.
    return count;
}

