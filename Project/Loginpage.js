let body = document.body;

//!createElements
let nav = document.createElement("nav");
let divImage = document.createElement("div");
let ul = document.createElement("ul");
let liLogin = document.createElement("li");
let liRegister = document.createElement("li");
let img = document.createElement("img");
let div = document.createElement("div");
let div1 = document.createElement("div");
let form = document.createElement("form");


//~ Navigation Bar --> set border
nav.style.border = "2px solid brown";
nav.style.background = "linear-gradient(90deg, rgba(205, 107, 59, 1) 0%, rgba(168, 152, 29, 1) 50%, rgba(230, 203, 0, 1) 100%)";
nav.style.display = "flex";
nav.style.alignItems = "center";
nav.style.justifyContent = "space-between";

//*main Section
div1.style.width = "400px";
div1.style.minHeight = "500px";
div1.style.border = "2px solid #000";
div.style.display = "flex";
div.style.justifyContent = "center";
div.style.alignItems = "center";
div.style.width = "100vw";
div.style.height = "85vh";
div1.style.borderRadius = "20px";
div1.style.display = "flex";
div1.style.flexDirection = "column";
div1.style.justifyContent = "center";
div1.style.alignItems = "center";
div1.style.padding = "20px";
div1.style.background = "#eae9b0ff";
body.style.backgroundImage = "url(../images/Ram.jpeg)"
body.style.backgroundSize = "cover"

//? Ul tag -->
ul.style.display = "flex";
ul.style.justifyContent = "end";
ul.style.flexDirection = "row";
ul.style.gap = "8px";
ul.style.listStyle = "none";
ul.style.marginRight = "50px";

[liLogin, liRegister].forEach(e => {
    e.style.cursor = "pointer";
    e.style.color = "#573ad9ff";
    e.style.fontWeight = "bold";
});

liLogin.innerText = "Login  |";
liRegister.innerText = "Register";

//~ form styles
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.width = "100%";
form.style.maxWidth = "300px";
form.style.gap = "10px";

let fields = [
    { label: "User ID", id: "username", placeholder: "Enter your ID", name: "userid", required: "" },
    { label: "Password", id: "password", placeholder: "Enter your password", name: "password", required: "" },
    { label: "Email", id: "email", placeholder: "Enter your email", name: "email", required: "" }
];

for (let i = 0; i < fields.length; i++) {
    let label = document.createElement("label");
    label.setAttribute("for", fields[i].id);
    label.innerText = fields[i].label;
    label.style.fontWeight = "bold";

    let input = document.createElement("input");
    input.setAttribute("id", fields[i].id);
    input.setAttribute("placeholder", fields[i].placeholder);
    input.setAttribute("name", fields[i].name);
    input.setAttribute("required",fields[i].required);
    input.style.padding = "8px";
    input.style.border = "1px solid #930707ff";
    input.style.borderRadius = "5px";

    form.appendChild(label);
    form.appendChild(input);
}

let button = document.createElement("button");
button.innerText = "Login";
button.style.borderRadius = "20px";
button.style.padding = "10px";
button.style.border = "none";
button.style.background = "#573ad9";
button.style.color = "white";
button.style.fontWeight = "bold";
button.style.cursor = "pointer";

form.appendChild(button);

//$ appendChild
body.appendChild(nav);
ul.appendChild(liLogin);
ul.appendChild(liRegister);
divImage.appendChild(img);
nav.appendChild(divImage);
nav.appendChild(ul);
body.appendChild(div);
div.appendChild(div1);
div1.appendChild(form);

//* image tag -->
img.setAttribute("src", "../images/Logo+Target.svg");
img.style.width = "200px";
img.style.height = "auto";
divImage.style.alignItems = "center";
divImage.style.height = "80px";
img.style.paddingTop = "10px";
