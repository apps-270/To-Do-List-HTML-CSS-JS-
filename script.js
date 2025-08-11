document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addTaskButton = document.getElementById('addTaskButton');
  const taskList = document.getElementById('task-list'); // corrected ID
  const emptyImage = document.querySelector('.empty-image');

  // Function to update image visibility
  const updateImageVisibility = () => {
    if (taskList.querySelectorAll('li').length > 0) {
      emptyImage.style.display = 'none';
    } else {
      emptyImage.style.display = 'block';
    }
  };

  // Function to add a task
  const addTask = (task) => {
    const taskText = task.trim();
    if (taskText === '') {
      alert('Please enter a valid task.');
      return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;
    li.classList.add('task-item');

    // Add delete icon
    const deleteBtn = document.createElement('span');
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    deleteBtn.classList.add('delete-btn');
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
    taskInput.value = '';
    updateImageVisibility();
  };

  // Add task on button click
  addTaskButton.addEventListener('click', (event) => {
    event.preventDefault();
    const task = taskInput.value;
    addTask(task);
  });

  // Delete task on trash icon click
  taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('fa-trash')) {
      const li = event.target.closest('li');
      if (li) {
        li.remove();
        updateImageVisibility();
      }
    }
  });

  // Initial image check
  updateImageVisibility();
});