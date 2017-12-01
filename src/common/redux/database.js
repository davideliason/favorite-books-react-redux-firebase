import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAiTmyH-nn81vbSDlEg1z9Fo23wLYZotY8",
    authDomain: "favorite-books-redux-fb-9f34a.firebaseapp.com",
    databaseURL: "https://favorite-books-redux-fb-9f34a.firebaseio.com",
    projectId: "favorite-books-redux-fb-9f34a",
    storageBucket: "",
    messagingSenderId: "468590883701"
  };
  firebase.initializeApp(config);
const database = firebase.database();

export default database;
