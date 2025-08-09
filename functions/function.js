function reverseString(n){
    let max = ' ', count = 0
    let charArray = n.split('')
    for (let i = 0; i<charArray.length; i++){
        if(charArray[i] == max)
            continue
        for(let j = i+1 ; j<charArray.length; j++){
            if (charArray[i] == charArray[j]) {
                charArray[j] = ' '
                count++
            }
        }
        let newArray = new Array(charArray.length-count)
        for(let i = 0, j = 0; i<charArray.length; i++){
            if(charArray[i] != max){
                newArray[j++] = charArray[i]
            }
        }
        return newArray;
    }
}
let res = reverseString(' Narendra Reddy ')
console.log(res);
