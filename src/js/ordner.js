let ordners = [];

const addOrdnerFormSendenButton = document.getElementById('add-ornder-form-senden-btn');
addOrdnerFormSendenButton.addEventListener('click', getOrdner);

function getOrdner() {
  let getOrdnerInput = () => document.getElementById('form-add-ordner-name');
  console.log(getOrdnerInput().value);
  addToArr(getOrdnerInput());
  printFront();
  clearForm(getOrdnerInput());
}

function addToArr(param) {
  ordners = [...ordners, param.value];
  console.log(ordners);
}

function printFront() {
  const customOrdners = document.getElementById('custom-ordners');
  customOrdners.innerHTML = '';
  for (let ordner of ordners) {
    customOrdners.insertAdjacentHTML('beforeend', `<a href="#" id="sidebar-${ordner.toLowerCase()}" class="sidebar-link">${ordner}</a>`);
  }
}
printFront();

function clearForm(param) {
  param.value = '';
}

export default ordners;
