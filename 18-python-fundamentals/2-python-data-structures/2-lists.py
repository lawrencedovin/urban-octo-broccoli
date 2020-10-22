list('hello')
list(range(10,20,2))
vegan_no_nos = ['eggs', 'meat', 'milk', 'fish', 'figs']
pie_ingredients = ['flour', 'apples', 'sugar', 'eggs', 'salt']

for food in pie_ingredients:
     print(f"OH NO, CANNOT EAT {food}! IT'S NOT VEGAN") if food in vegan_no_nos else print(f"YUM I LOVE {food}!")

special_chars = "$@*("

"!" in special_chars 