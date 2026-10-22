import random

user_input = input("Choose wisely: ")

bot_choice = ["rock", "paper", "scissors"]

if user_input not in bot_choice:
    while user_input not in bot_choice:
        print("Invalid. Try again.")
        user_input = input("Choose wisely: ")

def rps(input):
    bot_decision = random.choice(bot_choice)
    if input == bot_decision:
        print(f"It's a tie. You picked {input} and bot picked {bot_decision}")
        return


    if input == "rock" and bot_decision == "scissors":
        print(f"You win! You picked {input} and bot picked {bot_decision}")
        return

    elif input == "paper" and bot_decision == "rock":
        print(f"You win! You picked {input} and bot picked {bot_decision}")
        return

    elif input == "scissors" and bot_decision == "paper":
        print(f"You win! You picked {input} and bot picked {bot_decision}")
        return

    else:
        print(f"You lose :( You picked {input} and bot picked {bot_decision}")
        return

round = rps(user_input)
round