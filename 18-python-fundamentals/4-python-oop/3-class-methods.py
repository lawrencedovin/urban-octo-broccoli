from math import sqrt
from random import randint

class Triangle: 
    "Right triangle."

    def __init__(self, a, b):
        # equivalent to the constructor
         self.a = a
         self.b = b
        # self represents the instance
    
    @classmethod
    def random(cls):
        return cls(randint(1, 20), randint(1, 20))
    # alters the behavior of the method that comes after it

    def get_hypotenuse(self):
        return sqrt(self.a ** 2 + self.b ** 2)
    
    def get_area(self):
        return self.a * self.b / 2

def rand_triangle():
    return Triangle(3, 4)
