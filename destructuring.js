let arr = [3, 5, 8, 9, 12, 14]
// No need to do this:
// let a = arr[0]
// let b = arr[1]

// let [a, b, c, d, ...rest] = arr
// console.log(a, b, c, d, rest)

// to skip b
// let [a, , c, ...rest] = arr
// console.log(a, c, rest)
let { a, b } = { a: 1, b: 5 }
// console.log(a, b)
// console.log(typeof(a));


// Spread Operator

let arr1 = [3, 5, 8]
let obj1 = { ...arr1 }
console.log(obj1)

function sum(v1, v2, v3) {
  return v1 + v2 + v3
}

console.log(sum(...arr1))

let obj2 = {
  name: "Harry",
  company: "Company xyz",
  address: "XYZ"
}

// console.log({ ...obj2, name: "John", company: "ABC" })  // values will get overwritten
console.log({ name: "John", company: "ABC", ...obj2 }) // values won't get overwritten


// links:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax