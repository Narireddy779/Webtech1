let handledClick = () =>{
    console.log("Button Clicked");
    console.log(prompt("Input handled"));
}
let doubleClickHandled = () =>{
    console.log("double click handled");
}

let button = document.querySelector("button")

let MouseEntered = () =>{
    console.log("Mouse Hoverd on the content.");
    button.style.backgroundColor = "orange";

}

let MouseLeave = () => {
    console.log("Moved my mouse from the content.");
    button.style.backgroundColor = "white";
}