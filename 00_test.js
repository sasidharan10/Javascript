// let arr = [1,2,3,4,5];

// arr.forEach((element, key, a)=>{
//     console.log(`Key: ${key}, Element: ${element}, Array: ${a}`);
// });

// let m = Math;
let a = 44462963;

console.log(a);

let p = 0.1;

function getRecovered(a, p) {
    let temp = Math.round((a * p) / 100);
    let ans = a - temp;
    return ans;
}

// let result = 

console.log(getRecovered(a, p).toLocaleString());