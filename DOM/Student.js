// let h2 = document.createElement("h2");
// h2.innerText = "Student";
// document.body.appendChild(h2);

// let ul = document.createElement("ul");
// ul.innerHTML = "<li>Diwan</li> <li>Narendra</li> <li>Santhosh</li>";
// // h2.innerHTML = "<li>Narendra</li>";
// // h2.innerHTML = "<li>Santhosh</li>";
// document.body.appendChild(ul);

// let ul1 = document.createElement("ul");
// ul1.innerHTML = "<li>Diwan</li> <li>Rajesh</li> <li>Santhosh</li>";

//  document.body.replaceChild(ul1,ul);

//  document.body.removeChild();

let name = ["Narendra","Santhosh","Bablu"]

let ul = document.querySelector("ul");

for(let i=0; i<name.length; i++){
    let li = document.createElement("li");
    li.innerText = name[i];
    ul.appendChild(li);
}

let res = document.querySelectorAll("li");
console.log(res);

res[1].innerText = "Naren";
ul.removeChild(res[res.length-1]);
