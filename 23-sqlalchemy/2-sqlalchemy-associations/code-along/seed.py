""""Seed file to make sample data for db."""

from models import Department, Employee, db
from app import app

# Create all tables
db.drop_all()
db.create_all()

marketing = Department(dept_code='mktg', dept_name='Marketing', phone='610-2999')
acounting = Department(dept_code='acct', dept_name='Account', phone='610-2932')
billy = Employee(name='Billy Joel', state='MD', dept_code='mktg')
buko = Employee(name='Buko Pie', state='NY', dept_code='mktg')
bob = Employee(name='Bob Ross', state='PA', dept_code='acct')

db.session.add(marketing)
db.session.add(acounting)
db.session.add(billy)
db.session.add(buko)
db.session.add(bob)

db.session.commit()