import { getDatabase, ref, set, onValue } from 'firebase/database';
import { currentUserId } from '../auth/auth.js';

const db = getDatabase();

let toDoArray = [];

function setDB(todos) {
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
    })
  );
}

// User ID gelmeden veri cekmeye calisinca butun veri tabanini cekiyor/ User id geldikten sonra bu fonksiyonun calismasini sagla
function getDB(uid) {
  const dbRef = ref(db, 'users/' + uid + '/toDos/');
  onValue(dbRef, (snapshot) => {
    const data = snapshot.val();
    toDoArray = Object.values(data);
    console.log('toDoArray in getDB', toDoArray);
  });
}

export { setDB, getDB, toDoArray };
