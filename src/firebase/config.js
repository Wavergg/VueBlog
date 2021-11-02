import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDE2Bl1OREC8FiAVzvih-Hoi1igs1JH7yE",
  authDomain: "udemy-vue-firebase-sites-73116.firebaseapp.com",
  projectId: "udemy-vue-firebase-sites-73116",
  storageBucket: "udemy-vue-firebase-sites-73116.appspot.com",
  messagingSenderId: "287516118856",
  appId: "1:287516118856:web:2c018ad52b3327eaba2d7d",
};

firebase.initializeApp(firebaseConfig);

const projectFireStore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectFireStore, timeStamp };
