document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('addTask');
    const newTaskInput = document.getElementById('newTask');
    const taskList = document.getElementById('taskList');
    const toggleTasksButton = document.getElementById('toggleTasks');

    addTaskButton.addEventListener('click', function() {
      const newTaskText = newTaskInput.value;
      if (newTaskText) {
        const newTask = document.createElement('li');
        newTask.textContent = newTaskText;
        taskList.appendChild(newTask);
        newTaskInput.value = '';
      }
    });

    toggleTasksButton.addEventListener('click', function() {
      taskList.classList.toggle('hidden');
    });

    taskList.addEventListener('click', function(event) {
      if (event.target.tagName === 'LI') {
        event.target.remove();
      }
    });

    taskList.addEventListener('click', function(event) {
      if (event.target.tagName === 'LI') {
        const parent = event.target.parentNode;
        console.log('Elemento pai:', parent);
      }
    });
  });