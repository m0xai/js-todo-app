import { isToday } from 'date-fns/esm';
import { isTomorrow } from 'date-fns/esm';
import { isThisWeek } from 'date-fns/esm';
import { isThisMonth } from 'date-fns/esm';
import { toDoArray } from '../db/db';

//TODO: Add Next Month with endOfMnth and addMonth

const todosOfDay = [];
const todosOfTomorrow = [];
let todosOfThisWeek = [];
const todosOfMonth = [];

setTimeout(() => {
  toDoArray.forEach((todo) => {
    isToday(new Date(todo.endDatum)) ? todosOfDay.push(todo.endDatum) : false;
    isTomorrow(new Date(todo.endDatum))
      ? todosOfTomorrow.push(todo.endDatum)
      : false;
    isThisWeek(new Date(todo.endDatum))
      ? todosOfThisWeek.push(todo.endDatum)
      : false;
    isThisMonth(new Date(todo.endDatum))
      ? todosOfMonth.push(todo.endDatum)
      : false;
  });

  console.log('todosOfDay: ', todosOfDay);
  console.log('todosOfTomorrow: ', todosOfTomorrow);
  console.log('todosOfThisWeek: ', todosOfThisWeek);
  console.log('todosOfMonth: ', todosOfMonth);
}, 5000);

export { todosOfDay, todosOfMonth, todosOfThisWeek, todosOfTomorrow };
