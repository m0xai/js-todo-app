// Init ToDo Array
import { toDoArray, removeItem } from './db/db.js';

const toDosWrapper = document.getElementById('todos-wrapper');
const neueToDoButton = document.getElementById('neue-todo-button');
const submitToDoButton = document.getElementById('submit-todo-button');

// Get every input value from new ToDo Modal
const inputItems = {
  title: () => document.getElementById('todo-title-input'),
  ordner: () => document.getElementById('todo-ordner-input'),
  tag: () => document.getElementById('todo-tag-input'),
  notizen: () => document.getElementById('todo-notizen-input'),
  endDatum: () => document.getElementById('todo-endDatum-input'),
  endDatumSwitch: () => document.getElementById('end-datum-switch'),
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

// Activate - Deactivate Datum Eingabe via Switch
const datumEingabeSwitchLabel = document.getElementById(
  'end-datum-switch-label'
);
datumEingabeSwitchLabel.addEventListener('click', toggleDatumInput);

function toggleDatumInput() {
  console.log(inputItems.endDatumSwitch());
  if (inputItems.endDatumSwitch().checked == false) {
    inputItems.endDatumSwitch().setAttribute('checked', 'true');
  }
  if (inputItems.endDatumSwitch().checked == true) {
    inputItems.endDatumSwitch().removeAttribute('checked');
  }
  activateDatumInput(inputItems.endDatumSwitch);
}

function activateDatumInput(switchInput) {
  const datumEingabe = () => document.getElementById('todo-endDatum-input');
  if (switchInput().checked == false) {
    datumEingabe().removeAttribute('disabled');
  }
  // Das Logik und Frontend funktioniert umgekehrt aber funktioniert :)

  if (switchInput().checked == true) {
    datumEingabe().setAttribute('disabled', 'disabled');
  }
}

// Get this To-Do item
function thisToDoEl(id) {
  return document.querySelector(`[data-todo-id="${id}"]`);
}

// Get this To-Do Id on create
function thisToDoId(id) {
  return id;
}

function findToDoItem(id) {
  return toDoArray.find((item) => item.id == id);
}

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
  });
}

// Remove item from array
function deleteToDoFromArr(id) {
  removeItem('toDoArray', id);
}

function attachEventSidebarLinks() {
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  sidebarLinks().forEach((link) =>
    link.addEventListener('click', setActiveLink)
  );
  return { sidebarLinks };
}

function setActiveLink(e) {
  console.log('Sidebar Links:', attachEventSidebarLinks());
  attachEventSidebarLinks().forEach((link) => {
    if (link == e.target) {
      e.target.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

export {
  inputItems,
  neueToDoButton,
  toDosWrapper,
  findToDoItem,
  thisToDoEl,
  thisToDoId,
  toggleDatumInput,
  deleteToDo,
  submitToDoButton,
  setActiveLink,
};
