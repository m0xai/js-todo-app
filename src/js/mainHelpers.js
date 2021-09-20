// Init ToDo Array
import { toDoArray } from './db/db.js';

const toDosWrapper = document.getElementById('todos-list-wrapper');
const neueToDoButton = document.getElementById('neue-todo-button');
const submitToDoButton = document.getElementById('submit-todo-button');

function changeContentTitle(title) {
  const contentTitle = document.getElementById('content-title');
  contentTitle.innerText = title;
}

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
  sidebarLinks.forEach((link) => link.addEventListener('click', setActiveLink));
  return sidebarLinks;
}

function setActiveLink(e) {
  const links = attachEventSidebarLinks();
  links.forEach((link) => {
    if (link == e.target) {
      e.target.classList.add('active');
      changeContentTitle(e.target.innerText);
    } else {
      link.classList.remove('active');
    }
  });
}

// Print Hinweise on empty account
function printOnEmpty(total) {
  const itemsEl = document.getElementById('uncompleted-list-items');
  if (total == 0) {
    const emptyHTML = `<div id='todos-list-wrapper'>
      <div id='emptyListWrapper'>
        <h3>Here seems pretty empty...</h3>
        <p>
        Allthought you can add a new task, if you click on blue "Add New Task" button.
        </p>
        <ol>
          <li>With some words you can describe your task</li>
          <li>Every task can have a color, so they stay organized.</li>
          <li>If the 8 colors not enugh for you, then create your own folder via "Add Folder" button on left sidebar. </li>
          <li>If you have a comlex task, then don't forget to add notes on it.</li>
          <li>Of course there is always deadlines. You can easily add them too.</li>
          <li>May the energy be with you 🚀</li>
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
  attachEventSidebarLinks,
};
