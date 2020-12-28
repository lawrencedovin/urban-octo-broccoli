from flask_bcrypt import Bcrypt

bcrypt = Bcrypt()

hash = bcrypt.generate_password_hash('chicken123')
print(hash)

check_pw = bcrypt.check_password_hash(hash, 'chicken123')
print(check_pw)