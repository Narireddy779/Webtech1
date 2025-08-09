
let arr = [34,12,56,121,90,4, 1, 3, 5];
let result = arr.filter((element, index, Array)=>{
    return element % 2 !=0;
});
console.log(result);

let n = [127];
let res = n.reduce((acc, e, i, a)=>{
    while (e>0) {
        console.log(e);
        acc = 10*(e%10);
        e = e/10;
        return acc;
    }
})
console.log(res);