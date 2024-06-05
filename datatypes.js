//summary 

// primitive and non primitive it means by  call by value and call by reference 

// primitive data types are passed by value and non primitive data types are passed by reference

// primitive data types are int, float, double, char, boolean, short, long, byte   

// non primitive data types are array, class, interface, string, object, enum, struct, delegate, ref, out, in, params, dynamic, object, type

 // 7 types: Strings, Number, Boolean, null , undefined, Symbol , BigInt are also primitive data types

 //Reference types are also called non primitive data types 

// javascript is loosely types language
// javascript is dynamically types language

 const score = 100
 const scorevalue = 100.3

 const isLoggedIn = false
 const outsidetemp = null
 let userEmail;

 const id = Symbol('123')
 const anotherId = Symbol('123')
 console.log(id === anotherId)

 const BigNumber = 231174981249469841946946194861946219486289492246924692464986498624924629462946294629462946829462942649246924629462946n // Bigint

 // array
 const heores = ["A","B","C","D"] 

 // object
 let myobj={
    name:"tushar",
    age:22,
    address:"kolkata"
 }

 //function
const my = function(){
    console.log("hello")
}
my() // calling function

