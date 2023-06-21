// For loop : 
let arr = new Array(1, 2, null, 'sasi');
let i = 0;
console.log("For loop: ");
for (i = 0; i < 4; i++)
    console.log(arr[i]);

console.log("Iterating array(string): ");
let name = ["sasi", "ramesh", "raj"]
for (let index = 0; index < name.length; index++) {
    let element = name[index];
    console.log(element);
}

console.log("for Of loop: ");
// For Of loop : 
for (element of arr)
    console.log(element);

// For Each loop : 
/*

syntax:

arr.forEach((element)=>{})
arr.forEach((element, key)=>{})
arr.forEach((element, key, array)=>{})

*/

console.log("for-each loop: ");
name.forEach(function f(element) {
    console.log("Name is : " + element);
});

console.log("for-each loop(object): ");
name.forEach(element => {
    console.log("Name is : " + element);
});

let a = [1, 2, 3, 4, 5];

a.forEach((element, key, c) => {
    console.log(`Key: ${key}, Element: ${element}, Array: ${c}`);
});

// For Objects : 

let employee = {
    name: "sasi",
    roll: 24,
    clg: "srit",
}

// For In loop : specifically for Objects, returns key

console.log("for in loop: ");
for (key in employee) {
    console.log(key, " is : " + employee[key]);
}

// While loop : 

console.log("while loop: ");
i = 0;
while (i < 4) {
    console.log(arr[i]);
    i++;
}

console.log("do-while loop: ");
i = 5;
do {
    console.log(i + " is less than 4");
    i++;
} while (i < 4);