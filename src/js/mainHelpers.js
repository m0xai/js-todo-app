// Init ToDo Array
import { setDB, toDoArray } from './db/db.js';

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

function toggleDatumInput(e) {
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

// Delete To Do item driver
function deleteToDo(el, id) {
  document
    .querySelector(`[data-todo-del-btn="${id}"]`)
    .addEventListener('click', () => {
      // Prevent click event, inherited from parent element
      event.stopImmediatePropagation();

      deleteToDoFromFront(el);
      deleteToDoFromArr(id);
    });
}

// Remove item from parent node
function deleteToDoFromFront(el) {
  const parent = el.parentNode;
  console.log('this el gonne be dle', el);
  parent.removeChild(el);
}

// Remove item from array
function deleteToDoFromArr(id) {
  let delItem = toDoArray.indexOf(
    toDoArray.find((element) => element.id == id)
  );
  console.log('To delete', delItem);
  toDoArray.splice(delItem, 1);
  setDB(toDoArray, false);
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
