from math import sqrt
from random import randint

class Triangle: 
    """
    A class used to represent a right triangle

    Attributes
    ----------------
    a: int
        length of side a

    b: int
        length of side b
    """

    def __init__(self, a, b):
        # equivalent to the constructor
         self.a = a
         self.b = b
        # self represents the instance
    
    @classmethod
    def random(cls):
        """Class method which returns Triangle with random sides"""
        return cls(randint(1, 20), randint(1, 20))
    # alters the behavior of the method that comes after it

    def get_hypotenuse(self):
        """Calculates hypotenuse (3rd side of right triangle)"""
        return sqrt(self.a ** 2 + self.b ** 2)
    
    def get_area(self):
        """Calculates area of right triangle"""
        return self.a * self.b / 2

    def describe(self):
        """returns string representing the triangle"""
        return f"I am a triangle with side: {self.a} & {self.b}"

    

    


