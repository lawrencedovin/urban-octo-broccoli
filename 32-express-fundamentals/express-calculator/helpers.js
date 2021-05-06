const ExpressError = require('./expressErrors');

function convertAndValidateNums(nums) {
    let numsArray = nums.split(',').map((num) => {
        if (isNaN(parseInt(num))) {
            return `The value '${num}' is not a valid number.`;
        }
        else {
            return parseInt(num);
        }
    });
    return numsArray;
}
// NEEDS EXPRESS ERROR
module.exports = {
    convertAndValidateNums
};