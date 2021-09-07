import { submitToDoButton, findToDoItem, toggleDatumInput } from '../mainHelpers.js';
import { sendToDo } from '../add/newToDo.js';
import { setNeueInputs, getCurrentInputs } from './editToDo.js';

function setNeueFertigButtonListener() {
  // Remove To-Do creator and attach To-Do editor function
  submitToDoButton.removeEventListener('click', sendToDo);
  submitToDoButton.addEventListener('click', setNeueInputs);
}

function setEditButtons() {
  const editButtons = document.querySelectorAll('[data-todo-edit-btn]');
  console.log('Editing buttons');
  editButtons.forEach((button) => {
    button.addEventListener('click', () => {
      event.stopImmediatePropagation();
      const thisToDo = findToDoItem(button.getAttribute('data-todo-edit-btn'));
      console.log('Setting edit buttons...');
      setNeueFertigButtonListener();
      toggleDatumInput();
      getCurrentInputs(thisToDo);
    });
  });
}

function attachCurrentId(id, itemId) {
  const fertigBtn = document.getElementById(itemId);
  fertigBtn.setAttribute('data-edit-fertig-btn-todo-id', id);
}
function detachCurrentId(itemId) {
  const fertigBtn = document.getElementById(itemId);
  fertigBtn.removeAttribute('data-edit-fertig-btn-todo-id');
}

export { attachCurrentId, detachCurrentId, setEditButtons };
