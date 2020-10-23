egg_days = {day:0 for day in ['M','T','W','TH','F','S', 'SU']}
print(egg_days)

square_object = {num: num**2 for num in range(1, 10)}
print(square_object)

square_even_object = {num: num**2 for num in range(1, 10) if num % 2 == 0}
print(square_even_object)

{char for char in 'abracadabra'} # gets unique letters

consonant = {char for char in 'hello darkness my old friend' if char not in 'aeiou'}