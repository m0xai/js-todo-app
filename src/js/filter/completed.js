import { setDB, toDoArray } from '../db/db.js';
import { findToDoItem, thisToDoEl } from '../mainHelpers.js';
import { completedList, unCompletedList } from '../print/helper.js';
//TODO: Frontend her seferinde bir tane itemin goruntusunu degistiriyor. bunun nedeni her defasidna listenin yenilenmesi ve sadece dokunulanin stil ozelliklerinin kalici olmasi. Print fonksiyonunun her tiklamda calismasi dogru ancak forEach.isCompleted fonksiyonu calistirilmali print.js de

function setCheckButtons() {
  const checkButtons = document.querySelectorAll('.check-button');
  checkButtons.forEach((button) =>
    button.addEventListener('click', () => checkButtonsActions(button))
  );
}

function checkButtonsActions(button) {
  event.stopImmediatePropagation();

  const todo = findToDoItem(button.getAttribute('data-todo-check-btn-id'));
  console.log('Button Id: ', todo.id);
  toggleCompleted(todo);
  console.log('GWhy go d why');
  completedUpdateFront(todo);
  changeItemPosition(todo);

  setDB(toDoArray, false, false);
}

function completedUpdateFront(todo) {
  setItemOpacity(todo.id);
  setClassesOfCheckButtons(todo);
}
let changeItemPosition = (todo) => {
  const el = thisToDoEl(todo.id);
  if (el.parentNode == unCompletedList()) {
    el.parentNode.removeChild(el);
    completedList().insertAdjacentElement('afterbegin', el);
  } else {
    el.parentNode.removeChild(el);
    unCompletedList().insertAdjacentElement('afterbegin', el);
  }
};

function toggleCompleted(todo) {
  todo.isCompleted ? (todo.isCompleted = false) : (todo.isCompleted = true);
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
