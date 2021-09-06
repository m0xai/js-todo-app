import { inputItems, submitToDoButton, findToDoItem, toDoArray, toggleDatumInput } from './helpers.js';
import { sendToDo } from './newToDo.js';
import { printToDos } from './print.js';

function setEditButtons() {
  const editButtons = document.querySelectorAll('[data-todo-edit-btn]');
  editButtons.forEach((button) => {
    button.addEventListener('click', () => {
      event.stopImmediatePropagation();
      const thisToDo = findToDoItem(button.getAttribute('data-todo-edit-btn'));
      setNeueFertigButtonListener();
      toggleDatumInput();
      getCurrentInputs(thisToDo);
    });
  });
}

function setNeueFertigButtonListener() {
  // Remove To-Do creator and attach To-Do editor function
  submitToDoButton.removeEventListener('click', sendToDo);
  submitToDoButton.addEventListener('click', setNeueInputs);
}

// button.getAttribute('data-todo-edit-btn') gives the id of the current element
let getCurrentInputs = function (thisToDo) {
  inputItems.title().value = thisToDo.title;
  inputItems.ordner().value = thisToDo.ordner;
  inputItems.tag().value = thisToDo.tag;
  inputItems.notizen().value = thisToDo.notizen;
  inputItems.endDatum().checked = thisToDo.endDatum;
  inputItems.endDatumSwitch().checked = thisToDo.endDatumSwitch;
  inputItems.endDatum().disabled = thisToDo.endDatumDisabled;

  console.log('is disabled?', thisToDo.endDatumDisabled);

  // Attach Fertig button to this data-id
  attachCurrentId(thisToDo.theToDoId(), 'submit-todo-button');
};

function setNeueInputs(e) {
  const thisToDo = findToDoItem(e.target.getAttribute('data-todo-id'));
  // Get item ID, which attached from getCurrentInputs
  //TODO: Push changed items to toDoArray like newToDo
  thisToDo.title = inputItems.title().value;
  thisToDo.ordner = inputItems.ordner().value;
  thisToDo.tag = inputItems.tag().value;
  thisToDo.notizen = inputItems.notizen().value;
  thisToDo.endDatum = inputItems.endDatum().value;
  thisToDo.endDatumSwitch = inputItems.endDatumSwitch().checked;
  thisToDo.endDatumDisabled = inputItems.endDatum().disabled;

  printToDos(toDoArray);
  setEditButtons();
  console.log('Sneaking around', thisToDo);
  console.log('newToDo array', toDoArray);
  detachCurrentId('submit-todo-button');
}

function attachCurrentId(id, itemId) {
  const fertigBtn = document.getElementById(itemId);
  fertigBtn.setAttribute('data-todo-id', id);
}
function detachCurrentId(itemId) {
  const fertigBtn = document.getElementById(itemId);
  fertigBtn.removeAttribute('data-todo-id');
}

export { setEditButtons };
