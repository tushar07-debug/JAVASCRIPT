//best feature 
document.getElementById('owl').addEventListener('click',function(){
    alert("owl is owl")
},false)
// by default it is false but w ehave to write or use false in every case beacuse in some task if we dont write false the task will not complete 

// 2 features
document.getElementById('owl').onclick=function(){
    alert("owl")
}

//3 features not used but call in html 
//directly call 
onclick="alert('owl)"


document.getElementById('owl').addEventListener('click',function(e){
    console.log(e);
},false)

//type,timestamp,defaultpassword
//target,toElement, srcElement,currenttarget
//vlientX,clientY,screenX,screenY
//altkey,ctrlkey,shigykey,keycode



//event propagation had two context eventbubling, eventcapturing and default it is eventbubling
document.getElementById('images').addEventListener('click',function(e){
    console.log("clcicked inside the url");
},false)

//event buibling ma bubbling m kya hota h ki neeche se upr jata h  mtlb phele inner html pr clcik kiya jo ki images tha uske baad li phir uske bad ui jo bhi elemenet drag kr rhi hh inside se outside usse khete h event bubling
document.getElementById('owl').addEventListener('click',function(e){
    console.log("owl clcicked");
},false)


// in event capturing we put true rather than default false so we get first ul it menas it goes top to bottom phele ul capture hoga phri clcick hoga

e.stopPropagation()
//if we dont want bubling than we can use this means inner element and outer element always get seprated
//event buuble hoke upr ke elemt pr nhi jaega it will just only clciked 

document.getElementById('google').addEventListener('click',function(e){
    e.preventDefault()
    e.stopPropagation()
    console.log("google clcick");
},false)



//remove pic on click on pic 
document.querySelector('#images').addEventListener('click',function(e){

    console.log(e.target.parentNode)
    console.log(e.target.tagName)
    if(e.target.tagName==='IMG')
        {
            console.log(e.target.id)
            let removeit = e.target.parentNode
            removeit.remove()
        }
    // easy to remove
    // removeit.parentNode.removeChild(removeit) // tricky to understand
},false)