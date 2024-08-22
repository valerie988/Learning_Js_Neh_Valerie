"use strict"
const submit = document.getElementById("sum")

const cart = () => {
    const total = document.querySelector(".totalP")
    const items = document.querySelectorAll(".item");
    let totalCostPrice = 0;
    items.forEach(function (item) {
        let price = parseInt(item.querySelector(".price").textContent)
        let quantity = parseInt(item.querySelector(".quantity").value)
        let costPrice = price * quantity;
        totalCostPrice += costPrice;
    })
    total.textContent = totalCostPrice;

}
console.log(cart())

submit.addEventListener(`click`, function (e) {

    cart()
})