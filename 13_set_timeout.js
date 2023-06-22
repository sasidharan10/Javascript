let t = 0;

function sum(a, b, c) {
    console.log("Sum: ", (a + b), "function: ", c, "t: ", t);
    t++;
    if (t === 5)
        clearInterval(si);
}

// using function inside settimeout

// setTimeout(() => {
//     sum(2,3);
// }, 2000);

// using callback
let st = setTimeout(sum, 1000, 2, 6, 'a');  // return timer id

clearTimeout(st);  // clears the setTimeout();

let si = setInterval(sum, 1000, 1, 2, 'b');


// setInterval runs the function, infinitly, with the given interval.