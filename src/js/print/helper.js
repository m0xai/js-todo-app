import { toDosWrapper } from '../mainHelpers.js';
import { toDoArray } from '../db/db.js';
import { formatDistanceToNow } from 'date-fns';
import { de } from 'date-fns/locale';
import deleteIcon from '../../img/icons/delete.svg' 
import editIcon from  '../../img/icons/edit.svg' 

function clearMainWrapper(toDos) {
  return (toDosWrapper.innerHTML = `
  <div id="uncompleted-wrapper">
  </div>
  <div id="completed-wrapper">
    <div id="completed-title-wrapper" class="d-flex align-items-center"> 
      <h3 id="completed-title" class=" text-muted font-size-16 mt-20">Erledigte Aufgaben</h3>
      <span class="badge badge-success ml-10">${
        countToDos(toDos).erledigteToDos
      }/${countToDos(toDos).totalToDos}</span>
    </div>
  </div>
  `);
}

const unCompletedWrapper = () => document.getElementById('uncompleted-wrapper');
const completedWrapper = () => document.getElementById('completed-wrapper');

function seperateItemsForStatus(todo) {
  if (!todo.isCompleted) {
    unCompletedWrapper().insertAdjacentHTML('afterbegin', printItems(todo));
  }
  if (todo.isCompleted) {
    completedWrapper().insertAdjacentHTML('beforeend', printItems(todo));
  }
}

function printItems(toDo) {
  return `<div class="card p-10 m-0 my-15" data-todo-id="${toDo.id}">
        <div class="card-inhalt d-flex flex-column mx-10">
          <div class="dinge-kopf d-flex align-items-center">
            <div class="dinge-kopf-links d-flex align-items-center">
              <button class="check-button btn btn-rounded mr-lg-20 mr-sm-10" data-todo-check-btn-id="${
                toDo.id
              }"></button>
            </div>
            <div class="dinge-kopf-rechts d-flex flex-column">
              <div class="dinge-kopf-rechts-oben">
                <span class="card-title">
                  ${toDo.title}
                </span>
              </div>
              <div class="dinge-kopf-rechts-unten d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#696969" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <div class="zeit-punkt">
                  <span class="zeit-punkt-datum ml-5">${toDo.endDatum}</span>
                </div>
              </div>
            </div>
          </div>
          <!-- Toggle d-none onclick -->
          <div class="dinge-koerper mt-10 d-none" data-koerper-id="${toDo.id}">
            <p>
              ${toDo.notizen}
            </p>
          </div>
          <!-- Change Class d-none to d-flex -->
          <div class="dinge-fuss d-none justify-content-between" data-fuss-id="${
            toDo.id
          }">
            <div class="dinge-fuss-links m-5">
              <span class="dinge-erstelltungs-datum text-muted font-size-12">${formatDistanceToNow(
                new Date(toDo.id),
                { locale: de, addSuffix: true }
              )} erstellt.</span>
            </div>
            <div class="dinge-fuss-mitte m-5">
              <span class="badge badge-pill">/ ${toDo.ordner}</span>
            </div>
            <div class="dinge-fuss-rechts m-5">
              <div class="ding-buttons">
                <div class="btn-group" role="group" aria-label="Basic example">
                  <a href="#" class="btn" onclick="halfmoon.toggleModal('modal-todo')" data-todo-edit-btn="${
                    toDo.id
                  }">
                  <img src="${editIcon}" alt="Bearbeitungs Icon"> 
                  </a>
                  <a href="#" class="btn" onclick="halfmoon.toggleModal('modal-confirm')" data-todo-del-btn="${toDo.id}">
                  <img src="${deleteIcon}" alt="Loeschen Icon"> 
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
}

function countToDos(todos) {
  let erledigteToDos = 0;
  let totalToDos = todos.length;
  todos.forEach((todo) => {
    todo.isCompleted ? erledigteToDos++ : false;
  });
  countTotalToDos();
  return {
    totalToDos,
    erledigteToDos,
  };
}

function countTotalToDos() {
  let total = toDoArray.length;
  let done = toDoArray.filter((item) => item.isCompleted == true).length;
  updateNavStatus(done, total);
}

function updateNavStatus(done, total) {
  const menubarStatusSpan = document.getElementById('menubar-status-span');
  menubarStatusSpan.textContent = done + '/' + total;
}

export {
  countToDos,
  clearMainWrapper,
  printItems,
  seperateItemsForStatus,
  completedWrapper,
  unCompletedWrapper,
};
