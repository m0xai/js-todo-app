import { currentUserId } from './auth/auth.js';
import { toDoArray } from './db/db.js';
import { toDosWrapper } from './mainHelpers.js';
import { ordners } from './ordner/ordner.js';
import { ToDo } from './add/newToDo.js';
import { printToDos } from './print/print.js';
import { setEditButtons } from './edit/helper.js';
import { filterNachFarbe } from './filter/color.js';
import { filterNachOrdner } from './filter/ordner.js';
import '../css/main.css';

//TODO: Reformat date due date and Erstellungsdatum with words via date-fns
//TODO: Remove date, after wditing to none

//! printToDos() sollte immer am Ende eines functionens kommen, so kann es richtig aktualisieren.
