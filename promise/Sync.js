// let input = prompt("Enter the age")
// let p = new Promise((reslove, rejected)=>{
//     if(input >= 18){
//     setTimeout(()=>{
//         reslove("I am resloved")
//     },2000)
//     }else{
//         setTimeout(()=>{
//         rejected("I am rejected")
//         },2000)
//     }
// })

// async function handlingData(){
//     try {
//        let data = await p;
//        console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// handlingData()

async function handleData(){
         try {
           let data =  await fetch("https://api.github.com/users");
           //console.log(data);
           let res = await data.json();
           res.forEach((e,i) => {
                console.log(e);
                let img = document.createElement("img")
                img.setAttribute("src",e.avatar_url)
                document.body.appendChild(img)
           });
         } catch (error) {
           console.log(error);
         }
}

handleData()