//Classes define the shape, instances hold its own values for them

class Students {
    //Always label the type of each thing
    name: string 
    major: string

    //Initializer (like innit)
    constructor(name: string, major: string ) {
        this.name = name
        this.major = major
    }

}
const student4: Students = new Students("student4", "computer_science") //student4, computer_science. etc for others
const student5: Students = new Students("student5", "information_science")
const student66: Students = new Students("student6", "business")

console.log(student4)
console.log(student4)
console.log(student4)

//Practice question: turn this into objects
const exampleRows = [
    {"name": "Ana", "major": "InfoSci"},
    {"name": "Jay", "major": "CS"},
]

//Method 1
const place2 = []
for (let i = 0; i < exampleRows.length; i++) {
    const studentTs = new Students(exampleRows[i].name, exampleRows[i].major)
    place2.push(studentTs)
}
console.log(place2)

//Method 2
const arrayts = exampleRows.map(row => new Students(row.name, row.major))
console.log(arrayts)

