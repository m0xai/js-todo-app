import {
  inputItems,
  thisToDoEl,
  neueToDoButton,
  submitToDoButton,
} from '../mainHelpers.js';
import { setNeueInputs } from '../edit/editToDo.js';
import { sendToDo } from './newToDo.js';

// Reset inputs on clicking neue Aufgabe button
function resetInputs() {
  inputItems.title().value = '';
  inputItems.ordner().value = 'andere';
  inputItems.tag().value = 'keine';
  inputItems.notizen().value = '';
  inputItems.endDatum().value = '';
  inputItems.endDatumSwitch().checked = null;
  inputItems.endDatum().disabled = 'disabled';
}
// Reset inputs and attach on Submit button a Sender event listener on click

if (window.location.pathname == '/app.html') {
  neueToDoButton.addEventListener('click', () => {
    resetInputs();
    submitToDoButton.removeEventListener('click', setNeueInputs);
    submitToDoButton.addEventListener('click', sendToDo);
  });
}

// Set To Do item color to specified color at form
function setItemFarbe(tag, el) {
  el.style.setProperty('--transparent', `var(--${tag})`);
}

function toggleItemDetails(id) {
  thisToDoEl(id).addEventListener('click', () => {
    document
      .querySelector(`[data-koerper-id="${id}"]`)
      .classList.toggle('d-none');
    const itemFuss = document.querySelector(`[data-fuss-id="${id}"]`);
    if (itemFuss.classList.contains('d-none')) {
      itemFuss.classList.remove('d-none');
      itemFuss.classList.add('d-flex');
    } else {
      itemFuss.classList.remove('d-flex');
      itemFuss.classList.add('d-none');
    }
  });
}

export { setItemFarbe, toggleItemDetails };
