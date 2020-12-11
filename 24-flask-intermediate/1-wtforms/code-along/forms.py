from flask_wtf import FlaskForm
from wtforms import StringField, FloatField, BooleanField, IntegerField, RadioField, SelectField

class AddSnackForm(FlaskForm):
    """Form for adding snacks."""

    name = StringField('Snack Name')
    price = FloatField('Price in USD')
    quantity = IntegerField('How many?')
    is_healthy = BooleanField('This is a healthy snack')
    
    # category = RadioField('Category', choices=[
    #                         ('ice','Ice Cream'), ('chips', 'Potato Chips'), ('candy', 'Candy')])

    category = SelectField('Category', choices=[
                            ('ice','Ice Cream'), ('chips', 'Potato Chips'), ('candy', 'Candy')])

class NewEmployeeForm(FlaskForm):
    """Form for adding employees."""

    name = StringField('Employee\'s Name')
    state = StringField('State')
    dept_code = StringField('Department Code')
