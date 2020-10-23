def single_letter_count(word, letter):
    """How many times does letter appear in word (case-insensitively)?
    
        >>> single_letter_count('Hello World', 'h')
        1
        
        >>> single_letter_count('Hello World', 'z')
        0
        
        >>> single_letter_count("Hello World", 'l')
        3
    """
    # count = 0
    # for char in word:
    #     if letter.lower() == char.lower():
    #         count += 1
    # print(count)

    print(word.lower().count(letter.lower()))

single_letter_count('Hello World', 'h')
single_letter_count('Hello World', 'z')
single_letter_count("Hello World", 'l')