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