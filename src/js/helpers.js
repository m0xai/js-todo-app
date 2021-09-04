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
  const endDatumSwitch = document.getElementById('end-datum-switch');
  !endDatumSwitch.hasAttribute('checked') ? endDatumSwitch.setAttribute('checked', 'true') : endDatumSwitch.removeAttribute('checked');
  activateDatumInput(endDatumSwitch);
}
function activateDatumInput(switchInput) {
  const datumEingabe = document.getElementById('todo-endDatum-input');
  if (switchInput.hasAttribute('checked') == true) {
    datumEingabe.removeAttribute('disabled');
  } else {
    datumEingabe.setAttribute('disabled', 'disabled');
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

export { inputItems };
