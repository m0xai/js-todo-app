// Init ToDo Array
import { toDoArray } from './db/db.js';

const toDosWrapper = document.getElementById('todos-list-wrapper');
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

// Show success alert after an action
function toastSuccessAlert(itemType, proccess) {
  console.log('Toast fired!');
  halfmoon.initStickyAlert({
    content: `Ihre ${itemType} wurde erfolgreich ${proccess}.`,
    title: 'Erfolgreich!',
    alertType: 'alert-success',
    fillType: 'filled',
  });
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

// Print Hinweise on empty account
function printOnEmpty(total, done) {
  const itemsEl = document.getElementById('uncompleted-list-items');
  if (total == 0) {
    const emptyHTML = `<div id='todos-list-wrapper'>
      <div id='emptyListWrapper'>
        <h3>Sie haben keine Aufgabe hinzugefügt</h3>
        <p>
          Sie können mit "+ Neue Aufgabe" button sofort eine Aufgabe hier
          eintragen
        </p>
        <ol>
          <li>Sie können Ihre Aufgabe kurz bennen.</li>
          <li>Jede Aufgabe kann Ihre persönliche Orner einordnen.</li>
          <li>Mit der Farben können Sie sie auch kategorisieren.</li>
          <li>Ihre Aufgaben können mit Notizen veranschaulicht werden.</li>
          <li>Sie können ein Frist feststellen.</li>
        </ol>
      </div>
    </div>`;
    itemsEl.innerHTML = emptyHTML;
  }
}

export {
  inputItems,
  neueToDoButton,
  toDosWrapper,
  findToDoItem,
  thisToDoEl,
  thisToDoId,
  toggleDatumInput,
  submitToDoButton,
  setActiveLink,
  toastSuccessAlert,
  printOnEmpty,
};
