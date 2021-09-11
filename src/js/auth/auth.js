import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
} from 'firebase/auth';
import { useRouter } from './helper.js';

const firebaseConfig = {
  apiKey: 'AIzaSyBWp41s9PnNHuexO5Y3T3K6BJXnSevLCw8',
  authDomain: 'zu-tun.firebaseapp.com',
  projectId: 'zu-tun',
  storageBucket: 'zu-tun.appspot.com',
  messagingSenderId: '940841077166',
  appId: '1:940841077166:web:ca672cd3939ac29a6f603f',
  measurementId: 'G-WXB452VH5K',
  databaseURL: 'https://zu-tun-default-rtdb.europe-west1.firebasedatabase.app/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
let userId;

// Where the user state changes.
onAuthStateChanged(auth, (user) => {
  if (user) {
    useRouter(true);
    console.log(user.uid, 'in now in!');
    changeFrontOnLogin(user);
    userId = user.uid;
  } else {
    useRouter(false);
    console.log('No one is here!');
  }
});
console.log('User id is.... ', userId);

// Sign in event
function handleSignIn() {
  signInWithRedirect(auth, provider)
    .then((result) => {
      const user = result.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Error code: ', errorCode);
      console.log('Error message: ', errorMessage);
    });
}

// Sign out event
function handleSignOut() {
  signOut(auth)
    .then(() => {
      useRouter(false);
      console.log('Sign-out successful. Bye 👋🏻');
    })
    .catch((error) => {
      console.log(error);
    });
}

function changeFrontOnLogin(user) {
  console.log('User on changeFrontOnLogin:', user.displayName);

  if (window.location.pathname == '/app.html') {
    console.log('Location:', document.location);
    const userNameNav = document.getElementById('navbar-user-name');
    userNameNav.dataset.uid = user.uid;
    userNameNav.innerText = user.displayName;
    const abmeldenBtn = document.getElementById('navbar-user-abmelden');
    abmeldenBtn.addEventListener('click', handleSignOut);
  }
}

export { handleSignIn };