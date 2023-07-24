// Normal function

let p1 = new Promise(function get(resolve, reject) {
    return resolve("promise resolved");
});

// Arrow function

let p2 = new Promise((resolve, reject) => resolve("promise resolved"));

p1.then((result) => {
    console.log("Result: "+result);
}).catch((err) => {
    console.log("Error occured");
});

/*

For arrow functions, if only 1 line statement is present in the body, then we can skip
the block{} syntax. Also, we dont need to mention, return keyword, that, line will
automatically be returned.

*/