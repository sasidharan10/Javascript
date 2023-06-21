function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b
}

function calc(a, b, operator) {
    return operator(a, b);
}

let a = 5;
let b = 3;
console.log("Add: ", calc(a, b, add));
console.log("Multiply: ", calc(a, b, multiply));




/*

- Callback functions: A callback is a function passed as an argument to another function.
- Here we use "add" function as a callback function
- Note: dont use "()"" for callback function, because then, it will see it as a fubction call,
  then it will get executed then and there itself.
- The "calc" function is called as high order function, which takes another function as its parameter.

*/