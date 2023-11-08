const inserimentoTask = document.getElementById("taskInput")
const addTaskButton = document.getElementById("addTask")
const taskList = document.getElementById("ulList")

addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value

    const taskItem = document.createElement("li")
    taskItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-button"><ion-icon name="trash" class = "icon"></ion-icon></button>
            `

    taskItem.addEventListener("click", function () {
        taskItem.classList.toggle("completed")
    });

    const deleteButton = taskItem.querySelector(".delete-button")
    deleteButton.addEventListener("click", function () {
        taskItem.remove();
    });
    taskList.appendChild(taskItem)
    document.getElementById("taskInput").value = ""
});

