let body = document.body
let button = document.createElement("button")
body.appendChild(button)
button.innerText = "Submit"
let choice = prompt("Please, enter your choice..")
if(choice  === "button"){
    button.addEventListener("mousedown", () => {
        button.style.backgroundColor = "red"
    });
    button.addEventListener("mouseup", () => {
        setTimeout(() => {
            button.style.backgroundColor = "white"
            body.style.backgroundColor = "red"
        }, 2000);
    });
} else {
    console.log("Invalid Choice!✅✅✅😎")
}