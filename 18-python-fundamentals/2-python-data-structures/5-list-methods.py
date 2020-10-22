chickens = ['butters', 'lady gray', 'stevie chicks']
len(chickens)

chickens.append('chicken little')

copy_flock = chickens.copy()

copy_flock is chickens #False
copy_flock == chickens #True

chickens.append('romeo')

chickens.index('butters')

chickens.pop()

chickens.reverse()

chickens.sort()