def number_compare(a, b):
    """Report on whether a>b, b>a, or b==a
    
        >>> number_compare(1, 1)
        'Numbers are equal'
        
        >>> number_compare(-1, 1)
        'Second is greater'
        
        >>> number_compare(1, -2)
        'First is greater'
    """
    if(type(a) is int and type(b) is int):
        if(a>b):
            print('First is greater')
        elif(a<b):
            print('Second is greater')
        else:
            print('Numbers are equal')
    else:
        print('Incorrect input')

number_compare(1, 1)
number_compare(-1, 1)
number_compare(1, -2)