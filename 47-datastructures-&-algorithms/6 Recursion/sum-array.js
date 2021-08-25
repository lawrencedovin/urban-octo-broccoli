const sumArray = (nums) => {
    //Base Case
    if(nums.length === 0) return 0;

    //Normal Case
    // We are peeling 1 number at a time and adding it eventually to every other number
    // sum([3,4,5])
    // 3 + sum([4,5])
    // 4 + sum([5])
    // 5 + sum([])
    // 0

    return nums[0] + sumArray(nums.slice(1));
}

console.log(sumArray([3,4,5]));