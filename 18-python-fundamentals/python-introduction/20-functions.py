def greet(person):
    print(f"HELLOOOOOOO {person}")
greet("Lawrence")

def divide(a, b):
    if type(a) is int and type(b) is int:
        return a/b
    return 'a and b must be integers!'


def send_email(to_email, from_email, subject, body):
    email = f"""
        to: {to_email}
        from: {from_email}
        subject: {subject}
        ----------------------
        body: {body}
    """
    print(email)

send_email(subject="Meow", to_email="blu@g.com", from_email="raisin@g.com", body="Hi blue, u r bad cat")