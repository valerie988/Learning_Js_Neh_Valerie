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
console.log(animals2[1])  // getting an item using its index
console.log(animals2[8])
animals2.pop()
console.log(animals2)


//using string.prototype.Split()
const animals3 = "donkey, lion, monkey".split(", ")
console.log(animals3)
console.log(animals3.indexOf("monkey"));   //get the index of an item
console.log(animals3.includes("tiger"));   //checking if an item is in an array

const newlength = animals3.push("Eagle");
console.log(animals3)
console.log(animals3.indexOf("donkey") !== -1);

//remove element from an index to the end
animals3.splice(0,2) // (start, stop)
console.log(animals3)

//remove the first element in the array
animals3.shift()
console.log(animals3)
animals3.unshift("frog") // add element at first index
console.log(animals3)

animals3.splice(0,2, "fox", "hen")   //replacing the items using their indices
console.log(animals3)

//interate through an array 
for (const animal of animals3) {
    console.log(animal)
}
//calling a function on each item
animals3.forEach((index, item, array) => {
    console.log(index, item)
});

//creating a string
const animalString = animals.join(", ")
console.log(animalString)

//concatente arrays
let combinedAnimal = animals.concat(animals2)
console.log(combinedAnimal);

//copy an array
console.log([...combinedAnimal]);
console.log(Array.from(animals));
console.log(animals2.slice());

//convert an array to a string and vice versa
console.log(JSON.stringify(animals2));
console.log(JSON.parse(JSON.stringify(animals2)));

