// // a = 10; 
// var a  = 10; // Declaration + Initailization
// console.log(a);

// var b;      //Declaration --> value will be undefined
// console.log(b);

// b = 30;     //Intiailization
// console.log(b);

// b = 100;            //re-intiailization
// console.log(b);

// var b = 200;            //re-Declaration
// console.log(b);

// console.log(a);

// //! Let

// let a  = 200; // Declaration + Initialization ✅

// let b;  //Declaration ✅

// b = 20; // Initialization ✅
// console.log(b);

// b = 100; //re-intiailization ✅

// //! let b = 200; //re-Declaration not possible ❌
// console.log(a);
// console.log(b);

let c = 121;
let res = 0, temp = c;
while (c>0) {
    res = (res*10)+ c%10;
     c = Math.floor(c / 10);
}
console.log(res==temp);
console.log(c, res, temp);   

//^ Const

let a  = 200; // Declaration + Initialization ✅

// const b;  //Declaration ❌

b = 20; // Initialization ❌
console.log(b);

b = 100; //re-intiailization ❌

// let a = 300; //re-Declaration not possible ❌

let name = "Narendra" 
do {
    if (condition) {
        
    } else {
        
    }
} while (condition);
