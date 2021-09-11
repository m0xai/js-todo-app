import { getDatabase, ref, set, onValue } from 'firebase/database';
import { getUserId } from '../auth/helper.js';

const db = getDatabase();

function writeUserData(name, alter, userId) {
  console.log('Getting Database...', ref(db, 'users'));
  set(ref(db, 'users'), {
    usering: name,
    alter: alter,
    uid: userId,
  });
}

const starCountRef = ref(db, 'users');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log('Reading Data...', data);
});
setTimeout(() => {
  writeUserData('krem', 22, getUserId());
}, 3000);
