def get_days_alive(person):
    try:
        days = person['age'] * 365
        print(f"{person['name']} has been alive for {days} days")
    except KeyError as exception:
        print(f"Missing key: {exception}")
    except TypeError:
        print("Expected person to be a dictionary")

person = {'name': 'princess kityy', 'age': 10}
get_days_alive(person)
get_days_alive({'name': 'lawrence'})