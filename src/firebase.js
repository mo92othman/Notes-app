// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA8gUXN9X6fyLxZxmC3rx-Am23Ng4z-FoI',
  authDomain: 'notes-app-a7bf0.firebaseapp.com',
  projectId: 'notes-app-a7bf0',
  storageBucket: 'notes-app-a7bf0.appspot.com',
  messagingSenderId: '779357960960',
  appId: '1:779357960960:web:43706013113536fd3211e5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, 'notes');
