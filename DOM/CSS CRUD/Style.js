let body = document.body
let div = document.createElement("div")
body.appendChild(div)

//! Create 
//@ setProperty("property","value")
div.style.setProperty("width","300px")
div.style.setProperty("height","500px")
div.style.setProperty("background-color","blue")

//~ propertyName = "value"
div.style.width = "600px";
div.style.height = "700px";
div.style.background = "green";
div.style.borderRadius = "90px"

// //& cssText ="property:value; property:value; property:value";  ...n

// div.style.cssText = "width: 700px; heigth: 800px; background-color: red";

//# read  --> getPropertyValue()

console.log(div.style.getPropertyValue("width"));
console.log(div.style.getPropertyValue("background-color"));

//^ removeProperty()
div.style.removeProperty("width");