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
document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";

function addRoom() {
      room_name = document.getElementById("romm_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location("kwitter_page.html");
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name -"+Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}