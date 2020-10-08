import firebase from "firebase";

const config = {
  apiKey: "AIzaSyA3SXKm2bMf9-qq9e17AgreeRmEZ229RRQ",
  authDomain: "mcq-engine-cdc49.firebaseapp.com",
  databaseURL: "https://mcq-engine-cdc49.firebaseio.com",
  projectId: "mcq-engine-cdc49",
  storageBucket: "mcq-engine-cdc49.appspot.com",
  messagingSenderId: "229594679757",
  appId: "1:229594679757:web:a5fc0ef0a49e5985015c84",
  measurementId: "G-JYD7WR23FZ",
};

firebase.initializeApp(config);
export default firebase;
