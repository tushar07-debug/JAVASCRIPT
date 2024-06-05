const accId =  51
let accEmail = "tusharsingh@gmail.com"
var accPass = "12345"
accCity = "jaipur"
let accState;

// we dont use var : it does not know about block and functional scope i.e"{}" and it resolve by using let and forget about var not use var 

// never use var in program

//accId = 2
accEmail = "tks.com"
accPass = "45"
accCity = "delhi"

console.log(accId);
console.log(accEmail);
console.log(accPass);
console.log(accCity);

console.table([accId,accEmail,accPass,accCity, accState])