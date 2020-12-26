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
