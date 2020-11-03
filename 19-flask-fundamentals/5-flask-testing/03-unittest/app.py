import arithmetic_dt
from unittest import TestCase

class AddditionTestCase(TestCase):
    """Examples of unit tests."""

    def test_adder(self):
        assert arithmetic_dt.adder(2, 3) == 5

    def test_adder_2(self):
        # instead of assert arithmetic.adder(2, 2) == 4
        self.assertEqual(arithmetic_dt.adder(2, 2), 4)
