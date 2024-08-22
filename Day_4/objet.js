"use strict"

//create an object
const person = {
    name: "Valerie",
    age: 19,
    level: 200,
};
 console.log(person)

 //adding properties to an object
const fruit = {}
fruit.name = "banana";
fruit.color = "yellow"
console.log(fruit);

const person1 = new Object()
person1.name = "Anna";
console.log(person1)

//acceessing elements
console.log(fruit["color"])
console.log(fruit.name);

const student = {
    firstName: "Tantoh",
    lastName: "Thierry",
    class: "form2",
    fullname : function(){
        return this.firstName + " " + this.lastName;  //method in js
    }
};
console.log(student.fullname())
console.log(student.fullname().toUpperCase())

let x = student;
x.class = "form3"
console.log(x);

console.log(student.firstName, "is in", student.class )

// add a property
student.country = "cameroon";
console.log(student)

//delete a property
delete student.class;
delete student["lastName"]
console.log(student)

//nested objects
const school = {
    name: "FCSS",
    location: "Obili",
    class: {
        student: 34,
        size: "large"
    }
}
console.log(school);
console.log(school.class.student);

//displaying objects
document.getElementById("demo").innerHTML = school.class.size;

let text = ""
for (const x in school) {
    text += school[x] + "";
} 
document.getElementById("demo").innerHTML = text;

//using object.value()