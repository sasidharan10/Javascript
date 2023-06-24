let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 1");
    }, 11000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Value 2");
        reject(new Error("Error"));
    }, 2000);
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 3");
    }, 3000);
});

// p1.then((value) => {
//         console.log(value)
// })

// p2.then((value) => {
//         console.log(value)
// })

// p3.then((value) => {
//         console.log(value)
// })

// let promise_all = Promise.all([p1, p2, p3])
// let promise_all = Promise.allSettled([p1, p2, p3])
// let promise_all = Promise.race([p1, p2, p3])
// let promise_all = Promise.resolve(6)
let promise_all = Promise.reject(new Error("Hey"))
promise_all.then((value) => {
    console.log(value)
})


/*

There are 6 static methods of promise class:

- Promise.all(promises): Waits for all promises to resolve and returns the array
  of their results. If anyone fails, it becomes the error & all
  other results are ignored.
- Promise.allSettled(promises): Waits for all the promises to settle and returns
  their results as an array of objects with status and value.
- Promise.race(promises): waits for the first promise to settle and its result/error
  becomes the outcome.
- Promise.any(promises): Waits for the first promise to fulfill (& not rejected) and
  its result becomes the outcome. Throws aggregate error if all the promises are rejected.
- Promise.resolve(value): Makes a resolved promise with the given value
- Promise.reject(error): Makes a rejected promise with the given error.

*/