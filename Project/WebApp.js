let body = document.body
let img = document.createElement("img")

let logo = document.getElementById("Logo")
logo.appendChild(img)
img.setAttribute("src", "https://assets-cloud.landmarkshops.in/website_images/in/favicons/max/180x180/appleTouchIcon.png")

async function getData(){
    try {
        let response = await fetch("https://fakestoreapi.com/products")
        let data = await response.json();
        console.log(data);
        displayData(data)
    } catch (error) {
        console.log(error);
    }
}
getData()
let main = document.createElement("main")
body.appendChild(main)
main.setAttribute("id","product")

function displayData(data){
   data.forEach(e => {
    let div = document.createElement("div")
    let img1 = document.createElement("img")
    img1.setAttribute("src",e.image)
    main.appendChild(div)
    div.appendChild(img1)
    let title = document.createElement("p")
    let content = e.title.split(" ").slice(0, 6).join(" ");
    console.log(content);
    title.innerText = content;
    div.appendChild(title);
    
   });
}