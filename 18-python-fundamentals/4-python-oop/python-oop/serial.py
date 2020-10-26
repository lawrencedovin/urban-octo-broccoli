class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """

    def __init__(self, start=0):
        """Make a new generator, starting at start."""
        self.start = start
        self.next = start

    def __repr__(self):
        """Show representation."""

        return f"<SerialGenerator start={self.start} next={self.next+1}>"

    def generate(self):
        """Return next serial."""

        self.next += 1 # Updates Serial by 1
        return self.next - 1 # Gives previous value, initial serial.generate() = 100 not 101

    def reset(self):
        """Reset number to original start."""
        self.next = self.start

