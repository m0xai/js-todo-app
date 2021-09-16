import { thisToDoEl, thisToDoId } from '../mainHelpers.js';
import { setItemFarbe, toggleItemDetails } from '../add/helper.js';
import { setEditButtons } from '../edit/helper.js';
import { setCheckButtons, completedUpdateFront } from '../filter/completed.js';
import {
  clearMainWrapper,
  seperateItemsForStatus,
  countToDos,
} from './helper.js';
import { deleteToDo } from '../delete.js';

function printToDos(toDos) {
  // Reset ToDos Wrapper to add only new items every time.
  console.log(countToDos(toDos).erledigteToDos, ' Erledigt...');
  console.log(countToDos(toDos).totalToDos, ' total...');
  clearMainWrapper(toDos);

  toDos.forEach((toDo) => {
    seperateItemsForStatus(toDo);
    setItemFarbe(toDo.tag, thisToDoEl(toDo.id));
    thisToDoEl(toDo.id);
    thisToDoId(toDo.id);
    toggleItemDetails(toDo.id);
    // deleteToDo(thisToDoEl(toDo.id), toDo.id);
    setCheckButtons();

    if (toDo.isCompleted) {
      completedUpdateFront(toDo);
    }
  });
  deleteToDo();
  setEditButtons();
}

export { printToDos };
