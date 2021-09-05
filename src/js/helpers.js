import { printToDos } from './print.js';

// Init ToDo Array
let toDoArray = [];

const toDosWrapper = document.getElementById('todos-wrapper');
const neueToDoButton = document.getElementById('neue-todo-button');

// Get every input value from new ToDo Modal
const inputItems = {
  title: () => document.getElementById('todo-title-input'),
  ordner: () => document.getElementById('todo-ordner-input'),
  tag: () => document.getElementById('todo-tag-input'),
  notizen: () => document.getElementById('todo-notizen-input'),
  endDatumSwitch: () => document.getElementById('end-datum-switch'),
  endDatum: () => document.getElementById('todo-endDatum-input'),
};

// Stelle Startdarum als heute
(function setStartDatum() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  today = yyyy + '-' + mm + '-' + dd;
  document.getElementById('todo-endDatum-input').setAttribute('min', today);
})();

// Activate - Deactivate Datum Eingabe vie Switch
const datumEingabeSwitchLabel = document.getElementById('end-datum-switch-label');
datumEingabeSwitchLabel.addEventListener('click', toggleDatumInput);

function toggleDatumInput() {
  const endDatumSwitch = () => document.getElementById('end-datum-switch');
  if (endDatumSwitch().checked == false) {
    endDatumSwitch().setAttribute('checked', 'true');
  }
  if (endDatumSwitch().checked == true) {
    endDatumSwitch().removeAttribute('checked');
  }
  // console.log('Is checked: ', endDatumSwitch.checked);
  // console.log('Has checked Attribute: ', endDatumSwitch.hasAttribute('checked'));
  activateDatumInput(endDatumSwitch);
}
function activateDatumInput(switchInput) {
  const datumEingabe = () => document.getElementById('todo-endDatum-input');
  if (switchInput().checked === false) {
    datumEingabe().removeAttribute('disabled');
  }
  // Das Logik und Frontend funktioniert umgekehrt aber funktioniert :)
  if (switchInput().checked === true) {
    datumEingabe().setAttribute('disabled', 'disabled');
  }
}

// Reset inputs on add neue Aufgabe click
neueToDoButton.addEventListener('click', resetInputs);
function resetInputs() {
  inputItems.title().value = '';
  inputItems.ordner().value = 'andere';
  inputItems.tag().value = 'keine';
  inputItems.notizen().value = '';
  inputItems.endDatumSwitch().checked = null;
  inputItems.endDatum().disabled = 'disabled';
}

// Set To Do item color to specified color at form
function setItemFarbe(tag, id) {
  thisToDoEl(id).style.setProperty('--transparent', `var(--${tag})`);
}

// Get this To-Do item
function thisToDoEl(id) {
  return document.querySelector(`[data-todo-id="${id}"]`);
}

function toggleItemDetails(id) {
  thisToDoEl(id).addEventListener('click', () => {
    document.querySelector(`[data-koerper-id="${id}"]`).classList.toggle('d-none');
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

function deleteToDo(el, id) {
  document.querySelector(`[data-todo-del-btn="${id}"]`).addEventListener('click', () => {
    // Prevent click event, inherited from parent element
    event.stopImmediatePropagation();

    deleteToDoFromFront(el);
    deleteToDoFromArr(id);
  });

  // printToDos(thisToDoId());
}

function deleteToDoFromFront(el) {
  const parent = el.parentNode;
  parent.removeChild(el);
}

function deleteToDoFromArr(id) {
  toDoArray.splice(toDoArray.indexOf(toDoArray.find((element) => element.id == id)), 1);
}

export { inputItems, toDoArray, toDosWrapper, setItemFarbe, thisToDoEl, toggleItemDetails, deleteToDo };
