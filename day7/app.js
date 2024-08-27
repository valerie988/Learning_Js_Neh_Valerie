"use strict"

// console.log("hello guys")

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res) => res.json())
// .then((data) => console.log(data))


// const data = {
//     title: "This is the title",
//     body: "This is the body",
//     id: 2
// }
// fetch("https://jsonplaceholder.typicode.com/users/posts",{
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//         "content-type": "application/json"
//     }
// }).then((res) => res.json()).then((data) => console.log(data)
// )

//creating my blogging system
//const blog = document.querySelector("")

document.addEventListener("DOMContentLoaded", () => {
    
    const blogContainer = document.querySelector("#blog")

    fetch("https://notpadd.vercel.app/api/public", {
        headers: {
            USER_KEY: "dXNlcl8ybEY5dDlPN2FxaXV5SGdvS3lEQWtQaWtnVFo",
            USER_SECRET: "MGFiZTM3NjctNjk0YS00YTkzLWEwZjUtNzEwMDU2MDI4YjM1",
            public_only: true
        }
    })
    .then((res) => res.json())
    .then(data => {
        const blogElement = document.createElement("div")
        data.forEach(item => {

            blogElement.classList.add("item");

            blogElement.innerHTML = `<img src="${item.displayImage}"/> <h3>${item.title}</h3> <p>${item.description}</p>`
            
        });
        blogContainer.appendChild(blogElement)
        
    })
    .catch(error => {
        blogContainer.innerHTML = `<p>Something went wrong ${error}</p>`
    })
    
})