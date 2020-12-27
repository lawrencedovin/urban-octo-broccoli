import bcrypt

salt = bcrypt.gensalt()
hashed_pw = bcrypt.hashpw(b'pokemon', salt)
print(hashed_pw)