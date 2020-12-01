from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_db(app):
    db.app = app
    db.init_app(app)

# MODELS GO BELOW!

class Department(db.Model):
    """Department Model"""

    __tablename__ = 'departments'

    dept_code = db.Column(db.Text, primary_key=True)
    dept_name = db.Column(db.Text, nullable=False, unique=True)
    phone = db.Column(db.Text)

    def __repr__(self):
        return f'<Department {self.dept_code} {self.dept_name} {self.phone}>'
        
    # employees = db.relationship('Employee')

class Employee(db.Model):
    """Employee Model"""

    __tablename__ = 'employees'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.Text, nullable=False, unique=True)
    state = db.Column(db.String(2), nullable=False, default='CA')
    dept_code = db.Column(db.Text, db.ForeignKey('departments.dept_code'))

    def __repr__(self):
        return f'<Employee {self.name} {self.state} {self.dept_code}>'

    # department = db.relationship('Department')
    department = db.relationship('Department', backref='employees')

def get_directory():
    employees = Employee.query.all()

    for employee in employees:
        if employee.department is not None:
            print(employee.name, employee.department.dept_name, employee.department.phone)  
        else:
            print(employee.name, '-', '-')