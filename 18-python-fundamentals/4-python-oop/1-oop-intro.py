from collections import Counter
from datetime import date

# make instance of a counter
counts = Counter("hello world")

type(counts) # 'collections.Counter'

isinstance(counts, Counter) # True

date()