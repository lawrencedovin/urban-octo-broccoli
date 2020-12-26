hash_table = dict()
with open('xato-net-10-million-passwords-100000.txt', 'r') as f:
    for line in f:
        pwd = line.strip()
        hash_table[hash(pwd)] = pwd

def checkPassword(hash_table, key):
    if key in hash_table.keys():
        print(f'Value = {hash_table[key]}')
    else:
        print('No key found')

def salting_hash(phrase, salt=None):
    # Adds random salt; returns "salt|hash (phrase+salt)"

    #     >>> salting_hash('hey', salt='abc')
    #     'izbd | abc'

    #     >>> salting_hash('hey', salt='def')
    #     'izeg | def'

    if salt is None:
        salt = str(randint(1000, 9999))

    hashed = slightly_better_hash(f"{phrase}|{salt}")
    return f"{hashed}|{salt}"
    