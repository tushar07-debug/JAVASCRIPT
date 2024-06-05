// //const tinder =  new Object() // single ton object

// const tinderUser={} // non single ton object 
//  tinderUser.id = "123"
//  tinderUser.name = "John"
//  tinderUser.age = 25

// //console.log(tinderUser);

// const regularUser = {
//     id: "123",
//     fullname:{
//         userfullname:{
//             firstname:"John",
//             lastname:"Doe"
//         }
//     }
// }
// //console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1:"a", 2:"b"}
// const obj2 = {3:"a", 4:"b"}

// //const obj3 = {obj1,obj2}
// //console.log(obj3);
// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3) 

const course= {
    coursename:"js",
    author:"John",
    price: 10,
    courseInstructor: "tushar"
}
//course.courseInstructor
const {courseInstructor: juo} = course
console.log(juo);




