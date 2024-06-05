// dates

let myDates = new Date()
// console.log(myDates)
// console.log(myDates.toDateString())
// console.log(myDates.toTimeString())
// console.log(myDates.toISOString()) // ISO 8601 format
// console.log(typeof myDates)

let mycreate = new Date(2023,0,23)
console.log(mycreate.toDateString());
console.log(mycreate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(mycreate.getTime())
// console.log(Date.now()/1000)
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getHours())
console.log(newDate.getMinutes())
console.log(newDate.getSeconds())
console.log(newDate.getMilliseconds())
console.log(newDate.getDay())
console.log(newDate.getMonth())
console.log(newDate.getFullYear())
 

//string interpolation 
//`${newDate.getMonth()} and the time`

newDate.toLocaleDateString('default',{
    weekday:'long',
    month:'long',
    day:'numeric',
    year:'numeric'
})
