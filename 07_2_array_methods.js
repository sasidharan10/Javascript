let a1 = [1, 2];
let b1 = [3, 4];
let c1 = [5, 6];

let d1 = c1.concat(b1, a1);

console.log(`Array after concat: ${d1}`);
d1.sort();
console.log(`Array after sorting: ${d1}`);

// to sort by descending, we can use compare function

function compare(a, b) {
    return b - a;
}

d1.sort(compare);
console.log(`Array sorting (descending): ${d1}`);
d1.reverse();
console.log(`Array reverse: ${d1}`);

// splice(starting index, no of elements to be deleted, elements to be added)

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.splice(3, 2, 10, 20, 30);
console.log(`Array after splice: ${arr}`);

// slice() doesnt modify the array, but we can store that reulst in a new array
// slice(index till which elements to be deleted, it deleted from the start.)
// slice(starting index, ending index)  
// keeps only the elements in the given range, also wont include last index

let arr1 = arr.slice(2);
console.log(`Array after slice: ${arr1}`);
let arr2 = arr.slice(0, 6);
console.log(`Array after slice: ${arr2}`);