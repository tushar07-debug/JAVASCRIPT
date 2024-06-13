//makw our own protype object
//.hitesh() 
let myhero = ["thor","spiderman"]
let hero = {
    thor:"ahmemer",
    spiderman:"sling",

    getspider:function()
    {
        console.log(`spidy power is ${this.spiderman}`);
    }
}

let heroPower = {

}
Object.prototype.hitesh = function()
{
    console.log(`hsitesh is present`);
}
Array.prototype.heyhitesh = function()
{
    console.log(`hsitesh`);
}
hero.hitesh()
myhero.heyhitesh()
// heroPower.heyHitesh()
// Array.heyitesh()



//inhertitance old syntax
teacher.__proto__ = User

//modern syntax inheritance
Object.setPrototypeOf(TeachingSupport,Teacher)