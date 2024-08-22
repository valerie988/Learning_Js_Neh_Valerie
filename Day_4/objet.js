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
const myArrray = Object.values(school)
document.getElementById("demo").innerHTML = myArrray;

//using object.entries()
const items = {
    pen: 20,
    books: 100,
    rulers: 15,
}
let Text = ""
for (let [item,value] of Object.entries(items)) {
    Text += item + ": " + value + "<br>";
}
document.getElementById("demo").innerHTML = Text;

//object constructors
 function Uss(Name, age, color, height) {
    this.Name = Name
    this.age = age
    this.color = color
    this.height = height
 };
 const student1 = new Uss("mary", 12, "fair", 1.6);
 console.log(student1)
 document.getElementById("demo").innerHTML = student1.color;

 function books(Name,phone,address,email) {
    this.Name = Name;
    this.phone = phone;
    this.address = address;
    this.email = email;
};
const Mom = new books("Loveline", 676963139, "soa", "loveline2@gmail.com")
document.getElementById("demo").innerHTML = Mom.Name;


