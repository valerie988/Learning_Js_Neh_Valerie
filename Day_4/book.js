"use strict"
let Addressbook = [];
function book(Name,phone,address,email){
    const contact = {
        Name: Name,
        phone: phone,
        address: address,
        email: email,
    }
    Addressbook.push(contact)
}
const contact1 = {Name: "Valerie", phone: 652173171, address: "soa", email: "neh16ggmail.com"}

console.log(book())

