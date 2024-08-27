"use strict"

//using promises
function successCallback(result) {
    console.log(`Audio file ready: ${result}`); 
}
function errorCallback(error) {
    console.error(`Error generating audio file: ${error}`);
}
//createAudioFileAsync(audioSettings, successCallback, errorCallback)

//createAudioFileAsync(audioSettings.then(successCallback, errorCallback))

let a = 2
let b = 5

setTimeout(function () {
    console.log(`async`);
}, 10)

console.log("synchronous")
console.log(a);
console.log(b);

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}
function myfirst() {
    myDisplayer("Hello")
    console.log("Hello");
}
function mySecond() {
    myDisplayer("Goodbye")
  console.log("Goodbye");
}
mySecond()
myfirst()

function calculator(num1, num2) {
    let sum = num1  + num2
    myDisplayer(sum)
}
calculator(4,7)

function calculator(num1, num2, myCallback) {
    let sum = num1 * num2
    //myCallback(sum)
}

//calculator(4,6,myDisplayer)

const myNum = [3,78,-211,6,-3,-18]
const posNum = remNeg (myNum, (x) => { 
    x>= 0
})
myDisplayer(posNum)
function remNeg(num,callback) {
    const myArray = []
    for(const x in num){
        if (callback(x)){
            myArray.push(x)
        }
    }
    return myArray;
}
remNeg()

setTimeout(() => {
    myDisplayer("I love CMR")
}, 2000);

setInterval(() => {
    let d = new Date();
    myDisplayer(d.getFullYear() + ":" + d.getMonth() + ":" + d.getDay())
    myDisplayer(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds())
}, 1000);

//promise syntax
function myDisplayer(some){
    document.getElementById("demo").innerHTML =some;
}
let myPromise = new Promise (function(myResolve, myReject) {
    myResolve()
    myReject()
})
myPromise.then(
    function(value){},
    function(error){}
)

myPromise = new Promise (function(myResolve, myReject) {
    let x = 0;
   if (x == 0){
    myResolve("Ok")
   }else{
    myReject("Error")
   }
})
myPromise.then(
    function(value){myDisplayer(value)},
    function(error){myDisplayer(error)}
)

