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

animals[8] = "pig";
let interator = animals.keys()
for (const key of interator) {
    console.log(`${key}: ${animals[key]}`)
}

const newAnimals = console.log(animals.sort())

 let arr = [`a`,`b`,`c`,`d`,`e`];
 console.log( arr.copyWithin(2,3))

//creating an array using array() constructor
const animals2 = new Array("fish", "rat", "elephant")
console.log(animals2)

//using string.prototype.Split()
const animals3 = "donkey, lion, monkey".split(", ")
console.log(animals3)

//creating a string
const animalString = animals.jion()