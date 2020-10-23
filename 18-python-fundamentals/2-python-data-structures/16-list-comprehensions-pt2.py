game_board = [[0 for y in range(3)] for x in range(3)]
print(game_board)

def gen_board(size, initial_val=None):
    return [[initial_val for value in range(size)] for list_created in range(size)]

print(gen_board(4, 1))


[x*2 for x in range(10)] # Acts like map 
[x for x in range(10) if x % 2 == 0] # Acts like filter


chickens = [
    {'name': 'Henry', 'sex': 'Rooster'},
    {'name': 'Lady Gray', 'sex': 'Hen'},
    {'name': 'Junior', 'sex': 'Rooster'},
    {'name': 'Stevie', 'sex': 'Hen'},
    {'name': 'Rocket', 'sex': 'Hen'},
    {'name': 'Butters', 'sex': 'Rooster'}
]

chicken_names = [chicken['name'] for chicken in chickens]
print(chicken_names)

hens = [chicken['name'] for chicken in chickens if chicken['sex'] == 'Hen']
print(hens)

scores = [55, 89, 99, 87, 60, 70, 74, 76, 90, 50, 82]
passed_grade = ['PASS' for score in scores if score >= 70]
grades = ['PASS' if score >= 70 else 'FAIL' for score in scores ]
print(grades)

# [do_this if conditional else do this for thing in things]

def get_letter(ltr):
    morse_lookup = {
        'A': '.-', 'B': '-...',
        'C': '-.-.', 'D': '-..', 'E': '.',
        'F': '..-.', 'G': '--.', 'H': '....',
        'I': '..', 'J': '.---', 'K': '-.-',
        'L': '.-..', 'M': '--', 'N': '-.',
        'O': '---', 'P': '.--.', 'Q': '--.-',
        'R': '.-.', 'S': '...', 'T': '-',
        'U': '..-', 'V': '...-', 'W': '.--',
        'X': '-..-', 'Y': '-.--', 'Z': '--..'
    }
    return morse_lookup.get(ltr.upper(), '')

msg = [get_letter(char) for char in 'SOS']

def get_morse_code(phrase):
    return ' '.join([get_letter(char) for char in phrase])

print(get_morse_code('hello world'))