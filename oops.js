// js and classes
// technicaly no classes

//but yes classes is there in ECMA Script 2015 reffered as ES6

//oop
//object -collection of properties and methods
//ex-tolowercase

//why use oop
//to handel messy code
//featyures of java use

//parts of oop
///object literals

// constructor function
//prototypes
//classes
//instances or new keyword or this

  


//object literals
// const user = {
//     username:"hitesh",
//     loginCount: 8,
//     signedin:true,

//     getUserDetails:function(){
//         console.log(this)
//     }
// }
// console.log(user.username)
// console.log(this)



// new keyword is the constructor function
function User(username,loginCount, isloggedin)
{
    this.username = username
    return this
}

const user = User("hitersh",12,true)
console.log(user);