import { inputItems, toDoArray } from '../mainHelpers.js';
import { printToDos } from '../print.js';
import { setEditButtons } from '../edit/helper.js';

// The prototrype class to create ToDo item
class ToDo {
  constructor(id, title, ordner, tag, notizen, endDatum, endDatumSwitch, endDatumDisabled) {
    this.id = id;
    this.title = title;
    this.ordner = ordner;
    this.tag = tag;
    this.notizen = notizen;
    this.endDatum = endDatum;
    this.endDatumSwitch = endDatumSwitch;
    this.endDatumDisabled = endDatumDisabled;
    this.isCompleted = false;
  }
  theToDoId() {
    return this.id;
  }
}

// Create new ToDo item via its class
function sendToDo() {
  createToDo();
  addToDoArray(createToDo);
  printToDos(toDoArray);
  setEditButtons();
}

function createToDo() {
  const todo = new ToDo(
    Date.now(),
    inputItems.title().value,
    inputItems.ordner().value,
    inputItems.tag().value,
    inputItems.notizen().value,
    inputItems.endDatum().value,
    inputItems.endDatumSwitch().checked,
    inputItems.endDatum().disabled
  );
  return todo;
}

function addToDoArray(toDo) {
  toDoArray.push(toDo());
  console.log('New Item Added in Array:', toDoArray);
}

export { ToDo, createToDo, sendToDo };
