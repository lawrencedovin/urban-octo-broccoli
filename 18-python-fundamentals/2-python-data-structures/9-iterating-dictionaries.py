chickens = {
    'name': 'Lady Gray',
    'breed': 'Silkie',
    'total_egg_count': 12,
    'egg_chart': {
       'M': True,
       'T': True,
       'W': True,
       'TH': True,
       'F': True,
       'S': False,
       'SU': True,
    },
    'coop_mates': ['Butters', 'Stevie', 'Henry']
}

# for key in chickens.keys():
#     print(key)

# for value in chickens.values():
#     print(value)

# for pair in chickens.items():
#     print(pair)

for(key, value) in chickens.items():
    print(f"{key}: {value}")
