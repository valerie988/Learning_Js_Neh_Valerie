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


interating over maps