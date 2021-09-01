function sumZero(nums) {
    let left = 0;
    let right = nums.length-1;
    while(left <= right) {
        let sum = nums[left] + nums[right];
        if(sum === 0) return [nums[left], nums[right]]
        sum < 0 ? left++ : right--;
    }
    return false;
}

// [-3, -2, -1, 0, 2, 4]