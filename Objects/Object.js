// let Obj = {
//     //States (or) Properties
//     name: "Narendra Reddy",
//     age: 25.9,
//     gender: "Male",
//     PhoneNumbers: [9440437779, 9393931122, "Called"],
//     job: NaN,
//     marrried: false,
//     children: undefined,
//     wife: null,
//     address: {
//         streetNo: "A/1-2",
//         city: "Raychoty",
//         State: "AP",
//         country: "India",
//         Id: "BMIPV3050J"
//     },
//     //Methods
//     playGame() {
//         console.log(`${this.name} Playing pubG`);
//     },
//     //Methods
//     obj(name, age) {
//         this.name = name;
//         this.age = age;
//     },
//     //Methods
//     PanCard() {
//         console.log(`panCard Address is ${this.address.Id} thankyou!`);
//         console.log("Hiii");
//     }
// };

// Obj.playGame();
// Obj.obj();
// Obj.PanCard();
// Obj.PanCard;
// console.log(Obj.address.streetNo);
// //Update
// Obj.address.streetNo = "Rayachoti, AP"
// console.log(Obj.address.streetNo.Id);
// //Delete
// delete Obj.address.Id;
// console.log(Obj.address.Id);
// console.log(Obj.address);
// try {
//     console.log(obj);
// } catch (error) {
//     console.log("Error");
// } finally {
//     console.log(`${`Byee`}`);
// }

// let values = Object.values(Obj);
// let keys = Object.keys(Obj);
// let Valueandkey = Object.entries(Obj);
// console.log(`Values ${values} and keys ${keys} and entries ${Valueandkey}`);
// console.log(Valueandkey);
// let res1 = {
//     name1: `Narendra Reddy`,
//     age: `25`
// }
// let res2 = {
//     name: `Santhosh reddy`,
//     age: `24`
// }

// let result = Object.assign({}, res1, res2);
// console.log(result);

// // Object.seal(res1)
// // console.log(Object.isSealed(res1));
// // //Addition
// // res1.age = 26 ;

// // //Deleting of Value
// // delete res2.age;
// res1.age = 23;
// Object.freeze(res1);
// console.log(Object.isFrozen(res1));
// res1.age = 27;
// console.log(res1);

// console.log(res1.hasOwnProperty("name1"));

// //Convert JS to JSON
// let jsonObj = JSON.stringify(Obj)
// console.log(jsonObj);

// // JSON to JS
// let jsObj = JSON.parse(jsonObj)
// console.log(jsObj);

// let res = jsonObj.stringify(Object.json)
// console.log(res);


const jsonData = `[
  {
    "name": "Virat Kohli",
    "role": "Batsman",
    "age": 36,
    "matches": 292,
    "runs": 13848,
    "wickets": 4
  },
  {
    "name": "Rohit Sharma",
    "role": "Batsman",
    "age": 38,
    "matches": 262,
    "runs": 10709,
    "wickets": 8
  },
  {
    "name": "Jasprit Bumrah",
    "role": "Bowler",
    "age": 31,
    "matches": 133,
    "runs": 215,
    "wickets": 348
  },
  {
    "name": "Ravindra Jadeja",
    "role": "All-Rounder",
    "age": 36,
    "matches": 296,
    "runs": 3096,
    "wickets": 493
  },
  {
    "name": "Shubman Gill",
    "role": "Batsman",
    "age": 26,
    "matches": 74,
    "runs": 3702,
    "wickets": 0
  }
]`;

let jsObj1 = JSON.parse(jsonData);
//console.log(jsObj1);

jsObj1.forEach(element => {
    let res = element.role;
});

jsObj1.fliter((e,i,arr) =>{
        console.log(e.role);
})
