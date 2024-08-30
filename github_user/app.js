"use strict"
document.addEventListener(`DOMContentLoaded`, () => {
    const searchForm = document.querySelector(".searchForm")
    const sunColor = document.querySelector(".sunColor")
    const light = document.querySelector(".light")

    let toggle = false
    light.addEventListener(`click`, () => {
        if(toggle){
           document.body.style.backgroundColor = "rgb(7, 30, 58)"
           sunColor.textContent = "DARK"
            console.log("blue");
            
        }else{
            document.body.style.backgroundColor = "white"
            sunColor.textContent = "LIGHT"
            console.log("white"); 
        }
        toggle =  !toggle;
    })

    function formatDate(dateString) {
        // Parse the date string into a Date object
        const date = new Date(dateString);
    
        // Define an array of month names
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
        // Extract the day, month, and year
        const day = date.getUTCDate(); // Use getUTCDate for UTC time
        const month = monthNames[date.getUTCMonth()]; // getUTCMonth returns 0-11
        const year = date.getUTCFullYear(); // getUTCFullYear returns the full year
    
        // Format the date as "DD MMM YYYY"
        return `${day} ${month} ${year}`;

    }

    searchForm.addEventListener(`submit`, (e) => {
        e.preventDefault()

        const searchInput = document.getElementById("searchInput").value
        const image = document.querySelector(".image")
        const name = document.querySelector(".name")
        const username = document.querySelector(".username")
        const userbio = document.querySelector(".userbio")
        const date = document.querySelector(".date")
        const numRepos = document.querySelector(".numRepos")
        const numFollower = document.querySelector(".numFollower")
        const numFollowing = document.querySelector(".numFollowing")
        const location = document.querySelector(".location")
        const twitter = document.querySelector(".twitter")
        const githubLink = document.querySelector(".github-link")
        const hubAddress = document.querySelector(".hubAddress")
        
        console.log(searchInput);
        
        fetch(`https://api.github.com/users/${searchInput}`)
        .then((res) => res.json())
        .then(data => {
            console.log(data);
            image.src = data.avatar_url
            name.textContent = data.name ? data.name : "No Name"
            username.textContent = "@" + data.login

            date.textContent = "Joined " + formatDate(data.created_at)

            if (data.bio)
                userbio.textContent = data.bio

            numRepos.textContent = data.public_repos
            numFollower.textContent = data.followers
            numFollowing.textContent = data.following

            location.textContent = data.location ?? "None"
            twitter.textContent = data.twitter_username ?? "No account"

            githubLink.textContent = data.html_url
            githubLink.href = data.html_url
            githubLink.target = "_blank"

            hubAddress.textContent = data.company ?? "No company"
   
        })
    })
})