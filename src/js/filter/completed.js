// import { setLS } from '../mainHelpers.js';
import { findToDoItem, thisToDoEl } from '../mainHelpers.js';
import { printToDos } from '../print/print.js';
import { toDoArray } from '../db/db.js';

//TODO: Frontend her seferinde bir tane itemin goruntusunu degistiriyor. bunun nedeni her defasidna listenin yenilenmesi ve sadece dokunulanin stil ozelliklerinin kalici olmasi. Print fonksiyonunun her tiklamda calismasi dogru ancak forEach.isCompleted fonksiyonu calistirilmali print.js de

function setCheckButtons() {
  const checkButtons = document.querySelectorAll('.check-button');
  checkButtons.forEach((button) =>
    button.addEventListener('click', () => {
      event.stopImmediatePropagation();
      const todo = findToDoItem(button.getAttribute('data-todo-check-btn-id'));
      toggleCompleted(todo);
      completedUpdateFront(todo);
      printToDos(toDoArray);
    })
  );
}

function completedUpdateFront(todo) {
  setItemOpacity(todo.id);
  setClassesOfCheckButtons(todo);
}

function toggleCompleted(todo) {
  todo.isCompleted ? (todo.isCompleted = false) : (todo.isCompleted = true);
  // setLS('todos', toDoArray);
}

function setClassesOfCheckButtons(todo) {
  const el = thisToDoEl(todo.id);
  const button = el.querySelector(`[data-todo-check-btn-id="${todo.id}"]`);
  button.classList.toggle('bg-success');
}

function setItemOpacity(id) {
  const el = thisToDoEl(id);
  el.classList.toggle('half-opacity');
}

export { setCheckButtons, completedUpdateFront };
