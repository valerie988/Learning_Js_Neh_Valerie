const map = new Map()  //creating a map
map.set(1, "hello")
map.set("1", "bye")
map.set(true, "bool")

//map properties
console.log(map.get(1));
console.log(map.get("1"));
console.log(map.has(2));
let del = map.delete("1")
console.log(del);

console.log(map.size);

//map as an object
let person = { name: "valerie"}
let position = new Map()
position.set(person, 24)
console.log(position.get(person));


//chaining
map.set(1, "hello")
.set("1", "bye")
.set(true, "bool")
console.log(map);
let obj = Object.fromEntries(map.entries())
console.log(obj);


//interating over maps

//map.key() method
let foodmap = new Map([["rice", 1000], ["eru", 2000], ["ndole", 1500]])
 for (const key of foodmap.keys()) {
    console.log(key);
 }

 //using the value method
 for (const value of foodmap.values()) {
    console.log(value);
 }

 //using the entry method
 for (const entry of foodmap) {
    console.log(entry);
 }

 foodmap.forEach((key, value, map) => {
    console.log(`${key}: ${value}`);
    
 });

 //map from object
 let me = {
    name: "valerie",
    age: 19,
    town: "Yaounde"
 }
 let student = new Map(Object.entries(me))
 console.log(student);

//Object from map
let num = Object.fromEntries([
    ["book", 12],
    ["ruler", 8],
    ["pen", 2],
])
console.log(num);

//set
let user = new Set()

let ange = {name: "ange"}
let mary = {name: "mary"}
let job = {name: "job"}

user.add(ange)
user.add(mary)
user.add(ange)
user.add(job)
user.add(ange)
console.log(user);

user.delete(ange)
console.log(user);

console.log(user.has("joan"))

let set = new Set([1,2,3,4])
set.forEach(num => {
    console.log(num);
});
for (const num of set) {
    console.log(num);
}

function unique(arr) {
    arr = new Set(["car","bike", "bike", "ship", "car","boat"])
    //Array.from(arr)
    return arr;
}
console.log(unique())