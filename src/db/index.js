import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC2v6ASzfEnNZZgWqkLWu81hpATaBZqTCg",
  authDomain: "test1-9ab65.firebaseapp.com",
  databaseURL: "https://test1-9ab65.firebaseio.com",
  projectId: "test1-9ab65",
  storageBucket: "test1-9ab65.appspot.com",
  messagingSenderId: "978165791265",
  appId: "1:978165791265:web:d2cec07f989950ca3ac160",
  measurementId: "G-NDMGPNNP98"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();
export const dbMessages = db.collection('messages');