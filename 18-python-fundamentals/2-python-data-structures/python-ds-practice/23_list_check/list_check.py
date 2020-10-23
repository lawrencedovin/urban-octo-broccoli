def list_check(lst):
    """Are all items in lst a list?

        >>> list_check([[1], [2, 3]])
        True

        >>> list_check([[1], "nope"])
        False
    """
    # return [list_item for list_item in lst if type(list_item) is list]

    for list_item in lst:
        if type(list_item) is not list:
            return False
    return True

print(list_check([[1], [2, 3]]))
print(list_check([[1], "nope"]))

