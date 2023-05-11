// Types of data types
let int = 24;
let string = `sasi`;
let float = 24.3;
let Null = null;
let undef = undefined;

// Object : 
let employee = {
    name: "sasi",
    rno: 24,
    channel1: "maths",
    "channel 2": "science",
}
// object is similar to "map" in c++ and "dict" in python

console.log("Employee: " + employee);
console.log("Employee['name']: " + employee['name']);

let names = new Array(3, 2, 1, null, undefined);  //Array
names = names.sort();  // sorting
console.log("names: " + names);
console.log("names[2]: " + names[2]);
let roll = new Array(10);
roll.push("roll");
roll = roll.sort();
console.log("roll: " + roll);