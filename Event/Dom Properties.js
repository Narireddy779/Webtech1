let input =  document.querySelector("input")

input.onclick = () =>{
    console.log("Mouse clicked");
    console.log(prompt("Enter the your name"));
}

input.ondblclick = () =>{
    console.log("Mouse Double clicked");
    console.log(alert("Error❌"));
}

input.onmouseenter = () =>{
    console.log("Mouse Entered");
}

document.onmousemove = () =>{
    console.log("Mouse Moving");
}

document.onmouseup = () =>{
    console.log("Mouse Up");
}
document.onmousedown = () =>{
    console.log("Mouse down");
}