task = document.getElementsByClassName("task")[0];
addTask = document.getElementsByClassName("addTask")[0]
taskList = document.getElementsByClassName("taskList")[0]

async function onClick() {
    if (task.value === "") {
        alert("Enter a task.");
    } else {
        const newTaskList = document.createElement("li");
        newTaskList.textContent = task.value;
        const complete = document.createElement("button")
        complete.textContent = "Complete"
        complete.style.marginLeft = "10px";
        complete.className = "complete"
        const dltBtn = document.createElement("button");
        dltBtn.textContent = "Delete";
        dltBtn.style.marginLeft = "10px";
        dltBtn.className = "delete"

        dltBtn.addEventListener("click", () => {
            newTaskList.remove(); // removes the entire <li> (task + button)
        });


        complete.addEventListener("click" , () =>{
            newTaskList.style.textDecoration = "line-through"
            newTaskList.style.color = "#2e7d32"
            newTaskList.style.textDecorationColor = "white"

        })
        newTaskList.appendChild(complete)
        newTaskList.appendChild(dltBtn);
        taskList.appendChild(newTaskList);
        task.value = "";
    }
}
task.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        onClick()
    }    
})