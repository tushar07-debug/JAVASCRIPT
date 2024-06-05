const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function()
    {
        //console.log(`${this.username} , welcome to website`)
        //console.log(this)
    }
}

user.welcomeMessage()
user.username = "same" //context
user.welcomeMessage()

// console.log( typeof this)
// console.log()
//console.log(this) // empty because global scope is empty 

// function chai()
// {
//     console.log(this)
// }
// chai()

// const chai = () =>
//     {
//         let username = "tushar"
//        // console.log(this.username)
//     }
//     //chai()

// const addtwo = (num1, num2) =>{
//     return num1+num2
// }
// console.log(addtwo(3,4))


//explicit key return 
const chai = () =>
    {
        let username = "tushar"
       // console.log(this.username)
    }
    //chai()


    //implicit return if not wrap in {} if wrap in {}  theen we have to use return 

//const addtwo = (num1, num2) => num1+num2
//console.log(addtwo(3,4))




// always wrap object in () without wrapping it will not wrok it will gice undefined 
const addtwo = ( num1, num2 ) => ({username:"hitesh"})
console.log(addtwo(3,4))