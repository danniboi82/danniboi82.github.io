import firebase from 'firebase';

// Initialize Firebase
    var config = {
        apiKey: "AIzaSyAal2WJzFs4wyGIUiypjz_qPi70v7AJr3I",
        authDomain: "danohhomepage.firebaseapp.com",
        databaseURL: "https://danohhomepage.firebaseio.com",
        projectId: "danohhomepage",
        storageBucket: "danohhomepage.appspot.com",
        messagingSenderId: "697418251661"
      };
      firebase.initializeApp(config);

const fire = firebase.initializeApp(config);

export default fire;