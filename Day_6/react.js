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
