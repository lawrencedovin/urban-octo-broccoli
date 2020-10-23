moods = {'happy', 'sad', 'grumpy'}
dwarfs = {'happy', 'grumpy', 'doc'}

moods | dwarfs # union: {'happy', 'sad', 'grumpy', 'doc'}
moods.union(dwarfs)

moods & dwarfs # intersection: {'happy', 'grumpy'}

moods - dwarfs # difference: {'sad'}
dwarfs - moods # difference: {'doc'}

moods ^ dwarfs # symmetric difference: {'sad', 'doc'}

lemon = {'sour', 'yellow', 'fruit', 'bumpy'}
banana = {'fruit', 'smooth', 'sweet', 'yellow'}
orange = {'fruit', 'bumpy', 'orange', 'sweet'}