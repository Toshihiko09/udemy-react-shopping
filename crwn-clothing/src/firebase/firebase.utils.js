import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
  apiKey: "AIzaSyB1rdEcnVBNQVzCaXrsNFH2VmLcutsAGk4",
  authDomain: "crwn-db-74ef3.firebaseapp.com",
  databaseURL: "https://crwn-db-74ef3.firebaseio.com",
  projectId: "crwn-db-74ef3",
  storageBucket: "crwn-db-74ef3.appspot.com",
  messagingSenderId: "871547177625",
  appId: "1:871547177625:web:63a61192070ee24b0dc608",
  measurementId: "G-1NLBC8Y475"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;