// Array to store tasks
let tasks = [];

// Function to render tasks
function renderTasks() {
    const taskListContainer = document.getElementById('taskList');
    taskListContainer.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => toggleTaskStatus(index));

        const taskText = document.createElement('span');
        taskText.innerText = task.text;

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteButton.classList.add('delete'); 
        deleteButton.addEventListener('click', () => deleteTask(index));

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskText);
        taskItem.appendChild(deleteButton);

        if (task.completed) {
            taskText.style.textDecoration = 'line-through';
        }

        taskListContainer.appendChild(taskItem);
    });
}

// Function to add a new task
function addTask() {
    const newTaskInput = document.getElementById('newTask');
    const newTaskText = newTaskInput.value.trim();

    if (newTaskText !== '') {
        tasks.push({ text: newTaskText, completed: false });
        newTaskInput.value = '';
        renderTasks();
    }
    else{
        alert('Please enter a task before adding.'); 
    }
}

// Function to toggle the status of a task (completed/uncompleted)
function toggleTaskStatus(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Initial rendering of tasks
renderTasks();
