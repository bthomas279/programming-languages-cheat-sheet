#Attributes are the data an instance holder (title, pages, etc)
#Methods are functions defined inside the class thart work with that data (read(), progress(), etc.)
#You call a method on an instance with a dot, and the method automatically knows which instance it belongs to.

#Inside of classes, standalone functions that passes records are moved inside of the class

#Example:
class Book:
    def __init__(self, title, pages):
        self.title = title
        self.pages = pages
        self.pages_read = 0 #every book starts unread

    def read(self, n): #changes the instance's state
        self.pages_read = min(self.pages_read + n, self.pages)

    def progress(self):
        return round(self.pages_read / self.pages * 100, 1 )

    def __repr__(self): #Controls how the objects print
        return f"Book(title={self.title}, read={self.pages_read}/{self.pages})"

#Interact with the class
dune = Book("Dune", 412)
dune.read(100)
dune.read(50)

print(dune.pages_read)
print(dune.progress())
print(dune)
print([dune])
print("-"*30)
############################### Assignment
class BankAccount:

    def __init__(self, owner):
        self.owner = owner
        self.balance = 0

    def deposit(self, amount):
        self.balance = self.balance + amount

    def withdraw(self, amount):
        if amount > self.balance:
            return False
        else:
            self.balance = self.balance - amount
            return True

    def __repr__(self):
        return f"Bank Account info: (Owner = {self.owner}, Balance = ${self.balance})"


user = BankAccount("Dave")
user.deposit(50)
user.withdraw(20)
print(user)
        
