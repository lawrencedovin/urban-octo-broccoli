def firstn(n):
    num = 0
    nums = []
    while num < n:
        nums.append(num)
        num += 1
    return nums

def firstngen(n):
    num = 0
    while num < n:
        # yield is similar to a return value and remember it's current spot
        # same as firstn except it isn't appending to a list
        yield num
        num += 1