import firebase from 'firebase/app';
import firebaseConfig from './config';
import 'firebase/analytics';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const { analytics } = firebase;

export default firebase;
