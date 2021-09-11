import { getDatabase, ref, set, onValue } from 'firebase/database';
import { currentUserId } from '../auth/auth.js';
import toDoArray from '../mainHelpers.js';

const db = getDatabase();

function setDB(todos) {
  console.log('Getting Database...', ref(db, 'users'));
  todos.forEach((element) => {
    set(ref(db, 'users/' + currentUserId + '/' + element.id), {
      id: element.id,
      title: element.title,
      ordner: element.ordner,
      tag: element.tag,
      notizen: element.notizen,
      endDatum: element.endDatum,
      endDatumSwitch: element.endDatumSwitch,
      endDatumDisabled: element.endDatumDisabled,
    });
  });
}

// User ID gelmeden veri cekmeye calisinca butun veri tabanini cekiyor/ User id geldikten sonra bu fonksiyonun calismasini sagla
function getDB(uid) {
  const dbRef = ref(db, 'users/' + uid + '/');
  onValue(dbRef, (snapshot) => {
    const data = snapshot.val();
    toDoArray = data;
    console.log('todoarray after: ', toDoArray);
  });
}

export { setDB, getDB };
