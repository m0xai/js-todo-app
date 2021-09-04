import { inputItems } from './helpers.js';

const submitToDoButton = document.getElementById('submit-todo-button');
submitToDoButton.addEventListener('click', createToDo);

// The prototrype class to create ToDo item
class ToDo {
  constructor(id, title, ordner, tag, notizen, endDatum) {
    this.id = id;
    this.title = title;
    this.ordner = ordner;
    this.tag = tag;
    this.notizen = notizen;
    this.endDatum = endDatum;
  }
}

// Create new ToDo item via its class
function createToDo() {
  const todo = new ToDo(
    Date.now(),
    inputItems.title().value,
    inputItems.ordner().value,
    inputItems.tag().value,
    inputItems.notizen().value,
    inputItems.endDatum().value
  );
  console.log(todo);
  showHome(todo);
}

function showHome(item) {
  const toDosWrapper = document.getElementById('todos-wrapper');
  toDosWrapper.insertAdjacentHTML(
    'afterbegin',
    `<div class="card p-10 m-0 my-15">
  <div class="card-inhalt d-flex flex-column mx-10">
    <div class="dinge-kopf d-flex align-items-center">
      <div class="dinge-kopf-links d-flex align-items-center">
        <button class="check-button btn btn-rounded mr-lg-20 mr-sm-10"></button>
      </div>
      <div class="dinge-kopf-rechts d-flex flex-column">
        <div class="dinge-kopf-rechts-oben">
          <span class="card-title">
            ${item.title}
          </span>
        </div>
        <div class="dinge-kopf-rechts-unten d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#696969" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <div class="zeit-punkt">
            <span class="zeit-punkt-datum ml-5">21.23.2021</span>
            <span class="zeit-punkt-uhrzeit ml-5">21:23</span>
          </div>
        </div>
      </div>
    </div>
    <!-- Toggle d-none onclick -->
    <div class="dinge-koerper mt-10 d-none">
      <p>
        ${item.notizen}
      </p>
    </div>
    <!-- Change Class d-none to d-flex -->
    <div class="dinge-fuss d-none justify-content-between">
      <div class="dinge-fuss-links m-5">
        <span class="dinge-erstelltungs-datum text-muted font-size-12">Erstellt: 12.10.2021 12:21</span>
      </div>
      <div class="dinge-fuss-mitte m-5">
        <span class="badge badge-pill">/ ${item.ordner}</span>
      </div>
      <div class="dinge-fuss-rechts m-5">
        <div class="ding-buttons">
          <div class="btn-group" role="group" aria-label="Basic example">
            <a href="#" class="btn" onclick="halfmoon.toggleModal('modal-6')">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#696969" stroke="#0000ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
                <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
              </svg>
            </a>
            <a href="#" class="btn" onclick="halfmoon.toggleModal('modal-6')">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#ff0000" stroke="#ff0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`
  );
}

export { ToDo };