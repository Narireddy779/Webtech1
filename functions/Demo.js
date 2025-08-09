
//console.log(a);
console.log(b);
//let a = 10;
var b = 20;

function sort(a){
let charArray = a.split(",").map(Number);
for(let i = 1; i < charArray.length; i++){
    let curr = charArray[i]
    let prev = i-1;
    while(prev >= 0 && charArray[prev] > curr){
        charArray[prev+1] = charArray[prev]
        prev--
    }
    charArray[prev+1] = curr
}
return charArray;
}
let res = sort(`2,1,5,7,12,10`)
console.log(res)