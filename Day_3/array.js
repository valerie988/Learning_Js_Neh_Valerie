"use strict"

//array length
const animals = []
animals.push("cat", "dog", "rabbit");
console.log("There are ", animals.length, "animals");
animals[7] = "pig";
console.log("There are ", animals.length, "animals");
console.log(Object.keys(animals));

//reducing the length
animals.length = 4;
console.log(Object.keys(animals));
console.log("There are ", animals.length, "animals");

animals.forEach((item, index) => {
    console.log(`${index}: ${item}`);
});
console.log(animals.reverse())