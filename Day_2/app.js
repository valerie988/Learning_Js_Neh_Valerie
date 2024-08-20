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
console.log("The temperature is ", temp(67), "celssuis");
