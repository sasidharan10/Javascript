let arr = [45, 23, 21]
// Array map method
let a1 = arr.map((value, index, array) => {
    // console.log(value, index, array)
    return value + 1;
});
console.log("Array after modification: ", a1)

// Array filter method
let arr2 = [45, 23, 21, 0, 3, 5]
let a2 = arr2.filter((a) => {
    return a < 10;
});

console.log("Array after filtering: ", a2)

// Array reduce method
let arr3 = [1, 2, 3, 5, 2, 1]
const reduce_func = (h1, h2) => {
    return h1 + h2;
};
let a3 = arr3.reduce(reduce_func)
console.log("Array after reduction: ", a3)

/*

- map: applies a condition to all elements and store it into a new array.

- filter: creates a new array of only those elements which satisfy the condition.

- reduce: it will reduce the array into a single element, by repeatedly apllying the condition, 
  to its adjacent elements.

*/