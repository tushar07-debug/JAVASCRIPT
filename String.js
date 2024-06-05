 const name = "yup"
 const age = 30
 console.log(name + age)
 // outdated 

 //efficient ans modern way
 // also string manipulation  
 console.log(`hello my name is ${name} and my repo count is ${age}`)

 const gameName = new String('hitesh')

 console.log(gameName.__proto__)
 console.log(gameName.length)
 console.log(gameName.toUpperCase())
 console.log(gameName.charAt(2))
 console.log(gameName.indexOf('t'))

 const newString = gameName.substring(-8,3) // default at 0 do not follow -8
console.log(newString)

const anotherString = gameName.slice(-9,4) // follow -9 allow
console.log(anotherString)

const newStirngOne = "    hitesh     "
console.log(newStirngOne)
console.log(newStirngOne.trim())


const url = "https;//hitesh.com/hitesh%20choudhary"
console.log(url)
console.log(url.replace('%20','-'))
console.log(url.includes('hitesh'))