"use strict"

function add(a,b,c) {
    return a+b+c;
}
let result = add(2,5,9)  //function call or invocation
console.log(result)

//function call 
let x = product(7,3)
function product(p,q) {
    return p*q //return value to x
}
console.log(x);

//function that converts temp in fahrenheit to celsuis
function temp(fahrenheit) {
    return (5/9)*(fahrenheit-32)
}
console.log("The temperature is ", temp(67), "celsuis"); //using function as variable value

//function expression
const X = function (a,b) { return a*b } //anonymous function

// self-invoking function

let anonymous = (function () {
    let z = "Hellooooo";
    console.log(z);
})()

console.log(anonymous);


//arrow function
const div = (a,b) => a*b
console.log((10,7));

//sum all numbers
function sumAll() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
let res =sumAll(2,15,54,67)
console.log("The sum of all the numbers is", res );

let me = myFunction()
function myFunction() {
    return this
}
console.log(me);

//function call
const person = {
    firstName: "Neh",
    lastName: "Valerie",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
console.log(person.fullName())
