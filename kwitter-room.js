var firebaseConfig = {
    apiKey: "AIzaSyA5dAGytKVwplx08LLhvGLAbypGO5-HQ_U",
    authDomain: "kwitter-35983.firebaseapp.com",
    databaseURL: "https://kwitter-35983-default-rtdb.firebaseio.com",
    projectId: "kwitter-35983",
    storageBucket: "kwitter-35983.appspot.com",
    messagingSenderId: "832318553594",
    appId: "1:832318553594:web:b0e29f770d33c1704ef843"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addRoom(){
    room_name = document.getElementById("room-name").value
    firebase.database().ref("/").child(room_name).update({ purpose : "adding room"});
    localStorage.setItem("room_name", room_name)
  }

  function getData(){
    firebase.database().ref("/").on('value', function(snapshot){
      document.getElementById("trending-rooms").innerHTML = "";
      snapshot.forEach(function(childSnapshot){
        room_names = childSnapshot.key;
        row = "<div class ='room' id = "+room_names+" onclick = 'goToRoom(this.id)'>"+room_names+"</div><hr>";
        document.getElementById("trending-rooms").innerHTML += row;
      });
    });
  };

  getData();

  function goToRoom(clickroom){
    localStorage.setItem("room_name", clickroom)
    window.location = "kwitter-page.html"
  }



  