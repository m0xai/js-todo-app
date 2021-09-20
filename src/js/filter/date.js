import { toDoArray } from '../db/db.js';
import {
  isToday,
  isTomorrow,
  isThisWeek,
  isThisMonth,
  isAfter,
  add,
} from 'date-fns/esm';
import { printToDos } from '../print/print.js';

//TODO: Add Next Month with endOfMnth and addMonth

const sidebarDueButtons = document.querySelectorAll('[data-sidebar-due]');
sidebarDueButtons.forEach((button) =>
  button.addEventListener('click', setDueButtons)
);

function setDueButtons(e) {
  const [
    todosOfDay,
    todosOfTomorrow,
    todosOfThisWeek,
    todosOfMonth,
    todosOfSpaeter,
  ] = [[], [], [], [], []];

  let addOneMonth;

  toDoArray.forEach((todo) => {
    if (isToday(new Date(todo.endDatum))) {
      todosOfDay.push(todo);
    }
    if (isTomorrow(new Date(todo.endDatum))) {
      todosOfTomorrow.push(todo);
    }
    if (isThisWeek(new Date(todo.endDatum))) {
      todosOfThisWeek.push(todo);
    }
    if (isThisMonth(new Date(todo.endDatum))) {
      todosOfMonth.push(todo);
    }
    addOneMonth = add(new Date(), { months: 1 });
    if (isAfter(new Date(todo.endDatum), addOneMonth)) {
      todosOfSpaeter.push(todo);
    }
  });

  const clickedDue = e.target.getAttribute('data-sidebar-due');
  console.log(clickedDue);
  checkButton(clickedDue);

  function checkButton(zeit) {
    zeit == 'heute' ? printToDos(todosOfDay) : null;
    zeit == 'morgen' ? printToDos(todosOfTomorrow) : null;
    zeit == 'diese-woche' ? printToDos(todosOfThisWeek) : null;
    zeit == 'diesen-monat' ? printToDos(todosOfMonth) : null;
    zeit == 'spaeter' ? printToDos(todosOfSpaeter) : null;
  }
  console.log('todosOfDay: ', todosOfDay);
  console.log('todosOfTomorrow: ', todosOfTomorrow);
  console.log('todosOfThisWeek: ', todosOfThisWeek);
  console.log('todosOfMonth: ', todosOfMonth);
  console.log('Später: ', todosOfSpaeter);
}
