let tagNames = ['label','input','for', 'id', 'placeholder'];
let body = document.body;
let form = document.createElement("form");
    body.appendChild(form);
for(let i=0;i<tagNames.length;i++){
    let label = document.createElement("label");
    let input = document.createElement("input");
    let br = document.createElement("br");
    let br1 = document.createElement("br");
    

    label.innerText = "name";
    let id = `name${i+1}`;
    label.setAttribute("for", id);
    input.setAttribute("id", id);
    input.setAttribute(`placeholder`, `Enter your name? ${i+1}`);
    input.setAttribute("name","name");
    input.setAttribute("required", "");
   
    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(br);
    form.appendChild(br1);

}
let submit = document.createElement("button");
form.appendChild(submit);
submit.innerText = "Submit";
