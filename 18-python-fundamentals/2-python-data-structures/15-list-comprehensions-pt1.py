nums = [1,2,3,4,5,6,7,8,9,10,11,12,13]


# evens = []
# for num in nums:
#     if num % 2 == 0:
#         evens.append(num)

# print(evens)

# evens = [num for num in nums if num % 2 == 0]


double_trouble = [num*2 for num in nums]
print(double_trouble)

square_pants = [num**2 for num in nums]
print(square_pants)

acronym = [char.upper() for char in 'LOL']
print(str('.'.join(acronym)))

[num for num in range(10,20)]