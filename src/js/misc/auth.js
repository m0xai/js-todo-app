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

const signInBtn = document.getElementById('sign-in-button');
const signOutBtn = document.getElementById('sign-out-button');

signInBtn.addEventListener('click', () => {
  handleSignIn();
});

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

signOutBtn.addEventListener('click', () => {
  handleSignOut();
});

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
