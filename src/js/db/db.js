import { getDatabase, ref, set, onValue } from 'firebase/database';
import { currentUserId } from '../auth/auth.js';
import { printToDos } from '../print/print.js';
import { setOrdners } from '../ordner/ordner.js';

const db = getDatabase();

let toDoArray = [];
let ordners = [];

function setDB(todos, ordners, isPrint) {
  if (todos) {
    todos.forEach((todo) =>
      set(ref(db, 'users/' + currentUserId + '/toDos/' + todo.id), {
        id: todo.id,
        title: todo.title,
        ordner: todo.ordner,
        tag: todo.tag,
        notizen: todo.notizen,
        endDatum: todo.endDatum,
        endDatumSwitch: todo.endDatumSwitch,
        endDatumDisabled: todo.endDatumDisabled,
        isCompleted: todo.isCompleted,
      })
    );
    isPrint ? getDB(currentUserId, 'toDoArray') : console.log('Not getting DB');
  }
  if (ordners) {
    ordners.forEach((ordner) =>
      set(ref(db, 'users/' + currentUserId + '/ordners/' + ordner.id), {
        id: ordner.id,
        name: ordner.name,
      })
    );
    getDB(currentUserId, 'ordners');
  }
}

// User ID gelmeden veri cekmeye calisinca butun veri tabanini cekiyor/ User id geldikten sonra bu fonksiyonun calismasini sagla
function getDB(uid, array) {
  if (array == 'toDoArray') {
    const dbRef = ref(db, 'users/' + uid + '/toDos/');
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val() || [];
      toDoArray = Object.values(data);
      console.log('toDoArray in getDB', array);
      printToDos(toDoArray);
    });
  }
  if (array == 'ordners') {
    const dbRef = ref(db, 'users/' + uid + '/ordners/');
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val() || [];
      ordners = Object.values(data);
      console.log('Ordners in getDB', ordners);
      setOrdners(ordners);
    });
  }
}

function removeItem(array, itemId) {
  if (array == 'toDoArray') {
    set(ref(db, 'users/' + currentUserId + '/toDos/' + itemId), null);
  }
  if (array == 'ordners') {
    set(ref(db, 'users/' + currentUserId + '/ordners/' + itemId), null);
  }
}

export { setDB, getDB, toDoArray, ordners, removeItem };
