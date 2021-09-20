import {
  thisToDoEl,
  thisToDoId,
  attachEventSidebarLinks,
} from '../mainHelpers.js';
import { setItemFarbe, toggleItemDetails } from '../add/helper.js';
import { setEditButtons } from '../edit/helper.js';
import { setCheckButtons, completedUpdateFront } from '../filter/completed.js';
import {
  seperateItemsForStatus,
  countToDos,
  clearItemLists,
  printCountInBadge,
} from './helper.js';
import { deleteToDo } from '../delete.js';

function printToDos(toDos) {
  // Reset ToDos Wrapper to add only new items every time.
  console.log(countToDos(toDos).erledigteToDos, ' Erledigt...');
  console.log(countToDos(toDos).totalToDos, ' total...');
  clearItemLists();
  printCountInBadge(toDos);
  toDos.forEach((toDo) => {
    seperateItemsForStatus(toDo);
    setItemFarbe(toDo.tag, thisToDoEl(toDo.id));
    thisToDoEl(toDo.id);
    thisToDoId(toDo.id);
    toggleItemDetails(toDo.id);
    setCheckButtons();

    if (toDo.isCompleted) {
      completedUpdateFront(toDo);
    }
  });
  deleteToDo();
  setEditButtons();
  attachEventSidebarLinks();
}

export { printToDos };
