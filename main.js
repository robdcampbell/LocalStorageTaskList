
// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const fileter = document.querySelector('#filter');
const taskInput =  document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventlisteners(){
  form.addEventListener('submit',addTask);
}