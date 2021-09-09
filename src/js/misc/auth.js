import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  signInWithRedirect,
  signOut,
  GoogleAuthProvider,
} from 'firebase/auth';

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

const provider = new GoogleAuthProvider();
const auth = getAuth();
const user = auth.currentUser;

const signInBtn = document.getElementById('sign-in-button');
const signOutBtn = document.getElementById('navbar-user-abmelden');

signInBtn.addEventListener('click', () => {
  handleSignIn();
});

signOutBtn.addEventListener('click', () => {
  handleSignOut();
});

// Where the user state changes.
auth.onAuthStateChanged((user) => {
  if (user) {
    changeFrontOnLogin(user);
  } else {
    changeFrontOnLogout(user);
    console.log('No one is here!');
  }
});

function changeFrontOnLogin(user) {
  const userNameSpan = document.getElementById('navbar-user-name');
  userNameSpan.textContent = user.displayName;
  console.log(user.displayName, 'is logged in.');
}
function changeFrontOnLogout(user) {
  console.log('User is logged out.');
}

function handleSignIn() {
  signInWithRedirect(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log('User: ', user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Error code: ', errorCode);
      console.log('Error message: ', errorMessage);
    });
}

function handleSignOut() {
  signOut(auth)
    .then(() => {
      console.log('Sign-out successful.');
    })
    .catch((error) => {
      // An error happened.
    });
}

export { signInBtn, signOutBtn };
