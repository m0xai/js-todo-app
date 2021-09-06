import { inputItems, submitToDoButton, findToDoItem, toDoArray, toggleDatumInput } from './helpers.js';
import { sendToDo } from './newToDo.js';

function setEditButtons() {
  const editButtons = document.querySelectorAll('[data-todo-edit-btn]');
  editButtons.forEach((button) => {
    button.addEventListener('click', () => {
      event.stopImmediatePropagation();
      const thisToDo = findToDoItem(button.getAttribute('data-todo-edit-btn'));
      setNeueFertigButtonListener();
      toggleDatumInput();
      getCurrentInputs(thisToDo);
      setNeueInputs();
    });
  });
}

function setNeueFertigButtonListener() {
  // Remove To-Do creator and attach To-Do editor function
  submitToDoButton.removeEventListener('click', sendToDo);
  submitToDoButton.addEventListener('click', setNeueInputs);
}

// button.getAttribute('data-todo-edit-btn') gives the id of the current element
function getCurrentInputs(thisToDo) {
  console.log('Get id vie class function:', toDoArray[0].theToDoId());
  // TODO: Edit here to reveal current values
  inputItems.title().value = thisToDo.title;
  inputItems.ordner().value = thisToDo.ordner;
  inputItems.tag().value = thisToDo.tag;
  inputItems.notizen().value = thisToDo.notizen;
  inputItems.endDatum().checked = thisToDo.endDatum;
  inputItems.endDatumSwitch().checked = thisToDo.endDatumSwitch;
  inputItems.endDatum().disabled = thisToDo.endDatumDisabled;
  console.log('is disabled?', thisToDo.endDatumDisabled);
}

function setNeueInputs() {
  //TODO: Push changed items to toDoArray like newToDo
}

export { setEditButtons };
