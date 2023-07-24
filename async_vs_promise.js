function getPromise(val) {
    return new Promise((resolve, reject) => {
        if (val) {
            resolve("Resolved");
        } else {
            reject("Error!!!!");
        }
    });
}

const val = 0;

getPromise(val).then((result) => {
    console.log("Promise Result: ", result);
}).catch((err) => {
    console.log("Promise Error occured");
});

async function utility(val) {
    try {
        const result = await getPromise(val);
        console.log("Async Result: ", result);
    } catch (error) {
        console.log("Async Error occured");
    }

}

utility(val);

/*

Both async and .then(), works the same, but we can use async to write more clean code,
but, we need to add try-catch{} block to handle errors. For .then(), the error is handled
by the catch().

*/