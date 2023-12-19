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

// Function to change background color and set cookie
function changeColor(color) {
    document.body.style.backgroundColor = color;
    setCookie('selectedColor', color, 365); // Set cookie with a one-year expiration
}

// Function to retrieve the stored color from cookie on page load
function retrieveStoredColor() {
    const storedColor = getCookie('selectedColor');
    if (storedColor) {
        document.body.style.backgroundColor = storedColor;
    }
}

// Call retrieveStoredColor on page load
retrieveStoredColor();

// Function to set a cookie
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Function to get a cookie value by name
function getCookie(name) {
    const cookieArr = document.cookie.split(';');
    for (let i = 0; i < cookieArr.length; i++) {
        const cookiePair = cookieArr[i].split('=');
        if (cookiePair[0].trim() === name) {
            return cookiePair[1];
        }
    }
    return null;
}