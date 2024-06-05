// let a = 10
// const b = 30
var c= 300 // global scope
let a = 8000
// scope is {}
// block scope
if(true)
{
    let a = 10
    const b = 30
    //var c= 30
}
// console.log(a)
//console.log(b)
//console.log(c);



// chota and bada mang skta h ice cream
function one()
{
    const username = "tushar "

    function two()
    {
        const website = "yt"
        console.log(username)
        console.log(website)
    }
    //console.log(website)
    //two()
}
//one()

if(true)
    {
        const username = "tushar"
        if(username==="tushar")
            {
                const website = "yt"
                //console.log(username+website)
                //console.log(website)
            }
            
    }
//console.log(username)



// +++++++++++++++intresting ++++++++++++++++++


function addone(num)
{
    //console.log(num+1)
    return num+1
    // console.log(num)
}
addone(1)

const addtwo =function(num)
{
    return num+2
}
addtwo(5)


