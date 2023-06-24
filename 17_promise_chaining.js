let p1 = new Promise((resolve, reject) => {
    resolve("promise 1");
});


p1.then((event) => {
    console.log(event);
    return new Promise((resolve, reject) => {
        resolve("promise 2");
    });
}).then((event) => {
    console.log(event);
    return new Promise((resolve, reject) => {
        resolve("promise 3");
    });
}).then((event) => {
    console.log(event);
});
