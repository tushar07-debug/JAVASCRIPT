class User{
    constructor (email,pass){
        this.email=email
        this.pass =pass
    }
    
    get pass(){
        return `${this._pass}hitesh`
    }
    set pass(value)
    {
        this._pass = value.toUpperCase()
    }
}
const hitesh = new User("hitesh@gamil.com","abc")
console.log(hitesh.pass)