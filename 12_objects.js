function Housekeeper(name, age, gender, city) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.city = city;
    this.Show = function () {
        console.log("Hello World");
    }
}

var obj1 = new Housekeeper("ram", 19, "M", "Mumbai");
var obj2 = new Housekeeper("Shyam", 21, "M", "Chennai");
var obj3 = new Housekeeper("raju", 20, "M", "Kolkata");

console.log("Name: " + obj1.name + "\nAge: " + obj1.age + "\nGender: " + obj1.gender + "\nCity: " + obj1.city);
obj1.Show();
/*

- They are similar to calss in  c++, java

*/

