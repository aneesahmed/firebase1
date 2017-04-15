(function() {
// Initialize Firebase
const config = {
  apiKey: "AIzaSyAvLrw5p-brAICU5RYMVTd-ER0oJW2H6f4",
  authDomain: "isupport-50cb7.firebaseapp.com",
  databaseURL: "https://isupport-50cb7.firebaseio.com",
  projectId: "isupport-50cb7",
  storageBucket: "isupport-50cb7.appspot.com",
  messagingSenderId: "133622136386"
};
firebase.initializeApp(config);


//get elements
const preObject = document.getElementById('object');

// Create Refrences
const dbRefObject = firebase.database().ref().child('object');

// sync object changes
dbRefObject.on('value', snap => console.log(snap.val()));

}());
