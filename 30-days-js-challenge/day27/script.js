// Initialize an array to hold tasks
let tasks = [];
let editIndex = null; // To keep track of the task being edited

// Function to create a new task and add it to the tasks array
function addTask(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Get form field values
    const title = document.getElementById("task-title").value.trim();
    const description = document
        .getElementById("task-description")
        .value.trim();
    const dueDate = document.getElementById("task-due-date").value;
    // const completed = document.getElementById("task-completed").checked;

    // Create a new task object
    const newTask = {
        title: title,
        description: description,
        dueDate: dueDate,
        // completed: completed,
    };

    if (editIndex !== null) {
        // Update the existing task
        tasks[editIndex] = newTask;
        editIndex = null; // Reset the edit index
    } else {
        // Add the new task to the tasks array
        tasks.push(newTask);
    }

    // Display the new task in the task list
    displayTasks();

    // Clear the form fields
    document.getElementById("task-form").reset();
}

// Function to display all tasks in the task list
function displayTasks() {
    const tasksList = document.getElementById("tasks");
    tasksList.innerHTML = ""; // Clear the current task list

    tasks.forEach((task, index) => {
        // Create a list item for each task
        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item");

        // Create task content
        const taskContent = `
            <div class='task-form-group'><strong>Title: </strong> ${task.title}</div> 
            <div class='task-form-group'><strong>Description: </strong> ${task.description} </div>
            <div class='task-form-group'><strong>Due Date: </strong> ${task.dueDate} </div>
            <button class="edit-btn" onclick="editTask(${index})">Edit</button>
            <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
        `;
        // <strong>Completed:</strong> ${task.completed ? "Yes" : "No"}

        // Set the content of the list item
        taskItem.innerHTML = taskContent;

        // Append the list item to the task list
        tasksList.appendChild(taskItem);
    });
}

function editTask(index) {
    // Populate form fields with the selected task's details
    document.getElementById("task-title").value = tasks[index].title;
    document.getElementById("task-description").value =
        tasks[index].description;
    document.getElementById("task-due-date").value = tasks[index].dueDate;
    // document.getElementById("task-completed").checked = tasks[index].completed;

    // Set the editIndex to the index of the task being edited
    editIndex = index;
}

// Function to delete a task with a confirmation dialog
function deleteTask(index) {
    if (confirm("Are you sure you want to delete this task?")) {
        // Remove the task from the array
        tasks.splice(index, 1);

        // Display the updated task list
        displayTasks();
    }
}

// Attach the form submit event to the addTask function
document.getElementById("task-form").addEventListener("submit", addTask);
