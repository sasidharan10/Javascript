var age = 10;

let person = {
    age: 20,
    displayAge: displayAge
}

console.log(this);
console.log("this.age: " + this.age);

function displayAge() {
    console.log(this.age);
}

/*
In a Regular Function:

When this is used inside a regular function (not an arrow function), 
its value depends on how the function is called.
- given below, the value of "this", depends on the object, that is used to call.
*/

window.displayAge();
person.displayAge();

var student = {
    mark: 50,
    greet1: function () {
        mark = 10
        console.log("Greet 1", this.mark);
        const greet2=() => {
            console.log("Greet 2", this.mark);
        }
        greet2();
    }
}

student.greet1();

/*

In an Arrow Function:

Arrow functions do not have their own this value; instead, they inherit
 the this value from their surrounding lexical context (the closest non-arrow function).
- here, greet 2 should be printing 10, but it prints 50, as it does not have a this keyword, 
hence, it looks to its parent, to get the "mark" value.
- using normal function, will print 10.
*/

function Person(name) {
    this.name = name;
  }
  
  const person1 = new Person("Alice");
  console.log(person1.name);

/*

In Constructor Functions:

When using a constructor function with the new keyword to
 create objects, this refers to the newly created object.

*/