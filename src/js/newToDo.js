import { inputItems, toDoArray } from './helpers.js';
import { printToDos } from './print.js';

const submitToDoButton = document.getElementById('submit-todo-button');
submitToDoButton.addEventListener('click', sendToDo);

// The prototrype class to create ToDo item
class ToDo {
  constructor(id, title, ordner, tag, notizen, endDatum) {
    this.id = id;
    this.title = title;
    this.ordner = ordner;
    this.tag = tag;
    this.notizen = notizen;
    this.endDatum = endDatum;
  }
}

// Create new ToDo item via its class
function sendToDo() {
  createToDo();
  addToDoArray(createToDo);
}

function createToDo() {
  const todo = new ToDo(
    Date.now(),
    inputItems.title().value,
    inputItems.ordner().value,
    inputItems.tag().value,
    inputItems.notizen().value,
    inputItems.endDatum().value
  );
  console.log(todo);
  return todo;
}

function addToDoArray(toDo) {
  toDoArray.push(toDo());
  console.log(toDoArray);
  printToDos(toDoArray);
}

export { ToDo, createToDo };
