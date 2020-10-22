def greet(person):
    print(f"HELLOOOOOOO {person}")
greet("Lawrence")

def divide(a, b):
    if type(a) is int and type(b) is int:
        return a/b
    return 'a and b must be integers!'