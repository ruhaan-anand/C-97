// var firebaseConfig = {
//     apiKey: "AIzaSyA5dAGytKVwplx08LLhvGLAbypGO5-HQ_U",
//     authDomain: "kwitter-35983.firebaseapp.com",
//     databaseURL: "https://kwitter-35983-default-rtdb.firebaseio.com",
//     projectId: "kwitter-35983",
//     storageBucket: "kwitter-35983.appspot.com",
//     messagingSenderId: "832318553594",
//     appId: "1:832318553594:web:b0e29f770d33c1704ef843"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("login_name");

function send(){
    msg = document.getElementById("msg").value
    firebase.database().ref(room_name).push({
        Name : user_name,
        Msg : msg,
        Like : 0
    });
    document.getElementById("msg").value = "";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
        firebase_message_id = childKey;
        message_data = childData;
        console.log(message_data)
        myName = message_data['Name']
        myMessage = message_data['Msg']
        myLikes = message_data['Like'] 
        myName_tag = "<h4>"+myName+"<img class = 'tick-img' src = 'tick.png'></h4>";
        myMessage_tag = "<h4>"+myMessage+"</h4>"
        myLike_tag = "<button class = 'btn btn-warning' id = "+firebase_message_id+"value = "+myLikes+" onclick = 'updateLike(this.id)'>"
        document.getElementById("output").innerHTML += myName_tag+myMessage_tag+myLike_tag;
//Start code

//End code
     } });  }); }
getData();

function updateLike(mymessage_id){
    Likes = document.getElementById(mymessage_id).value;
    myLikes = Number(Likes)+1;
    firebase.database().ref(room_name).child(mymessage_id).update({Like : myLikes});

}