names = ['charlie', 'lucy']
[charlie, lucy] = names

print(charlie)

point = (100, 58)

x, y = point
print(x, y)

sorted_scores = [2400, 2350, 2100, 1960]

top_score, *rest = sorted_scores
print(top_score)
print(rest)

[first, last] = 'Lawrence Dovin'.split(" ")
initials = f"{first[0]} {last[0]}"
print(initials)

color_pairs = [['red', 'green'], ['purple', 'orange']]
[[red, green], [purple, orange]] = color_pairs
print(purple)

grades = {
    'A': 12,
    'B': 19,
    'C': 30
}

# for pair in grades.items():
#     k, v = pair

for (k, v) in grades.items():
    print(k, v)