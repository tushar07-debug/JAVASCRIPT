// // //arrays

// // const myArr = [0,1,2,3,4,5, true, "tushar"]
// // const myHeores = ["skati","mukti","ksuti"]
// // const myArr2 = new Uint8ClampedArray(1,2,3,4)

// // console.log(myArr[3])

// // //Arrays  methods

// // myArr.push(6)
// // console.log(myArr)
// // myArr.pop()
// // console.log(myArr)
// // console.log(myArr.includes(9))

// // //slice , splice

// // console.log("A ", myArr)
// // const myn1 = myArr.slice(1,3)
// // console.log(myn1)
// // console.log("B ",myArr)

// // const myn2 = myArr.splice(1,3)
// // console.log(myn2)   

// const myHeores = ["skati","mukti","ksuti"]
// const mydc = ["sti","muki","suti"]

//  myHeores.push(mydc)
// // console.log(myHeores)

// // console.log(myHeores)
// // console.log(mydc[2][1])

// const all=myHeores.concat(mydc)
// console.log(all)


console.log(Array.isArray("tushar"))
console.log(Array.from("tushar"))
console.log(Array.from({name:"tushar"})) //intresting gives empty arraay
let score1 =100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
