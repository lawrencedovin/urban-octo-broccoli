function mean(nums) {
    let mean = nums.reduce((a, b) => a + b, 0) / nums.length;
    return mean;
}

function median(nums) {
    let sortedNumsArray = nums.sort((num1, num2) => num1-num2);
    let median = sortedNumsArray[Math.floor(sortedNumsArray.length/2)];
    return median;
}

function mode(nums) {
    let mapping = {};

    for(let i = 0; i < nums.length; i++) {
        if (!mapping[nums[i]]) mapping[nums[i]] = 0;
        mapping[nums[i]] += 1;
    }
    
    let mode = Object.keys(mapping).reduce((num1, num2) => mapping[num1] > mapping[num2] ? num1 : num2);
    return mode
}

// NEEDS EXPRESS ERROR
module.exports = {
    mean,
    median,
    mode
};