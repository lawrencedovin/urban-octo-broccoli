from random import randint, choice

def get_rand_year():
    return randint(1900, 2020)

def get_rand_month():
    months = ["January","February","March","April","May","June","July",
            "August","September","October","November","December"]

    return choice(months)