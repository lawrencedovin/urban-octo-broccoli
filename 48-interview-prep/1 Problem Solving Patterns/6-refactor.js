function charCount(str) {
    const count = {};
    for(char of str) {
        if(/[A-Z0-9]/i.test(char)) {
            char = char.toLowerCase();
            count[char] = count[char] + 1 || 1;
        }
    }
    return count;
}

// Not better because we have to iterate the str 2X
// 1st for splitting the str to an array and another
// time to reduce it.
function charCount(str) {
    return str.split('').reduce((obj, char) => {
        if(/[A-Z0-9]/i.test(char)) {
            char = char.toLowerCase();
            count[char] = count[char] + 1 || 1;
        }
        return obj;
    }, {});
}

