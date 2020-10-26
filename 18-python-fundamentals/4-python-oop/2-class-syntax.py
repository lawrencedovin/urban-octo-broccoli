from math import sqrt

class Triangle: 
    "Right triangle."

    def __init__(self, a, b):
        # equivalent to the constructor
         self.a = a
         self.b = b
        # self represents the instance
    
    def get_hypotenuse(self):
        return sqrt(self.a ** 2 + self.b ** 2)
    
    def get_area(self):
        return self.a * self.b / 2