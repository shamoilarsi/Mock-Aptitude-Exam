import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCMD_FOv6uGxO27GfSbmCK2N5Uf6Hd2zgU",
  authDomain: "engg-day.firebaseapp.com",
  databaseURL: "https://engg-day.firebaseio.com",
  projectId: "engg-day",
  storageBucket: "engg-day.appspot.com",
  messagingSenderId: "1059927345381",
  appId: "1:1059927345381:web:5da7d5abb48ead327eec0c",
  measurementId: "G-JQCTT16R0T",
};

firebase.initializeApp(config);
export default firebase;
