import { findToDoItem, thisToDoEl } from '../mainHelpers.js';

function setCheckButtons() {
  const checkButtons = document.querySelectorAll('.check-button');
  checkButtons.forEach((button) =>
    button.addEventListener('click', () => {
      event.stopImmediatePropagation();
      const todo = findToDoItem(button.getAttribute('data-todo-check-btn-id'));
      toggleCompleted(todo);
      setOpacity(todo.id);
      setClassesOfCheckButtons(button);
    })
  );
}

function toggleCompleted(todo) {
  todo.isCompleted ? (todo.isCompleted = false) : (todo.isCompleted = true);
}

function setClassesOfCheckButtons(button) {
  button.classList.toggle('bg-success');
}

function setOpacity(id) {
  const el = thisToDoEl(id);
  el.classList.toggle('half-opacity');
}

export { setCheckButtons };
