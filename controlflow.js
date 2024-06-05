// //if
// if(true){
//     //code to execute if condition is true
// }
// if(false){
//     //code to execute if condition is false 
// }

// const isuseerLoggedIn = true
// const temp =42

// if(temp <90)
//     {
//         console.log("temp is low")  
//     }
//     else
//     {
//     console.log("temp is greater than 90")
//     }


// const score = 1000
// if (score>100)
//     {
//         const power = "fly"
//         console.log(`user power: ${power}`)
//     }

//********truthy************ */
// const age = 18
 const useremail = []
 if(useremail)
    {
        console.log("got user email")
    }
 else{
    console.log("dont have user email")
 }


 // falsy values 
 // false, 0 , -0 , bigint , on , "", null , undefined , nan

 //truthy values
 //"0", 'false', " " , [] , {} , function(){}

//object truthy check 
 const emptyObj = {}

 if(Object.keys(emptyObj).length === 0 )
    {
        console.log("empty object")
    }