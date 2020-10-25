raise ValueError("Incorrect value")

def bounded_avg(nums):
    "Return avg of nums (makes sure nums are 1-100)"

    for num in nums:
        if num < 1 or num > 100:
            raise ValueError("Outside bounds of 1-100")
        
    return sum(nums) / len(nums)