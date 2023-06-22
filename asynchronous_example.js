console.log("Start");
setTimeout(() => {
    console.log("Timeout function");
}, 2000);
console.log("End");

// the timeout function, waits in the background, while the compiler, executes
// the remaining code.