 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCx8uj_05R2rk_mHj_kQmOZKvcRWKKaal4",
    authDomain: "train-time-bc01f.firebaseapp.com",
    databaseURL: "https://train-time-bc01f.firebaseio.com",
    projectId: "train-time-bc01f",
    storageBucket: "",
    messagingSenderId: "573489039826"
  };
  firebase.initializeApp(config);
  //straight from firebase, api 
// Assign the reference to the database to a variable named 'database'
// var database = ...
var database = firebase.database();