chicken = {
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

chicken.get('sex', 'undetermined')
chicken['sex'] = 'Hen'

chicken.get('sex', 'undetermined')

chicken.popitem()

{}.fromkeys('MTWF', True)