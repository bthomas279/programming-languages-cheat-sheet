//Attributes are the data an instance holder (title, pages, etc)
//Methods are functions defined inside the class thart work with that data (read(), progress(), etc.)
//You call a method on an instance with a dot, and the method automatically knows which instance it belongs to.

//Inside of classes, standalone functions that passes records are moved inside of the class

//Example:
class BookTs {
    title: string
    pages: number
    pagesRead: number = 0

    //Initialize attributes
    constructor(title: string, pages: number) {
        this.title = title
        this.pages = pages
    }

    read(n: number): void { //Use void since this returns nothing. Use n: number
        //since a input is needed
        this.pagesRead = Math.min(this.pagesRead + n, this.pages)
    }

    progress(): number { //Use number since this returns something
        return Math.round((this.pagesRead / this.pages) * 1000) / 10;
    }
}

//Call the class
const duneTs = new BookTs("Dune", 412) //name and pages
duneTs.read(100)
duneTs.read(50)
console.log(duneTs.progress()) //36.4

console.log("=================================")

class BankAccountTs {
    owner: string
    balance: number = 0

    constructor(owner: string) {
        this.owner = owner
        this.balance = 0
    }
    deposit(amount: number) {
        this.balance = this.balance + amount
    }
    withdraw(amount: number) {
        if (amount > this.balance) {
            return false
        }
        else {
            this.balance = this.balance - amount
            return true
        }

    }
}

const jesse = new BankAccountTs("Jesse")
jesse.deposit(50)
jesse.withdraw(30)
console.log(jesse)