import firebase from 'firebase/app'

var fire = require("firebase/app");

require("firebase/auth");
require("firebase/database");
require("firebase/firestore");
//require("firebase/messaging");
//require("firebase/functions");

const firebaseConfig = {
  apiKey: "AIzaSyBX1C3f5nVwt4EMyTISSkTLRPXhExO1WEc",
  authDomain: "notirobos.firebaseapp.com",
  databaseURL: "https://notirobos.firebaseio.com",
  projectId: "notirobos",
  storageBucket: "notirobos.appspot.com",
  messagingSenderId: "706806441426",
  appId: "1:706806441426:web:54eea06f11d53f95"
};

// Initialize Firebase
const notirobosApp = firebase.initializeApp(firebaseConfig);
//const notirobosApp2 = firebase.initializeApp(firebaseConfig);

notirobosApp.firestore().settings({timestampsInSnapshots: true});
//notirobosApp2.firestore().settings({timestampsInSnapshots: true});

export default notirobosApp.firestore();
//export default notirobosApp2.firestore()