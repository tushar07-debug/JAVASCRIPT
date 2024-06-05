// single ton -> constructor se jo banega woh single ton hoga

//object literals
//object literals is a way to create object in javascript

 //Object.create
 const mySym = Symbol("key1")

 const JsUser = {
    name: 'John',
    age: 30,
    [mySym]:"mykey1",
    location: 'New York',
    isLoggedIn : false,
    email: "tushargoogel@gmail.com",
    LasrDate:["Monday","Saturday"]
 } 
console.log(JsUser.email)
console.log(JsUser["email"]) //this is also correct way to access property of object
console.log(JsUser["LasrDate"][1]) //this is also correct way 

console.log(typeof JsUser[mySym])
console.log(JsUser[mySym])

JsUser.email = "tushar@gmail.com"
// // Object.freeze(JsUser)
JsUser.email = "tu@gmail.com"
// console.log(JsUser)

JsUser.greeting = function()
{
    console.log("hello")
}
JsUser.greeting1 = function()
{
    console.log(`hello, ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greeting1())
