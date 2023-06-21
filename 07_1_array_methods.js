// Array Methods
let num = [1, 2, 3, 37, 4];
console.log(`Array: ${num} \ntype: ${typeof num}`);
let b = num.toString();// b is now a string 
console.log(`Array: ${b} \ntype: ${typeof b}`);
let c = num.join(" _ ");// joins the element with every element
console.log(`Array: ${c} \ntype: ${typeof c}`);
let d = num.pop() // pop returns the popped element
console.log("num.pop()");
console.log(`Array: ${num}`);
console.log(`d: ${d}`);
let p = num.push(56) // push returns the new array length
console.log("num.push(56)");
console.log(`Array: ${num}`);
console.log(`p: ${p}`);
let fd = num.shift() // Removes an element from the start of the array
console.log("num.shift()");
console.log(`Array: ${num}`);
console.log(`fd: ${fd}`); // returns the shifted element

let fp = num.unshift(78); // adds an element at the start of the array
console.log("num.unshift(78)");
console.log(`Array: ${num}`);
console.log(`fp: ${fp}`);  // unshift returns the new array length
