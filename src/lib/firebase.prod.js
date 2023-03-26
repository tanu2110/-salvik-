import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyCHnvXTG28gwRO5lusbbfs1i9rRFDrPiHg',
  authDomain: 'netflix-cda59.firebaseapp.com',
  databaseURL: 'https://netflix-cda59.firebaseio.com',
  projectId: 'netflix-cda59',
  storageBucket: 'netflix-cda59.appspot.com',
  messagingSenderId: '943220657572',
  appId: '1:943220657572:web:684bb9f326973d4c71c531',
};

const firebase = Firebase.initializeApp(config);
seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
