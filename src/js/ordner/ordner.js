import { setInputOrdners } from './helper.js';
import { ordners, setDB } from '../db/db.js';
import { addClickEventToOrdners } from '../filter/ordner.js';
import folderIcon from '../../img/icons/folder.svg';

const addOrdnerFormSendenButton = document.getElementById(
  'add-ornder-form-senden-btn'
);
addOrdnerFormSendenButton.addEventListener('click', getOrdner);

class ordnerClass {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}

function getOrdner() {
  let getOrdnerInput = () => document.getElementById('form-add-ordner-name');
  console.log('New Ordner:', getOrdnerInput().value);
  createOrdner(getOrdnerInput().value);
  printFront(ordners);
  clearForm(getOrdnerInput());
  setInputOrdners(ordners);
}

function createOrdner(input) {
  const newOrdner = new ordnerClass(input, Date.now());
  ordners.push(newOrdner);
  console.log('New ordner obj', newOrdner);
  setDB(false, ordners, true);
  console.log('ordners from DB', ordners);
  return newOrdner;
}

function printFront(ordners) {
  const customOrdners = document.getElementById('custom-ordners');
  customOrdners.innerHTML = '';
  ordners.forEach((ordner) => {
    customOrdners.insertAdjacentHTML(
      'beforeend',
      `<a href="#" data-sidebar-ordner="${ordner.name.toLowerCase()}" class="sidebar-link sidebar-ordner d-flex">
    <img src="${folderIcon}" style="margin-right:10px" alt="Ordner Icon"> 
      ${ordner.name}</a>`
    );
  });
  addClickEventToOrdners();
}
function clearForm(param) {
  param.value = '';
}

function setOrdners(ordners) {
  printFront(ordners);
  setInputOrdners(ordners);
  addClickEventToOrdners();
}

export { printFront, setOrdners };
