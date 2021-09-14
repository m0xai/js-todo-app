import { inputItems, findToDoItem } from '../mainHelpers.js';
import { attachCurrentId, detachCurrentId } from './helper.js';
import { setDB, toDoArray } from '../db/db.js';

// button.getAttribute('data-todo-edit-btn') gives the id of the current element
let getCurrentInputs = function (thisToDo) {
  console.log('This todo lautet', thisToDo);
  inputItems.title().value = thisToDo.title;
  inputItems.ordner().value = thisToDo.ordner;
  inputItems.tag().value = thisToDo.tag;
  inputItems.notizen().value = thisToDo.notizen;
  inputItems.endDatum().value = thisToDo.endDatum;
  inputItems.endDatumSwitch().checked = thisToDo.endDatumSwitch;
  inputItems.endDatum().disabled = thisToDo.endDatumDisabled;

  // Attach Fertig button to this data-id
  attachCurrentId(thisToDo.id, 'submit-todo-button');
};

function setNeueInputs(e) {
  const thisToDo = findToDoItem(
    e.target.getAttribute('data-edit-fertig-btn-todo-id')
  );
  // Get item ID, which attached from getCurrentInputs
  //TODO: Push changed items to toDoArray like newToDo
  thisToDo.title = inputItems.title().value;
  thisToDo.ordner = inputItems.ordner().value;
  thisToDo.tag = inputItems.tag().value;
  thisToDo.notizen = inputItems.notizen().value;
  thisToDo.endDatum = inputItems.endDatum().value;
  thisToDo.endDatumSwitch = inputItems.endDatumSwitch().checked;
  thisToDo.endDatumDisabled = inputItems.endDatum().disabled;
  // setLS('todos', toDoArray);
  setDB(toDoArray, false, true);
  detachCurrentId('submit-todo-button');
}

export { setNeueInputs, getCurrentInputs };
