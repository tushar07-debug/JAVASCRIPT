class User{
    constructor(username){
        this.username=username
    }
    lofMe()
    {
        console.log(`username:${this.username}`);
    }
    static createId()
    {
        return `23`
    }
}
const hitesh = new  User("hit")
// console.log(hitesh.createId()) 


// not run beavuse it is static  it means it not for u it for me ap apna kaam kro baki 
//example like teacher childeren erp acces in mongodb id taht some thing are only for teacher not for student to acces 
//to run thsi kindly remove static 


class teacher extends User{
    constructor (username,email){
        super(username)
        this.email=email
    }
}
const iphone = new teacher("iphoen","iph@gamil.com")
iphone.lofMe()

console.log(iphone.createId()) // because of static