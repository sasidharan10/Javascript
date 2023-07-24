
/*

normal function

function add(a, b) {
    return a + b;
}

const ans = add(3, 5);
console.log("ans: ",ans);

*/

async function add(a, b) {
    return a + b;
}

add(3, 50).then((result) => {
    console.log("Addition: ", result);
}).catch((err) => {
    console.log(err);
});

/*

By default, async will return a promise.

*/

//***********************AWAIT**************/
