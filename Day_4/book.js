"use strict"
let Addressbook = [];

const submit = document.querySelector("button");

function book(){
    const name = document.querySelector("#name").value
    const phone = document.querySelector("#phone").value
    const address = document.querySelector("#address").value
    const email = document.querySelector("#email").value
    const contactList = document.querySelector("#contactList")

    const contact = {
        name: name,
        phone: phone,
        address: address,
        email: email,
    }
    Addressbook.push(contact);
    console.log(Addressbook);
    

    const contactElement = document.createElement("li")
    Addressbook.forEach((contact,index) => {
        contactElement.innerHTML = (`${contact.name}, ${contact.phone}, ${contact.address},${contact.email}`)
        console.log(contactElement);
    });
    contactList.appendChild(contactElement);
}
submit.addEventListener(`click`, () => {
    book()
})