"use strict"
var submit = document.querySelector(".sum")

const cart = function () {
    var quantity = parseInt(document.querySelectorAll("#quantity").value);
    var price = parseInt(document.querySelectorAll("#price").value);
    var items = document.querySelectorAll(".item")
    var total = document.querySelector(".totalP")
    let costPrice = 0;
    items.forEach(function (item) {
        costPrice += quantity * price;
        console.log(`Total costPrice: ${costPrice}`)
    });
    total.textContent = costPrice;
}
console.log(cart())

submit.addEventListener(`click`, function (e) {
    console.log("click");
    
    cart()
})