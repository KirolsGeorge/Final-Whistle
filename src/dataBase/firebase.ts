import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBCjLpU6-1hz9FBr5rT0DNJswLcEOhENwE',
  authDomain: 'finalwhistle-65c2a.firebaseapp.com',
  projectId: 'finalwhistle-65c2a',
  storageBucket: 'finalwhistle-65c2a.firebasestorage.app',
  messagingSenderId: '797448403627',
  appId: '1:797448403627:web:02ab9f87aa38bebf1755ee',
  measurementId: 'G-PKSGYHVGZL',
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
