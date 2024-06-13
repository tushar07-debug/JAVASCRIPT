function Set(username)
{
    this.username = username
    console.log("called");
}
function create(username,email,pass)
{
    Set.call(this,username)
    this.email=email
    this.pass=pass
}
const chai= new create("chai","chi@gmail.com","123")
console.log(chai);