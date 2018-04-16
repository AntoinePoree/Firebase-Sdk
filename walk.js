var config = {
    apiKey: "AIzaSyA0Q2PGZ7PwvhODd2Vh-h5tDjFm2QqQRmw",
    authDomain: "walk-ae55c.firebaseapp.com",
    databaseURL: "https://walk-ae55c.firebaseio.com",
    projectId: "walk-ae55c",
    storageBucket: "",
    messagingSenderId: "728781018999"
  };
  firebase.initializeApp(config);

var database = firebase.database();
var character = firebase.database().ref('character');

character.once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
        var childData = childSnapshot.val();
        console.log(childData);
        document.getElementById('character').innerHTML += '<li>' + childData.name + '</li>';
    }); 
    
});


function writeUserData(Name) {
    firebase.database().ref('character/' + name).push({
        name: Name,
    });
    console.log('character');
}

function PushOnFirebase() {
    let name = document.getElementById("Name").value;
    writeUserData(name);
    window.location.reload();
    console.log('Name');
}