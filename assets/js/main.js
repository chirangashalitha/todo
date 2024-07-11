const inputBox = document.getElementById("task-input-box");
const taskList = document.getElementById("task-list");

function addTask() {
    if (inputBox.value === '') {
        alert("Please write a task!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "Clear";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveTasks();
}

taskList.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTasks();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTasks();
    }
}, false)

function saveTasks() {
    localStorage.setItem("tasks", taskList.innerHTML);
}

function showTasks() {
    taskList.innerHTML = localStorage.getItem("tasks");
}
showTasks();