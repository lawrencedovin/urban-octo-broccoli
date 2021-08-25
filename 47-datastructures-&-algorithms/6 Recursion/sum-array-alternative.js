const sum = (nums, i=0) => {
    if(nums.length === 0) return 0;
    // nums = [1,2,3]
    //1. 1 + sum([2,3])
    //2. 1 + 2 + sum([3])
    //3. 1 + 2 + 3 + sum([])
    //4. 1 + 2 + 3 + 0
    return nums[i] + sum(nums, i+1);
}