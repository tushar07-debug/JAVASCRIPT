//maths pi js


// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)


const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor)

const chai = {
    name:'ginger chai',
    price: 250,
    isAvailable : true
}
console.log(chai)

// console.log(Object.getOwnPropertyDescriptor(chai,"name"))
// Object.defineProperty(chai,'name',{
//     writable:false,
//     enumerable:false,
//     configurable:false
// })

// console.log(Object.getOwnPropertyDescriptor(chai,"name"))

for(let [ key,value] of Object.entries(chai))
    {
        console.log(`${key}: ${value}`)
    }