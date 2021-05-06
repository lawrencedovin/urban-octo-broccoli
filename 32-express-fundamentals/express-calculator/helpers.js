function convertAndValidateNums(nums) {
    let numsArray = nums.split(',').map((num) => {
        if(isNaN(parseInt(num))) {
            return next(new ExpressError(`The value '${num}' is not a valid number.`, 400));
        }
        return parseInt(num);
    });
    return numsArray;
}
// NEEDS EXPRESS ERROR
module.exports = {
    convertAndValidateNums
};