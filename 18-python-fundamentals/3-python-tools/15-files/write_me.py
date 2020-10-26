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

input_file = open("english.txt", "r")
output_file = open("morse.txt", "w")

for line in input_file:
    output_file.write(get_morse_code(line))

input_file.close()
output_file.close()

# file = open("send.txt", "a")
# file = open("send.txt", "w")

# file.write("This is a new line.")
# file.write("\nSo is this.")

# file.close()