from triangle import Triangle

class ColoredTriangle(Triangle):
    """Triangle that has a color."""

    def __init__(self, a, b, color):
        # get parent class [`super()`], all its `__init__()`
        super().__init__(a,b)
        self.color = color

    def describe(self):
        msg = super().describe()
        return msg + f" I am {self.color}"