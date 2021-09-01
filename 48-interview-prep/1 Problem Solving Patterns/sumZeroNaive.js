function sumZero(nums) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === 0) return [nums[i], nums[j]];
        }
    }
}

[-3, -2, -1, 0, 2, 4]