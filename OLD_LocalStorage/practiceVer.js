
// UI vars
const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');



// load all event listeners

loadEventListeners();

function loadEventListeners(){
  form.addEventListener('submit', addTask)
}

function addTask(e){

  //Create li 
  const li = document.createElement('li');
  // Add class to li
  li.className = 'collection-item'
  // Append a text node
  li.appendChild(document.createTextNode(taskInput.value));


  console.log(li.textContent);

  e.preventDefault();
}