// let first  = document.getElementById("one");
// console.log(first);
// let SecondElement = document.getElementsByClassName("three_class");
// console.log(SecondElement);
// let twoElement = document.getElementById("two");
// console.log(twoElement);
// let fiveElement = document.getElementById("five");
// console.log(fiveElement);

// let h2 = document.getElementsByTagName("h2");
// console.log(h2);
// for (let i = 0; i<h2.length; i++) {
//     console.log(h2[i]);
// }

// let p = document.querySelector("#one");
// console.log(p);

// let p1 = document.querySelector(".three_class");
// console.log(p1);

// let h3 = document.querySelector("h3");
// console.log(h3);+

// let para = document.querySelector("div > p");
// console.log(para);

// let para1 = document.querySelectorAll("div > p");
// console.log(para1);
// for(let i=0;i<para1.length;i++){
// console.log(para1[i]);
// }

// let r = document.querySelectorAll(".three_class");
// console.log(r);
// let e1  = document.createElement("a")
// console.log(e1);

// let e2 = document.createElement("br")
// console.log(e2);

// let e3 = document.createElement("hr");
// console.log(e3);

// e3.appendChild(e2);
// e2.appendChild(e1);

// let h1 = document.querySelector("h1");
// let h2 = document.querySelector("h3");
// let h3 = document.querySelector("h2");
// console.log(h1.innerText);
// console.log(h1.innerHTML);
// h1.innerHTML = "<q><i>I am Learning Dom</i></q>";
// h1.innerText = "I am Learning Document Object Module";
// console.log(h1);

// h3.innerHTML = "<b> I am Narendra</b>";
// console.log(h3);

// h2.innerHTML = "<mark><sup > 😎😎2</sup> Hi there, people!!>..</mark>"
// console.log(h2.innerText);

let h1 = document.createElement("h1");
console.log(h1);
 h1.innerText = "I am Using Laptop.";

 document.body.appendChild(h1);

 let h2 = document.createElement("h2");
 console.log(h2);
 h2.innerText = "I am Using JS";

 document.body.appendChild(h2);

 document.body.replaceChild(h2,h1);

 document.body.removeChild(h2);

