import { showToast } from './mainHelpers';
import { removeItem } from './db/db';

// Delete To Do item HOF
function deleteToDo() {
  const delButtons = document.querySelectorAll(`[data-todo-del-btn]`);

  delButtons.forEach((button) => {
    const id = button.getAttribute('data-todo-del-btn');
    console.log('Getting id from button', id);
    button.addEventListener('click', function () {
      console.log('Called before click?');
      delItemPermanent(id);
    });
  });
}

function delItemPermanent(id) {
  attachIdToButton(id);
}

function attachIdToButton(id) {
  const fertigButton = document.getElementById('confirm-button-fertig');
  fertigButton.setAttribute('data-confirm-fertig', id);
  console.log('Fertig button id:', id);
  fertigButton.addEventListener('click', () => {
    deleteToDoFromArr(id);
    showToast('Aufgabe', 'gelöscht');
  });
}

// Remove item from array
function deleteToDoFromArr(id) {
  removeItem('toDoArray', id);
}

export { deleteToDo };
