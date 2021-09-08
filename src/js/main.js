import { toDoArray, getLS } from './mainHelpers.js';
import ordners from './ordner.js';
import { ToDo } from './add/newToDo.js';
import { printToDos } from './print/print.js';
import { setEditButtons } from './edit/helper.js';
import '../css/main.css';

printToDos(toDoArray);

//TODO: Reformat date due date and Erstellungsdatum with words via date-fns
//TODO: Remove date, after wditing to none

//! printToDos() sollte immer am Ende eines functionens kommen, so kann es richtig aktualisieren.
