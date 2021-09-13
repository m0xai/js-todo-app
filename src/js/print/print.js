import { thisToDoEl, thisToDoId, deleteToDo } from '../mainHelpers.js';
import { setItemFarbe, toggleItemDetails } from '../add/helper.js';
import { setEditButtons } from '../edit/helper.js';
import { setCheckButtons, completedUpdateFront } from '../filter/completed.js';
import {
  clearMainWrapper,
  printNotCompletedToDos,
  printCompletedToDos,
  countToDos,
} from './helper.js';

function printToDos(toDos) {
  // Reset ToDos Wrapper to add only new items every time.
  console.log(countToDos(toDos).erledigteToDos, ' Erledigt...');
  console.log(countToDos(toDos).totalToDos, ' Total.');
  clearMainWrapper(toDos);

  toDos.forEach((toDo) => {
    printNotCompletedToDos(toDo);
    printCompletedToDos(toDo);
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
  setEditButtons();
}

export { printToDos };
