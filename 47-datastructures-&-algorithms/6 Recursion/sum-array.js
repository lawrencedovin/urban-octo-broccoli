const sumArray = (nums) => {
    //Base Case
    if(nums.length === 0) return 0;

    //Normal Case
    // nums = [1,2,3]
    //1. 1 + sum([2,3])
    //2. 1 + 2 + sum([3])
    //3. 1 + 2 + 3 + sum([])
    //4. 1 + 2 + 3 + 0

    return nums[0] + sumArray(nums.slice(1));
}

console.log(sumArray([1,2,3]));