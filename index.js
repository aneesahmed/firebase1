var userId = document.getElementById("id")
var userName = document.getElementById("name")

var mainobj = document.getElementById("mainobj")
function submitClick() {
  var firebaseRef = firebase.database().ref('/users');
  var uid= userId.value;
  var uname = userName.value;
  //firebaseRef.push().set(msgText);
  firebaseRef.push().set({
    id: uid,
    name: uname
  });
  //window.alert("ting");
}
