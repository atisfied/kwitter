// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyANl-dzj8eMqSI0B4_ANAO5YjFkw_zYKng",
      authDomain: "kwitter-e5d5d.firebaseapp.com",
      databaseURL: "https://kwitter-e5d5d-default-rtdb.firebaseio.com",
      projectId: "kwitter-e5d5d",
      storageBucket: "kwitter-e5d5d.appspot.com",
      messagingSenderId: "190949730912",
      appId: "1:190949730912:web:9c276ce944b6c60088f105"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);    

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();