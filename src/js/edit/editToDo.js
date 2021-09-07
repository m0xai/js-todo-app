import { inputItems, findToDoItem, toDoArray } from '../mainHelpers.js';
import { setEditButtons, attachCurrentId, detachCurrentId } from './helper.js';
import { printToDos } from '../print.js';

// button.getAttribute('data-todo-edit-btn') gives the id of the current element
let getCurrentInputs = function (thisToDo) {
  inputItems.title().value = thisToDo.title;
  inputItems.ordner().value = thisToDo.ordner;
  inputItems.tag().value = thisToDo.tag;
  inputItems.notizen().value = thisToDo.notizen;
  inputItems.endDatum().value = thisToDo.endDatum;
  inputItems.endDatumSwitch().checked = thisToDo.endDatumSwitch;
  inputItems.endDatum().disabled = thisToDo.endDatumDisabled;

  console.log('is disabled?', thisToDo.endDatumDisabled);

  // Attach Fertig button to this data-id
  attachCurrentId(thisToDo.theToDoId(), 'submit-todo-button');
};

function setNeueInputs(e) {
  const thisToDo = findToDoItem(e.target.getAttribute('data-edit-fertig-btn-todo-id'));
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

export { setNeueInputs, getCurrentInputs };