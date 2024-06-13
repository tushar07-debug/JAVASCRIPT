class Uer{
    constructor(username)
    {
        this.username=username
    }
    loMe()
    {
        console.log(`USERNAME is ${this.username}`);
    }
}
class Teacher extends Uer{
    constructor(username,email,pass)
    {
        super(username)
        this.email=email
        this.pass=pass
    }
    addCourse()
    {
        console.log(`a new course added by ${this.username}`)
    }
}

const chai = new Teacher("cahi","emial@gamil.com","123")
chai.addCourse()



const masalaChai = new Uer("cew")
masalaChai.loMe()
console.log(chai===masalaChai)
console.log(chai===Teacher)
console.log(chai instanceof Teacher);