let child = document.getElementById("child")
let grandparent = document.getElementById("Grandfather")
let father = document.getElementById("father")

child.addEventListener("click", ()=>{
    console.log("child clicked");
},true)
father.addEventListener("click", ()=>{
    console.log("father clicked");
},false)
grandparent.addEventListener("click", ()=>{
    console.log("grandparent clicked");
},true)
document.body.addEventListener("click",() =>{
    console.log("Body is clicked");
},false)
window.document.addEventListener("click",()=>{
    console.log("window is clicked");
},true)