import { getDatabase, ref, set, onValue } from 'firebase/database';
import toDoArray from '../mainHelpers.js';

const db = getDatabase();

function setDB(todos) {
  console.log('Getting Database...', ref(db, 'users'));
  todos.forEach((element) => {
    set(ref(db, 'users/' + element.id), {
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

const dbRef = ref(db, 'users');
onValue(dbRef, (snapshot) => {
  const data = snapshot.val();
  console.log('Reading Data...', data);
  toDoArray = data;
});

console.log(db);

export { setDB };
