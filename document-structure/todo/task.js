const form = document.querySelector('#tasks__form');
const input = document.querySelector('#task__input');
const taskList = document.querySelector('#tasks__list');

form.addEventListener('submit', addTask);
taskList.addEventListener('click', deleteTask);

if (localStorage.getItem('tasks')) {
   taskList.innerHTML = localStorage.getItem('tasks');
}

function addTask(event) {
   event.preventDefault();
   const taskText = input.value;
   const taskHTML = 
      `<div class="task">
         <div class="task__title">
         ${taskText}
         </div>
         <a href="#" class="task__remove">&times;</a>
      </div>`;
   if (input.value) taskList.insertAdjacentHTML('beforeend', taskHTML);
   input.value = '';
   input.focus();
   saveTasks();
}

function deleteTask(event) {
   event.preventDefault();
   const btn = event.target;
   if (btn.classList.contains('task__remove')) {
      const parent = btn.closest('.task');
      parent.remove();
   }
   saveTasks();
}

function saveTasks() {
   localStorage.setItem('tasks', taskList.innerHTML);
}