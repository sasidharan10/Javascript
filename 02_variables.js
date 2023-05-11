// Variables :

var a = 10;  //integer
var b = 'x';  //string
var c = "Sasi";  //string
var d = 3.3;
console.log(a, " : ", typeof (a));
console.log(b, " : ", typeof (b));
console.log(c, " : ", typeof (c));
console.log(d, " : ", typeof (d));

/*

var:
- "var" is the oldest method to declare a variable
- scope: Global scoped or function scoped. It means variables defined outside the function
  can be accessed globally, and variables defined inside a particular function
  can be accessed within the function.
- we can re-declare "var" variables.
- Using variables, before declaration, wiil result in undefined value.


let:
- The let keyword is an improved version of the var keyword
- block scoped:  It can’t be accessible outside the particular block ({block})
- It cannot be re-declared.
- Using variables, before declaration, wiil throw an error.

const:
- it has all properties of "let" variable, but we cannot change the value, once initialised.

note: 
- Its always better to use "let" and "const" for variable declaration, as "var"
  causes lots of issues.
- Single and double quotes, both operate the same.
*/
