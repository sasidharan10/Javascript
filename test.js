// let m = Math;
// function bmiCalculator(weight, height) {
//     let interpretation="";
//     bmi = weight / (height * height);
//     if (bmi < 18.5)
//         interpretation = "Your BMI is " + bmi + ", so you are underweight."
//     else if (bmi >= 18.5 && bmi <= 24.9)
//         interpretation = "Your BMI is " + bmi + ", so you have a normal weight."
//     else
//         interpretation = "Your BMI is " + bmi + ", so you are overweight."
//     return interpretation;

// }

// var bmi = bmiCalculator(95, 1.8);
// console.log(bmi);


function fibonacciGenerator(n) {
    //Do NOT change any of the code above 👆

    //Write your code here:
    let a = 0;
    let b = 1;
    let arr = new Array();
    arr.push(a);
    if (n = 0)
        return a;
    let c = 0;
    for (let i = 0; i < n; i++) {
        c = a + b;
        a = b;
        b = c;
        arr.push(a);
    }
    for (let i = 0; i < 5; i++) {
        console.log(arr[i]);
    }
}
let n = 8;
// let res=new Array(50);
fibonacciGenerator(8);
// for (let iterator of res) {
//     console.log(iterator);
// }