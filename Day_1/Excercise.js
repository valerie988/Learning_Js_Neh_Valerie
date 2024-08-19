"use strict"
console.log("Hello world")

//variables and datatype (a comment )
let x = 5; //number 
console.log(x);
let age = null;
let Z = undefined;
var name = "Ann" // string
const PI = 3.14 
const car = { carname: "toyota", carcolor: "black"}
let flag = true // boolen

// operators: AND OR NOT

const temp = 50
if(temp < 0){
    console.log("It is cold");
}
else if(temp>0 && temp<=25){
    console.log("It is warm");
}else{
    console.log("It is hot");
}

console.log("3+5");

x = 5;
while(x<10) {
    x++
}
console.log(x)

for (let i = 0; i < 5; i++) {
    console.log("I love coding");
}
for (let i = 0; i < 10; i++) {
   if(i%2==0){
    console.log(i);
   }
}

//Guessing number game
function RanNum(min, max) {
    return parseInt(Math.random()*50);
}

let rand = RanNum(1,50);
console.log("randomNumber =",rand);

let num = parseInt(prompt("enter a Random number"))
console.log(num);

if(rand == num){
    console.log("Wooowwww you won");
}
else{
    console.log("Oooopss you lost"); 
}
