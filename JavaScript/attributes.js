//Attributes are the data an instance holder (title, pages, etc)
//Methods are functions defined inside the class thart work with that data (read(), progress(), etc.)
//You call a method on an instance with a dot, and the method automatically knows which instance it belongs to.

//Inside of classes, standalone functions that passes records are moved inside of the class

//Example: (same as python)
class Book {
    constructor(title, pages) {
        this.title = title
        this.pages = pages
        this.pagesRead = 0
    }
    //Methods to interact with the attributes
    read(n) {
        this.pagesRead = Math.min(this.pagesRead + n, this.pages)
    }

    progress() {
        return Math.round((this.pagesRead / this.pages) * 1000) / 10
    }
    
}

//Call the class
const dune = new Book("Dune", 412) //name and pages
dune.read(100)
dune.read(50)
console.log(dune.progress()) //36.4
console.log(dune)

//Notice how there are no functions interally and the constructor defines each attribute.

//Practice
class BankAccount {
    constructor(owner, balance) {
        this.owner = owner
        this.balance = balance = 0

    }
    deposit(n) {
        this.balance = this.balance + n
    }
    withdraw(n) {
        if (n > this.balance) {
            return false
        }
        else {
            this.balance = this.balance - n
            return true
        }
    }
}

const brian = new BankAccount("Brian")
brian.deposit(50)
brian.withdraw(30)
console.log(brian)