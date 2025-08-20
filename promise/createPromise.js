// let userinput = prompt("Enter the Password: ")
// let p = new Promise((reslove, reject)=>{
//     if (userinput === `123`){
//         reslove("Password matches!✅")
//     }else{
//         reject("Password doesnot matches!❌")
//     }
// })

// p.then((Data)=>{
//     console.log(Data);
//     console.log("Resloved State");
// }).catch((Error)=>{
//     console.log(Error);
//     console.log("Rejected State");
// }).finally(()=>{
//     console.log("Finally State");
// })

let API = fetch("https://api.github.com/users");

API.then((data)=>{
    data.json().then((data)=>{
        console.log(data);
    }).catch((error)=>{
       console.log(error);
    })
}).catch((error)=>{
    console.log(error);
})