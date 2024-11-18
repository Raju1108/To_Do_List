// script.js

// Get elements
const addButton = document.getElementById('addButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add task function
addButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Create new task element
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="deleteButton">Delete</button>
    `;

    // Add event listener for delete button
    const deleteButton = li.querySelector('.deleteButton');
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    // Add event listener for task completion
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    // Append new task to the list
    taskList.appendChild(li);

    // Clear input field after adding task
    taskInput.value = '';
});

// Optional: Allow user to press Enter to add a task
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addButton.click();
    }
});
