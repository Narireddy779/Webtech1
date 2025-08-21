// let arr = [10,`Narendra`,20,'&',30,'$',40]
// //!Destructing of array
// let [a,b,c,,k,,g]=arr
// console.log(a,b,c,k,g)

// let arr1 = [10,`Naren`,[20,'*'],30,['#',50,['o',60]]]
// let [a,b,[c,d],e,[f,g,[h,i]]] = arr1
// console.log(a,b,c,d,e,f,g,h,i);

//^Object Destructuring

// let obj = {
//     name:`Narendra`,
//     age:26,
//     phoneNumber:9440437779,
//     brand:'WhiteHouse',
// }
// let {name, brand, age, phoneNumber} = obj;
// console.log(name,age,phoneNumber,brand);

// let obj1 = {
//     name : `Santhosh`,
//     age: 24,
//     address:{
//         house: `Vranasi, 123-A.E`,
//         country: 'india',
//         state: `RCT`,
//     },
// }

// let {name, age, address:{state}} = obj1
// console.log(name, age, state);

//?Spread Operator

// let a = [10,20,'Hello']
// let b = ['Narendra',30,50,'byee']
// let c = [...a, ...b]
// console.log(c);

// let d = {
//     name: 'Vineeth',
//     age: 35,
//     height: '6ft',
// }
// let e = {
//     SubjectKnown: 'Java, SQL, WEBTECH',
// }
// let f = {...d,...e}
// console.log(f);

//&Rest Operator

function display(name, age, ...data){
    console.log(name, age, data);
}
display("Narendra",25, 'Hello','Byee..','there!....');