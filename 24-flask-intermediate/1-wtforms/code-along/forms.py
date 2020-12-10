from flask_wtf import FlaskForm
from wtforms import StringField, FloatField

class AddSnackForm(FlaskForm):
    """Form for adding snacks."""

    name = StringField('Snack Name')
    price = FloatField('Price in USD')

class NewEmployeeForm(FlaskForm):
    """Form for adding employees."""

    name = StringField('Employee\'s Name')
    state = StringField('State')
    dept_code = StringField('Department Code')
