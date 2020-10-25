nums = [2, 4, 6, 8]
[*nums] #makes a copy

[-2, 0, *nums]

nums1 = [1, 3, 5]
nums2 = [2, 4, 6]

combined_numbers = [*nums1, *nums2]
print(combined_numbers)

[*'hello']
# ['h', 'e' ...]

{*'hello', 45}

rainfall = {
    'Jan': 2.5,
    'Feb': 4.9
}

dictionary_spread = {'Dec': 0.5, **rainfall}
print(dictionary_spread)