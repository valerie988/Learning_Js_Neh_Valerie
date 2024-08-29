document.addEventListener(`DOMContentLoaded`, () => {
  const form = document.querySelector("#taskForm");
  const activity = document.querySelector("#activity");
  const message = document.querySelector("#message");

  const tasknameSet = new Set();
  const task = new Map();

  form.addEventListener(`submit`, (e) => {
    e.preventDefault();
    const taskname = document.querySelector(".task-name").value;
    const taskdateline = document.querySelector(".task-dateline").value;
    const taskpriority = document.querySelector(".task-priority").value;
    const taskstate = document.querySelector(".task-state").value;

    console.log(tasknameSet);
    console.log(taskname);
    console.log(tasknameSet.has(taskname));
    
    
    if(tasknameSet.has(taskname)) {
      message.textContent = "Task already exist";
      message.style.color = "red";
      console.log("entered");
    } 
    else {
        tasknameSet.add(taskname);
        task.set(taskname, {
        taskdateline: "taskdateline",
        taskpriority: "taskpriotity",
        taskstate: "taskstate",
      });
    console.log("set");

    const activitylist = document.createElement("div");

    activitylist.innerHTML = `<h3>Task: ${taskname}</h3> <p>Dateline: ${taskdateline}</p> <p>Priority: ${taskpriority}</p> <p>State: ${taskstate}</p>`;
    activity.appendChild(activitylist);

    message.textContent = "Task added successfully!";
    message.style.color = "green";
    }
      form.reset();

  });
});
