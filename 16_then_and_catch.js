let p1 = new Promise((resolve, reject) => {
    resolve("Resolved");
});

let p2 = new Promise((resolve, reject) => {
    reject("Rejected!!!");
});

p1.then((event) => {
    console.log("Status of p1: ", event);
})

p2.then((event) => {
    console.log("Status of p2: ", event);
}).catch((err) => {
    console.log("Status of p2: ", err);
});

/*

- catch() is used to catch the error, and perform some operation,
  without stopping the flow of code.

- for multiple then(), we can have multiple catch(), just below the then().

- catch() will catch the error, only to those then(), which are above from it.
*/