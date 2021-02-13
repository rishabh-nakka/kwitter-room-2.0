//YOUR FIREBASE LINKS
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyAlDEROpOjXPpHD0V6SdOPTxfWYCBFWaLs",
      authDomain: "kwitter-f82c7.firebaseapp.com",
      databaseURL: "https://kwitter-f82c7-default-rtdb.firebaseio.com",
      projectId: "kwitter-f82c7",
      storageBucket: "kwitter-f82c7.appspot.com",
      messagingSenderId: "150666213475",
      appId: "1:150666213475:web:97ab76904a275371372056"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_input");
    console.log(room_name);
    console.log(user_name);
    function send(){
          msg=document.getElementById("message_input").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          })
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

