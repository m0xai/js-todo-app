import { toDoArray } from '../db/db';
import {
  isToday,
  isTomorrow,
  isThisWeek,
  isThisMonth,
  endOfMonth,
  isAfter,
} from 'date-fns/esm';

//TODO: Add Next Month with endOfMnth and addMonth

const todosOfDay = [];
const todosOfTomorrow = [];
let todosOfThisWeek = [];
const todosOfMonth = [];
const todosOfSpaeter = [];

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
    isAfter(new Date(todo.endDatum), endOfMonth(new Date()))
      ? todosOfSpaeter.push(todo.endDatum)
      : false;
  });

  console.log('todosOfDay: ', todosOfDay);
  console.log('todosOfTomorrow: ', todosOfTomorrow);
  console.log('todosOfThisWeek: ', todosOfThisWeek);
  console.log('todosOfMonth: ', todosOfMonth);
  console.log('Später: ', todosOfSpaeter);
}, 5000);

export {
  todosOfDay,
  todosOfMonth,
  todosOfThisWeek,
  todosOfTomorrow,
  todosOfSpaeter,
};
