import { inputItems } from '../mainHelpers.js';
import { printToDos } from '../print/print.js';
import { setDB, toDoArray } from '../db/db.js';

// The prototrype class to create ToDo item
class ToDo {
  constructor(
    id,
    title,
    ordner,
    tag,
    notizen,
    endDatum,
    endDatumSwitch,
    endDatumDisabled,
    isCompleted
  ) {
    this.id = id;
    this.title = title;
    this.ordner = ordner;
    this.tag = tag;
    this.notizen = notizen;
    this.endDatum = endDatum;
    this.endDatumSwitch = endDatumSwitch;
    this.endDatumDisabled = endDatumDisabled;
    this.isCompleted = isCompleted;
  }
  theToDoId() {
    return this.id;
  }
}

// Create new ToDo item via its class
function sendToDo() {
  console.log('To Do Array, just before new todo sending', toDoArray);
  createToDo();
  pushToArray(createToDo);
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
    inputItems.endDatum().disabled,
    false
  );
  return todo;
}

function pushToArray(creator) {
  toDoArray.push(creator());
  setDB(toDoArray);
}

export { ToDo, createToDo, sendToDo };
