let myArray = []
const myObj = {
    Name: "Name",
    date: "dateline",
    Priority: "priority",
    state: "state"
}


const form = document.querySelector("#taskForm")

form.addEventListener(`submit`, (e) => {
    e.preventDefault()
    const taskname = document.querySelector(".task-name").value
    const taskdateline = document.querySelector(".task-dateline").value
    const taskpriority = document.querySelector(".task-priority").value
    const taskstate = document.querySelector(".task-state").value
    
    const task = {taskname, taskdateline, taskpriority, taskstate}

    myArray.push(task)

    const tasknameSet = new Set()

    tasknameSet.add(myArray)

    const activity = document.querySelector("#activity")
    const activitylist = document.createElement("div")
   
    activitylist.innerHTML = `<h3>Task: ${taskname}</h3> <p>Dateline: ${taskdateline}</p> <p>Priority: ${taskpriority}</p> <p>State: ${taskstate}</p>`
    activity.appendChild(activitylist)

})