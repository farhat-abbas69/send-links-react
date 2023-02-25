// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAw8cM9IRnBj34lfxy4A0OPLAwKtjNMFos',
  authDomain: 'send-links-74d21.firebaseapp.com',
  projectId: 'send-links-74d21',
  storageBucket: 'send-links-74d21.appspot.com',
  messagingSenderId: '124727079496',
  appId: '1:124727079496:web:a64c1ee191947c14c59e7d',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();