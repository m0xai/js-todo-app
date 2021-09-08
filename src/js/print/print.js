import {
  toDosWrapper,
  thisToDoEl,
  thisToDoId,
  deleteToDo,
} from '../mainHelpers.js';
import { setItemFarbe, toggleItemDetails } from '../add/helper.js';
import { setEditButtons } from '../edit/helper.js';
import { setCheckButtons, completedUpdateFront } from '../filter/completed.js';
import {
  clearMainWrapper,
  printNotCompletedToDos,
  printCompletedToDos,
} from './helper.js';

function printToDos(toDos) {
  // Reset ToDos Wrapper to add only new items every time.
  console.log('PrintToDos Running...');
  clearMainWrapper();
  // Create Completed and Uncompleted items containers.
  toDos.forEach((toDo) => {
    printNotCompletedToDos(toDo);
    printCompletedToDos(toDo);

    // Invoke functions for each to-do item to set visual appearance.
    setItemFarbe(toDo.tag, thisToDoEl(toDo.id));
    thisToDoEl(toDo.id);
    thisToDoId(toDo.id);
    toggleItemDetails(toDo.id);
    deleteToDo(thisToDoEl(toDo.id), toDo.id);
    setCheckButtons();

    if (toDo.isCompleted) {
      completedUpdateFront(toDo);
    }
  });
  // End od forEach for to-dos
  setEditButtons();
}

export { printToDos };
