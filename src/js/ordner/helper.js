import { removeItem, ordners, toDoArray } from '../db/db.js';
import { delOrdnerWrapper } from '../print/helper.js';
import { printToDos } from '../print/print.js';
import { setOrdners } from './ordner.js';

function showRemoveOrdnerBtn(id) {
  const delOrdnerButton = document.createElement('a');
  delOrdnerButton.textContent = 'Lösche diesen Ordner';
  delOrdnerButton.classList.add('text-danger', 'mr-auto');
  delOrdnerButton.addEventListener('click', () => {
    removeOrdner(id, delOrdnerButton);
  });
  delOrdnerWrapper().appendChild(delOrdnerButton);
}

function removeOrdner(id, button) {
  removeItem('ordners', id);
  console.log('Remove Button', delOrdnerButton);
  button.parentNode.removeChild(button);
  setOrdners(ordners);
  printToDos(toDoArray);
}

// Adds ordners in the new or edit todo modal
function setInputOrdners(ordners) {
  console.log('Ordners in setInputOrdners: ', ordners);
  const ordnersInput = document.getElementById('todo-ordner-input');
  ordnersInput.innerHTML = '';
  ordners.forEach((ordner) => {
    ordnersInput.insertAdjacentHTML(
      'beforeend',
      `
      <option value="${ordner.name}">${ordner.name}</option>
    `
    );
  });
}

export { setInputOrdners, showRemoveOrdnerBtn };
