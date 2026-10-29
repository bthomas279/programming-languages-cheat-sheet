#Lession one: classes

class Student():

    def __init__(self, name, major):
        self.name = name 
        self.major = major

student1 = Student("student1", "computer_science")
student2 = Student("student2", "information_science")
student3 = Student("student3", "business")

print(student1.name, student1.major) #student one, computer_science. etc for other
print(student2.name, student2.major)
print(student3.name, student3.major)


#Try for a list (like a csv)
#Turn it into a list of student instances (a loop or list comprehension)
rows = [
    {"name": "Ana", "major": "InfoSci"},
    {"name": "Jay", "major": "CS"},
]
#Answer##
place = []
for row in rows:
    student = Student(row['name'], row['major']) # first row is replaced
    place.append(student)
    
print(place)


#################################### Lesson 2 Bridge
class Student2():

    def __init__(self, name, major):
        self.name = name 
        self.major = major

    def is_major(self):
        if self.major == "computer_science":
            return True

student4 = Student2("student4", "computer_science")

print(f"Computer Science? | {student4.is_major()}")