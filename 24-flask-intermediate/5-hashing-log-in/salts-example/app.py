hash_table = dict()
with open('xato-net-10-million-passwords-100000.txt', 'r') as f:
    for line in f:
        pwd = line.strip()
        hash_table[hash(pwd)] = pwd