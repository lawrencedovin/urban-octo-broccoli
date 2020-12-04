""""Seed file to make sample data for db."""

from models import Department, Employee, db
from app import app

# Create all tables
db.drop_all()
db.create_all()

marketing = Department(dept_code='mktg', dept_name='Marketing', phone='610-2999')
accounting = Department(dept_code='acct', dept_name='Account', phone='610-2932')
sales = Department(dept_code='sales', dept_name='Sales')

billy = Employee(name='Billy Joel', state='MD', dept_code='mktg')
buko = Employee(name='Buko Pie', state='NY', dept_code='mktg')
bob = Employee(name='Bob Ross', state='PA', dept_code='acct')
jim = Employee(name='Jim Halpert', state='PA', dept_code='sales')
ryan = Employee(name='Ryan Reynalds', dept_code='sales')
freelancer = Employee(name='Free Lancer')

car = Project(proj_code='car', proj_name='Design Car')
server = Project(proj_code='server', proj_name='Deploy Server')

db.session.add_all([marketing, accounting, sales])
db.session.add_all([billy, buko, bob, jim, ryan, freelancer])
db.session.commit()