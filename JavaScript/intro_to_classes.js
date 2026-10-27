class Student {
    //Constructor is the setup
    constructor(name, major) {
        this.name = name
        this.major = major
    }
}
//Details (create new object)
const student1 =  new Student("student1", "computer_science")
const student2 = new Student("student2", "information_science")
const student3 = new Student("student3", "business")

console.log(student1) //student one, computer_science. etc for others
console.log(student2)
console.log(student3)

//Call certain things in a object
console.log(student1.name)

//Practice question: turn this into objects
const rows = [
    {"name": "Ana", "major": "InfoSci"},
    {"name": "Jay", "major": "CS"},
]

//Method 1
const place = []
for (let i = 0; i < rows.length; i++) {
    const student = new Student(rows[i].name, rows[i].major)
    place.push(student) //Like append for python
}
console.log(place)

//Method 2
const array2 = rows.map(row => new Student(row.name, row.major))
console.log(array2)
