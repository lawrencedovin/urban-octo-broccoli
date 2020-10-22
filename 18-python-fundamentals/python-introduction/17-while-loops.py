# num = 0

# while num <= 100:
#     if num == 50:
#         break
#     print(num)
#     num += 10

# print("All done")

target = 37
guess = None

while guess != target:
    guess = input("enter your guess > ")
    if guess == 'q' or guess == 'quit':
        break
    guess = int(guess)
print("ALL DONE")
