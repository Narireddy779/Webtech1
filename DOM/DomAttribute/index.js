let body = document.body;
let form = document.createElement("form");
let label = document.createElement("label");
body.appendChild(form);
form.appendChild(label);
label.innerText = "name";
let Input = document.createElement("input");
form.appendChild(Input);

//Create Attribute
label.setAttribute("for","name");
Input.setAttribute("id","name");
Input.setAttribute("placeholder","Enter your name");

//Update Attribute

Input.setAttribute("placeholder","Enter name");
Input.setAttribute("id","username");
Input.setAttribute("name","name");


//Read

console.log(Input.getAttribute("id"));
console.log(Input.getAttribute("for"));


//delete

Input.removeAttribute("placeholder");
// Input.removeAttribute("id");

Input.classList.add("home");
Input.classList.add("login");
Input.classList.add("black");


Input.classList.remove("black");
Input.classList.remove("home");

Input.classList.toggle("black");
Input.classList.toggle("home");
Input.classList.toggle("white");
Input.classList.toggle("white");
Input.classList.toggle("white");
Input.classList.toggle("white");
