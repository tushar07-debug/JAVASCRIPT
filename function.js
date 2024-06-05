// function saymyName(){
//     // console.log("y")
//     // console.group("O")
//     // console.log("U")
// }
// saymyName //reference
// saymyName() //execution

// // function add(num1, num2){ // parameters
// //     console.log("I am a function")
// //     console.log(num1 + num2 )
// // }
// function add(num1, num2){ // parameters
//    // console.log("I am a function")
//     let result = num1 + num2 
//     return result 
//     // return ke baad kuch bhi print nhi hoga 
//     console.log("hitesh");
// }
// //add(7,8) // arguments
// const result = add(4,0)
// //console.log("result:",result);

// function loginuserMessage(username)
// {
//     return `${username} just logged in`
// }
// console.log(loginuserMessage("hippy"))

function calculateCartPrice(...num1) // rest operstor or spread operstor   here it is  rest operstor 
{
    return num1
}
console.log(calculateCartPrice(200,400,700))


const user = 
{
    name: "hippy",
    age: 20,
    address: "delhi",
}
 function handleObject(anyobject)
 {
    console.log(`username is ${anyobject.name} and age is ${anyobject.age} and adress is ${anyobject.address}`)
 }
 handleObject(user)

 handleObject({
    name:"sam",
    age:19
 })

 