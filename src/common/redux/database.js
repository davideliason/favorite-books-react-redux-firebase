import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAwVRa-WTujRd_0eZGOQsC1rERj4hqKTPc",
    authDomain: "favorite-books-redux-fb.firebaseapp.com",
    databaseURL: "https://favorite-books-redux-fb.firebaseio.com",
    projectId: "favorite-books-redux-fb",
    storageBucket: "favorite-books-redux-fb.appspot.com",
    messagingSenderId: "1005823358182"
  };
firebase.initializeApp(config);
const database = firebase.database();

export default database;
