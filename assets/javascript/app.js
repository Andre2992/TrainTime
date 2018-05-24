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

// Initial Values
var trainName = "";
var dest = "";
var freq = "";
var next = "";
var min;

$('#trainBtn').on("click", function (event) {//after submit push values to server
    var trainName = $('#name').val().trim();
    var dest = $('#dest').val().trim();
    var freq = $('#freq').val().trim();
    var next = $('#next').val().trim();
    var first = $('#first').val().trim();
    console.log('#trainBtn');
});


// Code for handling the push
database.ref().push({
    "trainName": name,
    "dest": dest,
    "freq": freq,
    "next": next,
    "first": first,
    "dateAdded": firebase.database.ServerValue.TIMESTAMP
});