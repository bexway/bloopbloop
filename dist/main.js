var config = {
    apiKey: "AIzaSyBPF1iyUTxPwR4xIzw913RMGdI303u47E0",
    authDomain: "bloopbloop-e3026.firebaseapp.com",
    databaseURL: "https://bloopbloop-e3026.firebaseio.com",
    projectId: "bloopbloop-e3026",
    storageBucket: "bloopbloop-e3026.appspot.com",
    messagingSenderId: "539260396786"
};

firebase.initializeApp(config);

var database = firebase.database();
var playersRef = database.ref("players");
var username = null;
var players = null;
