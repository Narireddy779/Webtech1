let body = document.body;
let form = document.createElement("form");
let submit = document.createElement("button");

let fields = ["Username", "Email", "Password", "Contact", "Address"];

for (let i = 0; i < fields.length; i++) {
    let label = document.createElement("label");
    let input = document.createElement("input");

    let id = fields[i].toLowerCase();
    input.setAttribute("id", id);

    label.innerText = fields[i];
    form.appendChild(label);
    form.appendChild(input);
}

body.appendChild(form);
form.appendChild(submit);
submit.innerText = "Submit";

form.addEventListener("submit", e => {
    e.preventDefault();

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let contact = document.getElementById("contact").value;
    let address = document.getElementById("address").value;

    let obj = {
        username,
        email,
        password,
        contact,
        address
    };

    console.log(obj);
});
