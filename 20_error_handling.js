try {
    setTimeout(() => {
        try {
            console.log(rahul)
        } catch (error) {
            console.log(error.name);
            console.log(error.message);
        }
    }, 100)
}
catch (err) {
    console.log("Balle balle");
}
/*

- try wont catch a error, if is inside setTimeout(). hence, we need to add
  another try block, inside the setTimeout() to catch the error.


 */


