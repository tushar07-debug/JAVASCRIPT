// fetch('https://something.com').then().catch().finally()

const promiseOne = new Promise(function(resolve,reject){
    // do an async task
    //db calls,cryptography,network
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
    }, 1000)
})
// resolce is the very musch connection with .then
promiseOne.then(function(){
    console.log("Promise Consumed")
})




// we can also use promise with this syntax
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("resolved")
})



//another promise resolve paramater
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai", email:"chai@ex.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user)
})


//another promise
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"hit",password:"12345"})
        }
        else{
            reject('error')
        }
    },1000 )
})
promiseFour.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)

}).catch(function(error){
    console.log(error)
}).finally(()=>console.log("default"))


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"js",password:"12345"})
        }
        else{
            reject('js error')
        }
    },1000 )    
})
async function consume(){
    try{
        const response = await promiseFive
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
//     const response = await promiseFive
//     console.log(response);
}
consume()





//fetch
async function alluser(){
    try{
        const resposne = await fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(resposne);
    const data = await resposne.json()
    console.log(data)
    }
    catch(error){
        console.log("E:",error);
    }
}
alluser()