var userId = document.getElementById("id")
var userName = document.getElementById("name")

var mainobj = document.getElementById("userList")

var firebaseRef = firebase.database().ref('/users');
firebaseRef.on('value',function(snapshot) {
	//console.log(snapshot.val());
	
	mainobj.innerHtml = mainobj.innerHtml + "<li" + snapshot
	
}
);

function submitClick() {
  var firebaseRef = firebase.database().ref('/users');
  var uid= userId.value;
  var uname = userName.value;
  //firebaseRef.push().set(msgText);
  firebaseRef.child(uid).set(uname);
  //firebaseRef.child("/4").set(uid);
	
  
  //window.alert("ting");
