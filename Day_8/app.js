const map = new Map()
map.set(1, "hello")
map.set("1", "bye")
map.set(true, "bool")

console.log(map.get(1));
console.log(map.get("1"));
console.log(map.has(2));
let del = map.delete("1")
console.log(del);

console.log(map.size);

let person = { name: "valerie"}
let position = new Map()
position.set(person, 24)
console.log(position.get(person));
