let input = document.querySelector("input")

// input.addEventListener("mouseenter",()=>{
//     console.log("Mouse Entered!..");
// })

// input.addEventListener("mouseleave",()=>{
//     console.log("Mouse Leaved ..");
// })
// input.addEventListener("mouseleave",()=>{
//     console.log("Mouse Leaved Successfully!!!@ ..");
// })
// input.addEventListener("mousemove",()=>{
//     console.log("Mouse Moved");
// })
// // let p = ["name","address"]
// // input.addEventListener("mouseenter",()=>{
// //     for (let index = 0; index < p.length; index++) {
// //         prompt(`Enter your ${p[index]}`);
        
// //     }
// // })
// document.addEventListener("mousemove",()=>{
//     console.log("Window Mouse Moved");
// })
// input.addEventListener("mouseup",()=>{
//     console.log("mouse up");
// })

// let fn1 = () =>{
//     console.log("Cursor placed on input field by me");
// }
// input.addEventListener("mouseenter", fn1);

let array = ["Cursor moved by me on WebPage Document !!!!👌👌👌👌👌","Cursor moved up by me"]
    let fun = ["mousemove","mouseup"];

for(let i = 0;i<array.length;i++){
        input.addEventListener(fun[i], ()=>{
            console.log(array[i]);
        })
}