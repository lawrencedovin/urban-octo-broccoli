def bounded_avg(nums):
    """Returns average of list of nums (nums must be between 1-100)

        >>> bounded_avg([2,4,6])
        4.0

        >>> bounded_avg([10,20,30,40,50])
        30.0

        >>> bounded_avg([2,4,500])
        Traceback (most recent call last):
        ...
        ValueError: Outside bounds of 1-100

    """
    for num in nums:
        if num < 1 or num > 100:
            raise ValueError("Outside bounds of 1-100")
        
    return sum(nums) / len(nums)