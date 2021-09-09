import { toDoArray, getLS } from './mainHelpers.js';
import ordners from './ordner/ordner.js';
import { ToDo } from './add/newToDo.js';
import { printToDos } from './print/print.js';
import { setEditButtons } from './edit/helper.js';
import { filterNachFarbe } from './filter/color.js';
import { filterNachOrdner } from './filter/ordner.js';
import '../css/main.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBWp41s9PnNHuexO5Y3T3K6BJXnSevLCw8',
  authDomain: 'zu-tun.firebaseapp.com',
  projectId: 'zu-tun',
  storageBucket: 'zu-tun.appspot.com',
  messagingSenderId: '940841077166',
  appId: '1:940841077166:web:ca672cd3939ac29a6f603f',
  measurementId: 'G-WXB452VH5K',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

printToDos(toDoArray);

//TODO: Reformat date due date and Erstellungsdatum with words via date-fns
//TODO: Remove date, after wditing to none

//! printToDos() sollte immer am Ende eines functionens kommen, so kann es richtig aktualisieren.
