// console.log(`Start!`);
// setTimeout(()=>{
//     console.log("Asnychronus task");
//     for(let i = 0; i < 9; i++){
//         console.log("Middle....✅✅✅");
//     }
// }, 3000)
// setInterval(()=>{
//     console.log("Exclude again and again!!....😎😎");
// }, 3500)
// console.log(`end`);

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// array.indexOf();
/*
let jsonForm = {
  "hotel": {
    "name": "Annapurna Veg Hotel",
    "location": "Bangalore, India",
    "date": "2025-08-04",
    "pure_veg": true,
    "lunch_menu": {
      "timing": "12:00 PM - 3:30 PM",
      "cuisine": ["South Indian", "North Indian"],
      "items": [
        {
          "name": "South Indian Thali",
          "category": "Thali",
          "price": 180
        },
        {
          "name": "Paneer Butter Masala",
          "category": "Main Course",
          "price": 160
        },
        {
          "name": "Veg Pulao",
          "category": "Rice",
          "price": 120
        },
        {
          "name": "Dal Tadka",
          "category": "Main Course",
          "price": 100
        },
        {
          "name": "Tandoori Roti",
          "category": "Bread",
          "price": 25
        },
        {
          "name": "Jeera Rice",
          "category": "Rice",
          "price": 90
        },
        {
          "name": "Mix Veg Curry",
          "category": "Main Course",
          "price": 130
        },
        {
          "name": "Gulab Jamun",
          "category": "Dessert",
          "price": 50
        }
      ],
      "beverages": [
        {
          "name": "Sweet Lassi",
          "price": 60,
          "cold": true
        },
        {
          "name": "Butter Milk",
          "price": 30,
          "cold": true
        },
        {
          "name": "Filter Coffee",
          "price": 40,
          "cold": false
        }
      ]
    }
  }
}
let ObjJSON = JSON.stringify(jsonForm);
console.log(ObjJSON);
let ObjJS = JSON.parse(ObjJSON);
console.log(ObjJS);

ObjJS.hotel.lunch_menu.items.forEach(element => {
    console.log(element.category);
});

let arr = ObjJS.hotel.lunch_menu.items;

let categories = arr
  .map(el => el.category)
  .filter((e, i, a) => {
    console.log(`element: "${e}", index: ${i}, firstIndex: ${a.indexOf(e)}`);
    return a.indexOf(e) === i;
  });

console.log("Unique categories:", categories);
*/

// console.log(window);
// console.log(window.document);
// console.log(window.location);
// // console.log(window.open("https://en.wikipedia.org/wiki/Virat_Kohli#:~:text=Virat%20Kohli%20(Hindi%20pronunciation:[%CA%8B%C9%AA%CB%88%C9%BE%C9%91%CB%90%CA%88"));
// // close();
// //alert("Don't use Offical mail id");
// let age  = prompt("Enter the age?");
// console.log(age);
//console.log(location );

//setTimeout --> will Exclude after the some prioed of time which we pass ex --> 2000

console.log("Start!");
setTimeout((name, age)=>{
    console.log(`Hii ${name} my age is ${age}`);
},2000, `Narendra`, 25)