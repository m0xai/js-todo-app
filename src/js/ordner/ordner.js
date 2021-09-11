// import { setLS } from '../mainHelpers.js';
import { setInputOrdners } from './helper.js';

let ordners = JSON.parse(localStorage.getItem('ordners')) || [];

setInputOrdners();

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
  printFront();
  clearForm(getOrdnerInput());
  setInputOrdners();
}

function createOrdner(input) {
  const newOrdner = new ordnerClass(input, Date.now());
  ordners.push(newOrdner);
  console.log('New ordner obj', newOrdner);
  // setLS('ordners', ordners);
  console.log(ordners);
  return newOrdner;
}

function printFront() {
  const customOrdners = document.getElementById('custom-ordners');
  customOrdners.innerHTML = '';
  ordners.forEach((ordner) => {
    customOrdners.insertAdjacentHTML(
      'beforeend',
      `<a href="#" data-sidebar-ordner="${ordner.name.toLowerCase()}" class="sidebar-link sidebar-ordner">${
        ordner.name
      }</a>`
    );
  });
}
printFront();

function clearForm(param) {
  param.value = '';
}

export { ordners };
